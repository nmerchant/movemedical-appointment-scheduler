import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import NewAppointmentForm from './components/NewAppointmentForm';
import AppointmentList from './components/AppointmentList';

function App() {
    const [nextId, setNextId] = useState(0);
    const [appointments, setAppointments] = useState([]);

    const createNewAppointment = (location, description, date) => {
        setAppointments([...appointments, {
            location,
            date,
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

    const onEditAppointment = (appointment, location, description, date) => {
        let newAppointments = appointments;

        const thisAppointment = appointments.find(a => {
            return a.id === appointment.id;
        });

        newAppointments[appointments.indexOf(thisAppointment)].location = location;
        newAppointments[appointments.indexOf(thisAppointment)].description = description;
        newAppointments[appointments.indexOf(thisAppointment)].date = date;
    }

    return (
        <div className="App">
            <h1>Movemedical Appointment Scheduler</h1>
            <NewAppointmentForm onCreateNewAppointment={createNewAppointment} />
            <hr />
            <AppointmentList appointments={appointments} onDeleteAppointment={onDeleteAppointment} onEditAppointment={onEditAppointment} />
        </div>
    );
}

export default App;
