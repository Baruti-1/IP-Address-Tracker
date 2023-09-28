import { useEffect } from 'react';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import { Icon } from 'leaflet';
import 'leaflet/dist/leaflet.css';

const MobileMap = ({ latitude, longitude }) => {
  const icon = new Icon({
    iconUrl: 'images/icon-location.svg',
  });

  return (
    <MapContainer center={[latitude, longitude]} zoom={13}>
      <TileLayer url="https://tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={[latitude, longitude]} icon={icon} />
    </MapContainer>
  );
};

export default MobileMap;
