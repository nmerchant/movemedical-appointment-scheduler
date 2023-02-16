import { useEffect, useState } from 'react';
import locations from '../locations.js';
import DateTimeInput from './DateTimeInput.jsx';
import LocationSelect from './LocationSelect';

export default function NewAppointmentForm({ onCreateNewAppointment }) {
    
    const [location, setLocation] = useState(locations[0]);
    const [description, setDescription] = useState('');
    const [date, setDate] = useState(new Date().setHours(0,0,0,0));

    return (
        <>
            <div className="new-appointment-form">
                <form>
                    <DateTimeInput date={date} setDate={setDate} />
                    <LocationSelect location={location} setLocation={setLocation} />
                    <div className="description">
                        <label>
                            Description:
                            <input type="text" name="description" value={description} onChange={e => setDescription(e.target.value)}></input>
                        </label>
                    </div>
                </form>
            </div>
            <button className='new-appointment-button' onClick={() => {onCreateNewAppointment(location, description, date)}}>Create New Appointment</button>
        </>
    );
}