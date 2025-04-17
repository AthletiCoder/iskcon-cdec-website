import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';

// Default marker icon fix
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

const locations = [
  {
    lat: 28.6139,
    lng: 77.2090,
    title: 'Connaught Place, Delhi',
    facilitator: 'Radheshyam Das',
    contactNum: '8879128551',
  },
  {
    lat: 19.0760,
    lng: 72.8777,
    title: 'Dadar, Mumbai',
    facilitator: 'Ram Govind Prabhu',
    contactNum: '8879128551',
  },
  {
    lat: 12.9716,
    lng: 77.5946,
    title: 'Basavanagudi, Bangalore',
    facilitator: 'Sundar Gopal Das',
    contactNum: '8879128551',
  },
];

const GitaMap = () => {
  return (
    <div className="h-96 rounded-lg overflow-hidden shadow">
      <MapContainer center={[22.9734, 78.6569]} zoom={5} style={{ height: '100%', width: '100%' }}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {locations.map((loc, idx) => (
          <Marker key={idx} position={[loc.lat, loc.lng]}>
            <Popup>
              <strong>Area: </strong>{loc.title}<br />
              <strong>Facilitator: </strong> {loc.facilitator}<br />
              <strong>Contact Number: </strong> {loc.contactNum}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default GitaMap;
