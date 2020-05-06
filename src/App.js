import React from 'react';
import './App.css';
import Head from './Head';
import MyCalendar from './MyCalendar';

const events = [
  { title: 'Mamama', start: '2020-05-20' }, { title: 'Papapapap', start: '2020-05-15' },
];

const App = () => {
  /**
   * [handleClick description]
   * @param  {Object} info event object
   * @return {Object}      event.info
   */
  const handleClick = (info) => {
    console.log('App.js ', info.event);
  };

  return (
    <div className="App">
      <Head />
      <h1>Time's Us</h1>
      <MyCalendar events={events} handleClick={handleClick} />
    </div>
  );
};

export default App;
