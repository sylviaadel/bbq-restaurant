import { Link } from "react-router-dom";
import { onImageError } from "../../helpers/AddProductHelper";

export default function ProductItem({ item, categoryID }) {
  const { id, title, description, imageURL, price } = item;
  const productLink = `/category/${categoryID}/${id}`;
  const placeholderImage =
    "https://www.shutterstock.com/image-vector/food-cover-flat-icon-on-260nw-438697456.jpg";

  return (
    <article>
      <div>
        <img
          src={imageURL ? imageURL : placeholderImage}
          onError={onImageError}
          alt={title}
        />
        <div>
          <h3>
            <Link to={productLink}>{title}</Link>
          </h3>
          <span className="price">{price} SEK</span>
          <div className="clear"></div>
          <p>{description}</p>
        </div>
      </div>
    </article>
  );
}
