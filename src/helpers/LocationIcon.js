import L from "leaflet";

export const LocationIcon = L.icon({
  iconUrl: require("../assets/images/marker-icon.png"),
  iconRetinaUrl: require("../assets/images/marker-icon.png"),
  shadowAnchor: null,
  iconSize: [23, 35],
  className: "leaflet-venue-icon",
});
