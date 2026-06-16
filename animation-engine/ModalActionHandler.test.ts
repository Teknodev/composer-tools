import { vi, describe, it, expect, beforeEach } from 'vitest';
import { ModalActionHandler } from './ModalActionHandler';
import ModalService from '../composer-base-components/modal/modal.service';
import { editor } from '../../classes/Editor';

vi.mock('../composer-base-components/modal/modal.service', () => ({
  default: {
    emit: vi.fn(),
    subscribe: vi.fn(),
  }
}));

vi.mock('../../classes/Editor', () => ({
  editor: {
    getModals: vi.fn(() => []),
    findModalByKey: vi.fn(),
  }
}));

describe('ModalActionHandler', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    (editor.getModals as any).mockReturnValue([]);
  });

  it('should emit open event with the modal resolved by editor.findModalByKey', () => {
    const mockModal = { name: 'TestModal', signature: { getName: () => 'TestModal' } };
    (editor.findModalByKey as any).mockReturnValue(mockModal);

    const config = { type: 'open-modal' as const, modalId: 'TestModal', closeOnOutsideClick: true, closeOnEsc: true };

    ModalActionHandler.execute(config);

    expect(editor.findModalByKey).toHaveBeenCalledWith('TestModal');
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
    expect(editor.findModalByKey).not.toHaveBeenCalled();
    expect(ModalService.emit).not.toHaveBeenCalled();
  });

  it('should not emit if the resolver finds no modal', () => {
    (editor.findModalByKey as any).mockReturnValue(undefined);
    ModalActionHandler.execute({ type: 'open-modal', modalId: 'NonExistentModal', closeOnOutsideClick: true, closeOnEsc: true });
    expect(ModalService.emit).not.toHaveBeenCalled();
  });

  it('passes the openAnimation through when the modal is resolved', () => {
    const mockModal = { name: 'Animated', signature: { getName: () => 'Animated' } };
    (editor.findModalByKey as any).mockReturnValue(mockModal);

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
});
