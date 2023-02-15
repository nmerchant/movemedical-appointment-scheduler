import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import NewAppointmentForm from './components/NewAppointmentForm';
import AppointmentList from './components/AppointmentList';

function App() {
    const [nextId, setNextId] = useState(0);
    const [appointments, setAppointments] = useState([]);

    const createNewAppointment = (location, description) => {
        setAppointments([...appointments, {
            location,
            date: new Date(),
            description,
            id: nextId
        }])
        setNextId(nextId+1);
    };

    const onDeleteAppointment = (appointment) => {
        const newAppointments = appointments.filter(a => {
            console.log(a.id, appointment.id);
            return a.id !== appointment.id;
        })

        setAppointments([...newAppointments]);
        
    }

    return (
        <div className="App">
            <h1>Movemedical Appointment Scheduler</h1>
            <NewAppointmentForm onCreateNewAppointment={createNewAppointment} />
            <AppointmentList appointments={appointments} onDeleteAppointment={onDeleteAppointment} />
        </div>
    );
}

export default App;
