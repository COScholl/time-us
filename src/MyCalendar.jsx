import React from 'react';
import FullCalendar from '@fullcalendar/react';
// import { Calendar } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import './MyCalendar.css';

const MyCalendar = (props) => {
  const { events, handleClick } = props;

  return (
    <>
      <h2>Social Calendar</h2>
      <FullCalendar
        height="parent"
        defaultView="dayGridMonth"
        plugins={[dayGridPlugin]}
        events={events}
        eventClick={handleClick}
      />
    </>
  );
};

export default MyCalendar;
