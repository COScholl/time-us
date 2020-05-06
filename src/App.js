import React from 'react';
import { Helmet } from 'react-helmet';
import './App.css';
import MyCalendar from './MyCalendar.jsx';

const events = [
  {title: 'Mamama', start: '2020-05-20'},{title: 'Papapapap', start: '2020-05-15'}
];

function App() {
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
      <Helmet>
        <meta charset="utf-8" />
        <meta name="description" content="social calendar project for introverts" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="icon"
          type="image/png"
          href="./favicon_io/facvicon.ico"
          sizes="16x16"
        />
        <title>Time's Us</title>
      </Helmet>
      <h1>Time's Us</h1>
      <MyCalendar events={events} handleClick={handleClick}/>
    </div>
  );
}

export default App;
