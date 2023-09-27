import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import { Icon } from 'leaflet';
import 'leaflet/dist/leaflet.css';

const MobileMap = () => {
  const icon = new Icon({
    iconUrl: 'images/icon-location.svg',
  });

  return (
    <MapContainer center={[-6.82349, 39.26951]} zoom={13}>
      <TileLayer url="https://tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={[-6.82349, 39.26951]} icon={icon} />
    </MapContainer>
  );
};

export default MobileMap;
