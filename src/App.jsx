import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import NewAppointmentForm from './components/NewAppointmentForm';
import AppointmentList from './components/AppointmentList';

function App() {
    const [appointments, setAppointments] = useState([]);


    const createNewAppointment = (location, description) => {
        setAppointments([...appointments, {
            location,
            date: new Date(),
            description
        }])
    }

    return (
        <div className="App">
            <h1>Movemedical Appointment Scheduler</h1>
            <NewAppointmentForm onCreateNewAppointment={createNewAppointment} />
            <AppointmentList appointments={appointments} />
        </div>
    );
}

export default App;
