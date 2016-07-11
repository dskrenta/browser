export default class Tab extends Webview {
  constructor({ url, title, id, lastActive, isSecure, isPrivate, isSelected }) {
    super();

    this.url = url;
    this.title = title;
    this.id = id;
    this.lastActive = lastActive;
    this.isSecure = isSecure;
    this.isPrivate = isPrivate;
    this.isSelected = isSelected;

    let opts = riot.observable(this);
    this.init(opts);
  }

  init(opts) {
    // example event
    opts.on('select', () => {
      this.isSelected(true);
    });

    opts.on('refresh', () => {
      super.refresh();
    });
    opts.on('hardRefresh', () => {
      super.hardRefresh();
    });
    opts.on('goto', () => {
      super.goto();
    });
    opts.on('forward', () => {
      super.forward();
    });
    opts.on('back', () => {
      super.back();
    });
  }

  get url() { return this.url; }
  set url(url) { this.url = url; }

  get title() { return this.title; }
  set title(title) { this.title = title; }

  get id() { return this.id; }
  set id(id) { this.id = id; }

  get lastActive() { return this.lastActive; }
  set lastActive(lastActive) { this.lastActive = lastActive; }

  get isSecure() { return this.isSecure; }
  set isSecure(isSecure) { this.isSecure = isSecure; }

  get isPrivate() { return this.isPrivate; }
  set isPrivate(isPrivate) { this.isPrivate = isPrivate; }

  get isSelected() { return this.isSelected; }
  set isSelected(isSelected) { this.isSelected = isSelected; }
}
