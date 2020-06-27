import React from 'react';
import './App.css';


export default function Footer() {
return(
<div style={{marginLeft: "80px"}}>
 <div className="footerL">
 <h5>Quick Links</h5>
 <p>GitHub : <a href="https://github.com/yay14/COVID-19-Tracker"><i class="fab fa-github-square icon-2x" ></i></a></p>
 <p>LinkedIn : <a href="https://www.linkedin.com/in/shreya-raj-193827169/"><i class="fab fa-linkedin icon-2x"></i></a></p>
 </div>
 <div className="footerR">
 <h5>Contact Us </h5>
 <span aria-hidden="true" role="img">📧</span>

 <h6> Email : rajshreya183@gmail.com</h6>
 </div> 
 <div className="foot">
 <h6><span> Copyright © 2020 Shreya Raj <br/></span></h6></div>
 </div>

   );
  }