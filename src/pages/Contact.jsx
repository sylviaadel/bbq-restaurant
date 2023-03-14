import BookTable from "../components/contact/BookTable";
import OpeningTimes from "../components/contact/OpeningTimes";
import Address from "../components/contact/Address";
import Map from "../components/contact/Map";
import ChefImg from "../assets/images/chef-img.png";

// good
export default function Contact() {
  return (
    <section id="Contact">
      <header className="contact-header">
        <img src={ChefImg} alt="A chef holding a stick of meat pieces." />
      </header>
      <OpeningTimes />
      <BookTable />
      <Address />
      <Map />
    </section>
  );
}
