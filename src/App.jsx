import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import './App.css';
import Home from './Home';
import Contacts from './Contacts';
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
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/calendar">
            <MyCalendar events={events} handleClick={handleClick} />
          </Route>
          <Route exact path="/contacts" component={Contacts} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
