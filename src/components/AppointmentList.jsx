import { useEffect, useState } from 'react';
import Appointment from '../components/Appointment';

export default function AppointmentList({ appointments, onDeleteAppointment }) {

    // When going into editing or deleting mode, make sure only one is active
    // useEffect(() => {
    //     if (editing && deleting) {
    //         setDeleting(false);
    //     }
    // }, [editing]);

    // useEffect(() => {
    //     if (editing && deleting) {
    //         setEditing(false);
    //     }
    // }, [deleting]);

    return (
        <div className="appointment-list">
            {
                appointments?.length ? 
                (
                    appointments.map(
                        (appointment) => <Appointment key={appointment.id} data={appointment} onDeleteAppointment={onDeleteAppointment} />
                    )
                ) : (
                    <div>No appointments are currently scheduled.</div>
                )
            }
        </div>
    );
}