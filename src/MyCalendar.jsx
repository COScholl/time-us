import React from 'react';
import FullCalendar from '@fullcalendar/react';
import { Calendar } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import './MyCalendar.css';

class MyCalendar extends React.Component{
  render() {
    let { events, handleClick } = this.props;

    return (
      <FullCalendar
        defaultView='dayGridMonth'
        plugins={[dayGridPlugin]}
        events={events}
        eventClick={handleClick}
      />
    );
    // document.addEventListener('DOMContentLoaded', () => {
    //   let calendar = new Calendar(document.getElementById('calendar'),
    //     {
    //         plugins:[dayGridPlugin]
    //     }
    //   );
    //   calendar.render();
    // });
    // return (
    //   <div id="calendar"></div>
    // );
  }
}
export default MyCalendar;
