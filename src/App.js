import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './pages/Home.js'
import About from './pages/About.js'
import Nav from './Nav.js'
import { BrowserRouter as Router,Switch,Route } from "react-router-dom";

export default function App() { 
  return (
    <Router>
    <div>
      <Nav/>
      <Switch>
      <Route exact path="/" component={Home}/>
      <Route path="/about" component={About}/>
      </Switch>
    </div>
    </Router>
    
  );
}

