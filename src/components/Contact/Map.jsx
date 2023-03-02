import MapImg from "../../assets/images/staticmap.png";

export default function Map() {
  return (
    <section className="map">
      <img src={MapImg} alt="Main Map of Restaurant with marker." />
    </section>
  );
}
