import { vi, describe, it, expect, beforeEach } from 'vitest';
import { ModalActionHandler } from './ModalActionHandler';
import ModalService from '../composer-base-components/modal/modal.service';
import { editor } from '../../classes/Editor';

vi.mock('../composer-base-components/modal/modal.service', () => ({
  default: {
    emit: vi.fn(),
    subscribe: vi.fn(),
    isOpen: false,
    lastClosedAt: 0,
  }
}));

// The handler resolves the modal itself out of editor.getModals(); there is no
// findModalByKey on the editor any more.
vi.mock('../../classes/Editor', () => ({
  editor: {
    getModals: vi.fn(() => []),
  }
}));

const withModals = (...modals: any[]) => (editor.getModals as any).mockReturnValue(modals);

describe('ModalActionHandler', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    withModals();
    (ModalService as any).isOpen = false;
    (ModalService as any).lastClosedAt = 0;
  });

  it('should emit open event with the modal it resolved by name', () => {
    const mockModal = { name: 'TestModal', signature: { getName: () => 'TestModal' } };
    withModals(mockModal);

    const config = { type: 'open-modal' as const, modalId: 'TestModal', closeOnOutsideClick: true, closeOnEsc: true };

    ModalActionHandler.execute(config);

    expect(ModalService.emit).toHaveBeenCalledWith('open', {
      modal: mockModal,
      modalId: 'TestModal',
      openAnimation: undefined,
      closeOnOutsideClick: true,
      closeOnEsc: true
    });
  });

  it('should not emit (or resolve) if modalId is missing', () => {
    ModalActionHandler.execute({ type: 'open-modal', modalId: '', closeOnOutsideClick: true, closeOnEsc: true });
    expect(editor.getModals).not.toHaveBeenCalled();
    expect(ModalService.emit).not.toHaveBeenCalled();
  });

  it('should not emit if no modal matches', () => {
    withModals({ id: 'someone-else', name: 'Other' });
    ModalActionHandler.execute({ type: 'open-modal', modalId: 'NonExistentModal', closeOnOutsideClick: true, closeOnEsc: true });
    expect(ModalService.emit).not.toHaveBeenCalled();
  });

  it('passes the openAnimation through when the modal is resolved by id', () => {
    const mockModal = { id: '805f7a35-8819-478d-887c-0ac36dcf722c', name: 'Animated', signature: { getName: () => 'Animated' } };
    withModals(mockModal);

    ModalActionHandler.execute({
      type: 'open-modal',
      modalId: '805f7a35-8819-478d-887c-0ac36dcf722c',
      openAnimation: 'fadeIn',
      closeOnOutsideClick: false,
      closeOnEsc: false,
    });

    expect(ModalService.emit).toHaveBeenCalledWith('open', {
      modal: mockModal,
      modalId: '805f7a35-8819-478d-887c-0ac36dcf722c',
      openAnimation: 'fadeIn',
      closeOnOutsideClick: false,
      closeOnEsc: false,
    });
  });

  it('does not stack a second modal on top of one already open', () => {
    withModals({ name: 'TestModal', signature: { getName: () => 'TestModal' } });
    (ModalService as any).isOpen = true;

    ModalActionHandler.execute({ type: 'open-modal', modalId: 'TestModal', closeOnOutsideClick: true, closeOnEsc: true });

    expect(ModalService.emit).not.toHaveBeenCalled();
  });

  it('swallows the hover re-trigger that fires the instant a modal closes', () => {
    withModals({ name: 'TestModal', signature: { getName: () => 'TestModal' } });
    (ModalService as any).lastClosedAt = Date.now();

    // Closing the modal removes the overlay, which fires a fresh mouseenter on
    // the trigger element; re-opening on it traps the user in a loop.
    ModalActionHandler.execute(
      { type: 'open-modal', modalId: 'TestModal', closeOnOutsideClick: true, closeOnEsc: true },
      'hover'
    );
    expect(ModalService.emit).not.toHaveBeenCalled();

    // A click on the same element is the user asking for it, so it still opens.
    ModalActionHandler.execute(
      { type: 'open-modal', modalId: 'TestModal', closeOnOutsideClick: true, closeOnEsc: true },
      'click'
    );
    expect(ModalService.emit).toHaveBeenCalledTimes(1);
  });
});
