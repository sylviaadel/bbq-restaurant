export default function Ingredients(props) {
  const ingredients = props.product.ingredients.map((ingredient) => (
    <li key={ingredient}>{ingredient}</li>
  ));

  return (
    <>
      <h3>Ingredients</h3>
      <ul>{ingredients}</ul>
    </>
  );
}
