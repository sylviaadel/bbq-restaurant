import { Link } from "react-router-dom";

export default function ProductContent({ product, link }) {
  const { title, price, description } = product;
  const ingredients = product.ingredients.map((ingredient) => (
    <li key={ingredient}>{ingredient}</li>
  ));

  return (
    <div className="product-content">
      <h2>{title}</h2>
      <span className="price">{price} SEK</span>
      <div className="clear"></div>
      <p>{description}</p>
      <h3>Ingredients</h3>
      <ul>{ingredients}</ul>
      <Link to={link} className="primary-btn">
        Back to Category
      </Link>
    </div>
  );
}
