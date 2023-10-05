import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import { Icon } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import iconLocation from '../assets/images/icon-location.svg';

const MobileMap = ({ latitude, longitude }) => {
  const icon = new Icon({
    iconUrl: `${iconLocation}`,
  });

  return (
    <MapContainer center={[latitude, longitude]} zoom={13}>
      <TileLayer url="https://tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={[latitude, longitude]} icon={icon} />
    </MapContainer>
  );
};

export default MobileMap;
