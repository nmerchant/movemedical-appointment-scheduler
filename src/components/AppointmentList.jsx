import { useEffect, useState } from 'react';
import Appointment from '../components/Appointment';

export default function AppointmentList({ appointments, onDeleteAppointment, onEditAppointment }) {
    return (
        <div className="appointment-list">
            {
                appointments?.length ? 
                (
                    appointments.map(
                        (appointment) => 
                            <Appointment 
                                key={appointment.id} 
                                data={appointment} 
                                onDeleteAppointment={onDeleteAppointment}
                                onEditAppointment={onEditAppointment}
                            />
                    )
                ) : (
                    <div>No appointments are currently scheduled.</div>
                )
            }
        </div>
    );
}