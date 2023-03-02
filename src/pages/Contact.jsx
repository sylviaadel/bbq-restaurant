import BookTable from "../components/Contact/BookTable";
import OpeningTimes from "../components/Contact/OpeningTimes";
import Address from "../components/Contact/Address";
import Map from "../components/Contact/Map";
import ChefImg from "../assets/images/chef-img.png";

export default function Contact() {
  return (
    <>
      <header className="contact-header">
        <img src={ChefImg} alt="A chef holding a stick of meat pieces." />
      </header>
      <OpeningTimes />
      <BookTable />
      <Address />
      <Map />
    </>
  );
}
