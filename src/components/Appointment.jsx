import { useState } from 'react';
import DateTimeInput from './DateTimeInput';
import LocationSelect from './LocationSelect';

export default function Appointment({ data: appointment, onDeleteAppointment, onEditAppointment }) {
    const [editing, setEditing] = useState(false);
    const [deleting, setDeleting] = useState(false);
    
    const [location, setLocation] = useState(appointment.location);
    const [description, setDescription] = useState(appointment.description);
    const [date, setDate] = useState(appointment.date);

    const dateFormat = new Intl.DateTimeFormat('en-us', { 
        weekday: 'short', 
        year: 'numeric', 
        month: 'short', 
        day: 'numeric' 
    });
    const timeFormat = new Intl.DateTimeFormat('en-US', {
        hour: '2-digit',
        minute: '2-digit'
    });

    const onConfirmDelete = (appointment) => {
        setDeleting(false);
        onDeleteAppointment(appointment);
    };

    const onConfirmEdit = () => {
        setEditing(false);
        onEditAppointment(appointment, location, description, date);
    };

    const onCancelDelete = () => {
        setDeleting(false);
    }

    const onCancelEdit = () => {
        setEditing(false);
        setLocation(appointment.location);
        setDescription(appointment.description);
        setDate(appointment.date);
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
                { editing ? <div><DateTimeInput date={date} setDate={setDate} /></div> : <div>{dateFormat.format(appointment?.date) + ' - ' + timeFormat.format(appointment?.date) || '-'}</div>}
                { editing ? <LocationSelect location={location} setLocation={setLocation} /> : <div>{appointment?.location}</div>}
                { editing ? <div><input value={description} onChange={e => { setDescription(e.target.value)}}></input></div> : <div>{appointment?.description || '-'}</div>}
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