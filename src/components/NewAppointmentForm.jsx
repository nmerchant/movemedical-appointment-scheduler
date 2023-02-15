import { useState } from 'react';

const locations = [
    'San Diego',
    'Portland',
    'Seattle',
    'London',
    'Orlando'
];

export default function NewAppointmentForm({ onCreateNewAppointment }) {
    const [location, setLocation] = useState(locations[0]);
    const [description, setDescription] = useState('');

    return (
        <>
            <div className="new-appointment-form">
                <form>
                    <label>
                        Description:
                        <input type="text" name="description" value={description} onChange={e => setDescription(e.target.value)}></input>
                    </label>
                    <label>
                        Location:
                        <select value={location} onChange={e => setLocation(e.target.value) }>
                            {locations.map(location => <option key={location} value={location}>{location}</option>)}
                        </select>
                    </label>
                </form>
            </div>
            <button className='new-appointment-button' onClick={() => {onCreateNewAppointment(location, description)}}>Create New Appointment</button>
        </>
    );
}