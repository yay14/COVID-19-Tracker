import React from 'react';
import './Nav.css';
import './App.css'
import {Link} from 'react-router-dom'
import Emoji from 'a11y-react-emoji'

export default function SideNav()
{
    return(
        <div class="wrapper">
            <div class="top_navbar">
                <div class="hamburger">
                    <div class="hamburger__inner">
                        <div class="one"></div>
                        <div class="two"></div>
                        <div class="three"></div>
                    </div>
                </div>
                <div class="menu">
                    <div class="logo">
                        <h3>COVID-19 TRACKER</h3>
      </div>
                    <div className="row">
                        <ul className="col nav-links">
                            <Link to='/' style={{ color: "white", textDecoration: "none" }}><li>India <Emoji symbol="🌍" /></li></Link>
                            <Link to='/global' style={{ color: "white", textDecoration: "none" }}><li>Global</li></Link>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="main_container">
                <div class="sidebar">
                    <div class="sidebar__inner">
                        <div class="profile">

                            <div class="profile_info">
                                <p>Welcome</p>

                            </div>
                        </div>
                        <ul>
                          
                            <li>
                                <a href="#home" class="active">
                                    <span class="icon"><i class="fas fa-dice-d6"></i></span>
                                    <span class="title">Home</span>
                                </a>
                            </li>
                            
                                <li>
                                    <a href="#charts">
                                        <span class="icon"><i class="fas fa-chart-pie"></i></span>
                                        <span class="title">Charts</span>
                                    </a>
                                </li>

                                <li>
                                    <a href="#distr">
                                        <span class="icon"><i class="fas fa-border-all"></i></span>
                                        <span class="title">Tables</span>
                                    </a>
                                </li>
                                <li>
                                <a href="#maps">
                                    <span class="icon"><i class="fab fa-delicious"></i></span>
                                    <span class="title">Maps</span>
                                </a>
                            </li>
                            <li>
                                <a href="#about">
                                    <span class="icon"><i class="fab fa-elementor"></i></span>
                                    <span class="title">About</span>
                                </a>
                            </li>

                        </ul>
                    </div>
                </div>
                <div class="container">

                </div>
            </div>

        </div>
    )
}
