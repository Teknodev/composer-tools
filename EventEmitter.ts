interface Events {
  [key: string]: Function[];
}

export enum EVENTS {
  PROP_UPDATED = "propUpdated",
  CHANGE_PAGE = "changePage",
  REQUEST_TO_VERIFY_EMAIL = "requestToVerifyEmail",
  MODAL_COMPONENT = "modalComponent",
  CLEAR_CHANGES = "clearChanges",
  COMPONENT_ADDED = "componentAdded",
  INSERT_FORM = "insertForm",
  RENDER_CONTENT_TAB = "renderContentTab",
  COMPONENT_DID_UPDATE = "componentDidUpdate",
  CSS_CLASSES_CHANGED = "cssClassesChanged",
  DETAILED_THEME_PANEL_TOGGLED = "detailedThemePanelToggled",
}

class EventQ {
  public events: Events;
  constructor(events?: Events) {
    this.events = events || {};
  }

  public subscribe(name: EVENTS, cb: Function) {
    (this.events[name] || (this.events[name] = [])).push(cb);

    return {
      unsubscribe: () =>
        this.events[name] &&
        this.events[name].splice(this.events[name].indexOf(cb) >>> 0, 1),
    };
  }

  public emit(name: EVENTS, ...args: any[]): void {
    (this.events[name] || []).forEach((fn) => fn(...args));
  }
}


export const EventEmitter = new EventQ();