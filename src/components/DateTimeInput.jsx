import { useEffect, useState } from 'react';

let times = [];
for (var hour = 0; hour < 24; hour++) {
    times.push([hour, 0]);
    times.push([hour, 30]);
}

const timeFormatter = new Intl.DateTimeFormat('en-US', {
  hour: 'numeric',
  minute: 'numeric',
  hour12: true
});

export default function DateTimeInput({ date: datetime, setDate: setDateTime }) {
    const dateParts = new Intl.DateTimeFormat('en-US', { 
        year: 'numeric', 
        month: '2-digit', 
        day: '2-digit' 
    }).format(datetime).split('/');
    const dateInputValue = `${dateParts[2]}-${dateParts[0]}-${dateParts[1]}`;

    const timeParts = new Intl.DateTimeFormat('en-US', {
        hour: 'numeric',
        minute: '2-digit'
    }).format(datetime);
    
    const [date, setDate] = useState(dateInputValue);
    const [time, setTime] = useState(timeParts);

    useEffect(() => {
        console.log(date + ' ' + time);
        setDateTime(new Date(date + ' ' + time));
    }, [date, time]);

    console.log('TIME: ', time);

    return (
        <>
            <input className="date" type='date' value={date} onChange={e => { setDate(e.target.value) }}></input>
            <select className="time" value={time} onChange={e => { setTime(e.target.value) }}>
                {

                    times.map(t => {
                        const [hour, minute] = t;
                        const date = new Date();
                        date.setHours(hour);
                        date.setMinutes(minute);
                        const fTime = timeFormatter.format(date);
                        console.log(fTime, time, fTime === time);

                        return <option key={fTime} value={fTime} selected={fTime === time}>{fTime}</option>
                    })
                }
            </select>
        </>
    );
}