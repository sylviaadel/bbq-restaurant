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

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/category/:id" element={<Category />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin-menu" element={<AdminMenu />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}
