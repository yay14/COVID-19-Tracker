import React from 'react';
import './App.css'
import {Link} from 'react-router-dom'

export default function Nav() { 
    return (
      <nav>
       <h3>Corona-Virus​☠️​ Tracker</h3>
       <ul className="nav-links"> 
       <Link to='/' style={{color:"white", textDecoration: "none"}}><li>Home 🌍</li></Link>
       <Link to='/about' style={{color:"white", textDecoration: "none"}}><li>About</li></Link>
       </ul>
      </nav>
    );
  }
  