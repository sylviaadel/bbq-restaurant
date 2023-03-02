import logoImg from "../assets/images/logo-slogan.svg";
import CategoriesContainer from "../components/home/CategoriesContainer";

export default function Home() {
  return (
    <div id="Home">
      <section className="Hero">
        <img
          src={logoImg}
          alt="A peace of meat with fork on grill along with restaurant name"
        />
        <p>Count On Us When It Comes To BBQ</p>
      </section>
      <CategoriesContainer />
    </div>
  );
}
