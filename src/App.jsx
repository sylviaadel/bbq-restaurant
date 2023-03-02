import { Routes, Route } from "react-router-dom";
import "./styles/style.scss";
import Navbar from "./components/shared/Navbar";
import HomePage from "./pages/Home";
import Contact from "./pages/Contact";
import Footer from "./components/shared/Footer";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}
