import tab from 'tab.js';
import * as riot from 'riot';

// import Webview class from somewhere

export default class Browser {
  constructor() {
    riot.observable(this);

    // create map with key id and value tab object
    this.tabs = new Map();

    let tab = new Tab();
    this.tabs.set(id, tab);
  }

  open(id) {
    // open tab instance by id
    let tab = new Tab();
    this.tabs.set(id, tab);
  }

  close(id) {
    // remove tab instance by id
  }

  select(id) {
    // select tab by id
  }

  unselect(id) {
    // unselect tab by id
  }

  this.on('open', this.open());
  this.on('select', this.select());
  this.on('close', this.close());
  this.on('unselect', this.unselect());
}
