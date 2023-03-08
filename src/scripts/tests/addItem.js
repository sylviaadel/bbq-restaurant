export function validText(name) {
  if (name === undefined || name === null || name.trim() === "") {
    return false;
  }
  return true;
}
export function validImageURL(url) {
  var types = ["jpg", "jpeg", "png", "webp"];
  var parts = url.split(".");
  var extension = parts[parts.length - 1];
  if (url === undefined || url === null || types.indexOf(extension) === -1) {
    return false;
  }
  return true;
}

export function validPrice(price) {
  if (price === null || price < 1) {
    return false;
  }
  return true;
}
