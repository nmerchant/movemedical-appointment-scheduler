import locations from '../locations.js';

export default function LocationSelect({ location, setLocation }) {
    return (
        <select className="location" value={location} onChange={e => setLocation(e.target.value) }>
            {locations.map(location => <option key={location} value={location}>{location}</option>)}
        </select>
    );
}