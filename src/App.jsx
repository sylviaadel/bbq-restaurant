import { Routes, Route } from "react-router-dom";
import "./styles/style.scss";
import Navbar from "./components/shared/Navbar";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Category from "./pages/Category";
import Contact from "./pages/Contact";
import Footer from "./components/shared/Footer";
import Admin from "./pages/Admin";
import AdminMenu from "./pages/AdminMenu";
import NotFound from "./pages/NotFound";
import Product from "./pages/Product";

export default function App() {
  const name = "categories";

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home collection={name} />} />
        <Route path="/menu" element={<Menu collection={name} />} />
        <Route path="/category/:id" element={<Category collection={name} />} />
        <Route
          path="/category/:id/:productId"
          element={<Product collection={name} />}
        />
        <Route path="/contact" element={<Contact />} />
        <Route path="/admin" collection={name} element={<Admin />} />
        <Route path="/admin-menu" element={<AdminMenu collection={name} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}
