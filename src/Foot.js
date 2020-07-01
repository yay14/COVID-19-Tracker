import React from 'react';
import './App.css';


export default function Foot() {
return(
<div class="footer">
 <div className="footerL">
 <h5>Quick Links
   <ul>
 <li>GitHub : <a href="https://github.com/yay14/COVID-19-Tracker"><i class="fab fa-github-square icon-2x" ></i></a></li>
 <li>LinkedIn : <a href="https://www.linkedin.com/in/shreya-raj-193827169/"><i class="fab fa-linkedin icon-2x"></i></a></li>
 </ul></h5>
 </div>
 <div className="footerR">

 <span aria-hidden="true" role="img">📧</span>

 <h6> Email : rajshreya183@gmail.com</h6>
 </div> 
 <div className="foot">
 <h6><span> Copyright © 2020 Shreya Raj <br/></span></h6></div>
 </div>

   );
  }