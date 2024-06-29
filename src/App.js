import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SignUp from './SignUp';
import SignIn from './SignIn';
import Booking from './Booking';
import AppointmentHistory from './AppointmentHistory';
import NotFound from './NotFound';

const App = () => (
  <Router>
    <Switch>
      <Route path="/signup" component={SignUp} />
      <Route path="/signin" component={SignIn} />
      <Route path="/booking" component={Booking} />
      <Route path="/appointments" component={AppointmentHistory} />
      <Route component={NotFound} />
    </Switch>
  </Router>
);

export default App;