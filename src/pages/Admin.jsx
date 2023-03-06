import { Link } from "react-router-dom";
import logoImg from "../assets/images/logo-slogan.svg";
import AddCategory from "../components/admin/AddCategory";
import AddProduct from "../components/admin/AddProduct";
import { createDocument } from "../scripts/fireStore/createDocument";

export default function Admin() {
  function onCreateCategory(data) {
    createDocument("categories", data);
  }
  return (
    <div id="Admin">
      <section className="Hero">
        <img
          src={logoImg}
          alt="A peace of meat with fork on grill along with restaurant name"
        />
        <h1>Welcome Admin</h1>
        <div className="btn-container">
          <a href="#add-category" className="small-btn">
            Add Category
          </a>
          <a href="#add-product" className="small-btn">
            Add Product
          </a>
          <Link to="/admin-menu" className="small-btn">
            Delete Category
          </Link>
        </div>
      </section>
      <section id="add-category">
        <h2>Add a new Category</h2>
        <AddCategory onCreateCategory={onCreateCategory} />
      </section>
      <section id="add-product">
        <h2>Add a new Product</h2>
        <AddProduct />
      </section>
    </div>
  );
}
