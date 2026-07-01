interface Events {
  [key: string]: Function[];
}

class ModalService {
  public events: Events;
  /** True while a modal is currently open. Single source of truth for open state. */
  public isOpen = false;
  /** Timestamp (ms) of the most recent close — used for the hover re-open cooldown. */
  public lastClosedAt = 0;
  constructor(events?: Events) {
    this.events = events || {};
  }

  public subscribe(name: string, cb: Function) {
    (this.events[name] || (this.events[name] = [])).push(cb);

    return {
      unsubscribe: () =>
        this.events[name] &&
        this.events[name].splice(this.events[name].indexOf(cb) >>> 0, 1),
    };
  }

  public emit(name: string, ...args: any[]): void {
    // Keep open-state tracking in sync so handlers can guard against
    // re-opening a modal that is already visible (e.g. hover loops).
    if (name === "open") {
      this.isOpen = true;
    } else if (name === "close") {
      this.isOpen = false;
      this.lastClosedAt = Date.now();
    }
    (this.events[name] || []).forEach((fn) => fn(...args));
  }
}
const newModel = new ModalService()

export default newModel;