import { Link } from "react-router-dom";

export default function ProductItem({ item }) {
  const { id, title, description, imageURL, price } = item;

  return (
    <article>
      <div>
        <img src={imageURL} alt={title} />
        <div>
          <h3>
            <Link to={`/product/${id}`}>{title}</Link>
          </h3>
          <span className="price">{price} SEK</span>
          <p>{description}</p>
        </div>
      </div>
    </article>
  );
}
