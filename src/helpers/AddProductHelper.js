const placeholderImage =
  "https://www.shutterstock.com/image-vector/food-cover-flat-icon-on-260nw-438697456.jpg";

export function onImageError(e) {
  e.target.src = placeholderImage;
}
