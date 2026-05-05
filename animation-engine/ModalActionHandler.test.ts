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
    getModals: vi.fn()
  }
}));

describe('ModalActionHandler', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should emit open event with full modal object if modal is found', () => {
    const mockModal = { name: 'TestModal', signature: { getName: () => 'TestModal' } };
    (editor.getModals as any).mockReturnValue([mockModal]);

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

  it('should not emit if modalId is missing', () => {
    ModalActionHandler.execute({ type: 'open-modal', modalId: '', closeOnOutsideClick: true, closeOnEsc: true });
    expect(ModalService.emit).not.toHaveBeenCalled();
  });

  it('should not emit if modal is not found', () => {
    (editor.getModals as any).mockReturnValue([]);
    ModalActionHandler.execute({ type: 'open-modal', modalId: 'NonExistentModal', closeOnOutsideClick: true, closeOnEsc: true });
    expect(ModalService.emit).not.toHaveBeenCalled();
  });

  it('should emit open event when matched by literal _id', () => {
    const mockModal = { id: '69c4d6468324fe002ceb0ef1', name: 'DifferentName', signature: { getName: () => 'DifferentName' } };
    (editor.getModals as any).mockReturnValue([mockModal]);

    const config = { type: 'open-modal' as const, modalId: '69c4d6468324fe002ceb0ef1', closeOnOutsideClick: true, closeOnEsc: true };
    
    ModalActionHandler.execute(config);

    expect(ModalService.emit).toHaveBeenCalledWith('open', {
      modal: mockModal,
      modalId: '69c4d6468324fe002ceb0ef1',
      openAnimation: undefined,
      closeOnOutsideClick: true,
      closeOnEsc: true
    });
  });
});
