export default function CategoryItem({ item }) {
  const { id, title, description, imageURL } = item;

  return (
    <article key={id}>
      <img src={imageURL} alt={title} />
      <h2>{title}</h2>
      <p>{description}</p>
      <button className="small-btn">View Menu</button>
    </article>
  );
}
