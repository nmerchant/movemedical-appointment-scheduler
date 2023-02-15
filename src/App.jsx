import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';

function App() {
    const [appointments, setAppointments] = useState([]);

    const createNewAppointment = () => {
        setAppointments([...appointments, {
            location: 'San Diego',
            date: new Date(),
            description: 'This is a test'
        }])
    }

    return (
        <div className="App">
            <h1>Movemedical Appointment Scheduler</h1>
            <button onClick={createNewAppointment}>Create New Appointment</button>
            <div className="appointment-list">
                {appointments?.map((appointment, key) => 
                    <a className="appointment" key={key}>{appointment?.location}</a>
                )}
            </div>
        </div>
    );
}

export default App;
