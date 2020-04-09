import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Project from './Project';
import Contact from './Contact';

function App() {
  return (
    <Router>
    <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/About" component={About} />
          <Route exact path="/Project" component={Project} />
          <Route exact path="/Contact" component={Contact} />
        </Switch>
    </div>
    </Router>
  );
}

export default App;
