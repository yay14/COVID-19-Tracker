import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'react-perfect-scrollbar/dist/css/styles.css';
import PerfectScrollbar from 'react-perfect-scrollbar'
import Home from './pages/Home.js'
import World from './pages/World.js'
import Foot from './Foot'
import { BrowserRouter as Router,Switch,Route } from "react-router-dom";
import SideNav from './SideNav'


export default function App() { 
  return (
    <PerfectScrollbar>
    <div>
    <Router>
    <SideNav/>
     
      <Switch>
      <Route exact path="/" component={Home}/>
      <Route path="/global" component={World}/>
    
      </Switch>
      <Foot/>
     
    </Router>
   
    </div>
    </PerfectScrollbar>
  );
}

