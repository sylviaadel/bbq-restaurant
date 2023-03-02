import logoImg from "../assets/images/logo-slogan.png";

export default function HomePage() {
  return (
    <div id="Home">
      <section className="Hero">
        <img
          src={logoImg}
          alt="A peace of meat with fork on grill along with restaurant name"
        />
        <p>Count On Us When It Comes To BBQ</p>
      </section>
    </div>
  );
}
