export default function AppointmentList({ appointments }) {
    return (
        <div className="appointment-list">
            {appointments?.map((appointment, key) => 
                <a className="appointment" key={key}>{appointment?.location} - {appointment?.description}</a>
            )}
        </div>
    );
}