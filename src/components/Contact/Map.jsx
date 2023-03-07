import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { LocationIcon } from "../../helpers/LocationIcon";

export default function Map() {
  return (
    <div id="Map">
      <MapContainer
        center={[59.05361, 9.70177]}
        zoom={13}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[59.05361, 9.70177]} icon={LocationIcon}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
