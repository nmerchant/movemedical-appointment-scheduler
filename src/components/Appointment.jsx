import { useState } from 'react';

export default function Appointment({ data: appointment, onDeleteAppointment }) {
    const [editing, setEditing] = useState(false);
    const [deleting, setDeleting] = useState(false);
    
    const [location, setLocation] = useState(appointment.location);
    const [description, setDescription] = useState(appointment.description);

    const dateFormat = new Intl.DateTimeFormat('en-us', { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    });

    const onConfirmDelete = (appointment) => {
        setDeleting(false);
        onDeleteAppointment(appointment);
    };

    const onConfirmEdit = () => {
        setDeleting(false);
        // onEditAppointment(appointment, );
    };

    const onCancelDelete = () => {
        setDeleting(false);
    }

    const onCancelEdit = () => {
        setEditing(false);
    }

    const onDelete = () => {
        setDeleting(true);
        setEditing(false);
    }

    const onEdit = () => {
        setEditing(true);
        setDeleting(false);
    }

    return (
        <div className="appointment">
            <div className="appointment-details">
                { editing ? <input value={location}></input> : <div>{appointment?.location}</div>}
                <div>{appointment?.description}</div>
                <div>{dateFormat.format(appointment?.date)}</div>
            </div>
            <div className="appointment-controls">
                {deleting ? 
                (
                <div className="delete-controls">
                    <div className="confirm-delete" onClick={() => {onConfirmDelete(appointment)}}>✓</div>
                    <div className="cancel-delete" onClick={onCancelDelete}>X</div>
                </div>
                ) : (
                    <div className="delete-appointment" onClick={onDelete}>DELETE</div>
                )}

                {editing ? 
                (
                <div className="delete-controls">
                    <div className="confirm-edit" onClick={onConfirmEdit}>✓</div>
                    <div className="cancel-edit" onClick={onCancelEdit}>X</div>
                </div>
                ) : (
                    <div className="edit-appointment" onClick={onEdit}>EDIT</div>
                )}
            </div>
        </div>
    );
}