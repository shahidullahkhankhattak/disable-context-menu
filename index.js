function isBrowser() {
  return typeof window === "object" && typeof process === "undefined";
}

function disableContextMenu() {
  if (isBrowser()) {
    const body = document.body;
    body.oncontextmenu = function() {
      return false;
    }
  }
}

module.exports = {
  disableContextMenu
}