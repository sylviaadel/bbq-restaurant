import BookTable from "../components/Contact/BookTable";
import OpeningTimes from "../components/Contact/OpeningTimes";
import Address from "../components/Contact/Address";
import Map from "../components/Contact/Map";
import ChefImg from "../assets/images/chef-img.png";

export default function Contact() {
  return (
    <>
      <header className="contact-header">
        <img
          src={ChefImg}
          alt="The chef holding a plate of vegtables in his kitchen."
        />
      </header>
      <OpeningTimes />
      <BookTable />
      <Address />
      <Map />
    </>
  );
}
