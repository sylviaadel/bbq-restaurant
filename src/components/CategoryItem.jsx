import beefImg from "../assets/images/beef.jpg";

export default function CategoryItem() {
  return (
    <article>
      <img src={beefImg} alt="beef background" />
      <h2>Beef Dishes</h2>
      <p>
        Some like it saucy. Some like it skewered. But no matter who you’re
        firing up the charcoal for, these grilled steak plates have got you
        covered through the end of the summer season.
      </p>
      <button className="small-btn">View Menu</button>
    </article>
  );
}
