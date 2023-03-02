import { Routes, Route } from "react-router-dom";
import "./styles/style.scss";
import Navbar from "./components/shared/Navbar";
import HomePage from "./pages/Home";
import Contact from "./pages/Contact";
import Footer from "./components/shared/Footer";
import Admin from "./pages/Admin";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
      <Footer />
    </div>
  );
}
