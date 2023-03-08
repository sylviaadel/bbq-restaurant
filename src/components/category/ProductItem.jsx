import { Link } from "react-router-dom";

export default function ProductItem({ item, categoryID }) {
  const { id, title, description, imageURL, price } = item;
  const productLink = `/category/${categoryID}/${id}`;

  return (
    <article>
      <div>
        <img src={imageURL} alt={title} />
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
