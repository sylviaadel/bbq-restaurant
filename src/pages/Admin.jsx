import logoImg from "../assets/images/logo-slogan.svg";
import AddCategory from "../components/admin/AddCategory";

export default function AdminPage() {
  return (
    <div id="Admin">
      <section className="Hero">
        <img
          src={logoImg}
          alt="A peace of meat with fork on grill along with restaurant name"
        />
        <h1>Welcome Admin</h1>
      </section>
      <AddCategory />
    </div>
  );
}
