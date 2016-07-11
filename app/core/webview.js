export default class Webview {
  constructor() {
    // create webview and add it to html
    this.webview = document.createElement('webview');
    document.appendChild(this.webview);
  }

  init() {
    // create event listeners for webview
  }

  goto(url) {
    this.webview.loadURL(url);
  }
  forward() {
    if (this.webview.canGoForward()) {
      this.webview.goForward();
    }
  }
  back() {
    if (this.webview.canGoBack()) {
      this.webview.goBack();
    }
  }
  refresh() {
    this.webview.reload();
  }
  hardRefresh() {

  }
  screenshot() {

  }
  clearHistory() {
    this.webview.clearHistory();
  }
}
