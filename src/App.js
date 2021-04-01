import React from 'react'
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Login from './components/login/Login'
import SecurityQuestion from './components/securityQuestion/SecurityQuestion'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'><Login /></Route>
        <Route path='/securityQuestion'><SecurityQuestion /></Route>
      </Switch>
    </Router>
  );
}

export default App;
