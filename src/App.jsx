import "./styles/style.scss";
import Navbar from "./components/shared/Navbar";
import Footer from "./components/shared/Footer";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <h1>BBQ App</h1>
      <Footer />
    </div>
  );
}
