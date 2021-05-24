import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Facebook,Instagram,Linkedin,Github,ArrowDownCircle} from 'react-bootstrap-icons'


const Header=(props)=>{
    return (
<section  id="#home">
    
<nav >
  <ul>
    <li>
      <a className="active" href="#home">Home</a>
    </li>
    <li>
      <a href="#about">About</a>
    </li>
    <li>
      <a href="#work">Work</a>
    </li>
    <li>
      <a href="#resume">Resume</a>
    </li>
    <li>
      <a href="#footer">Footer</a>
    </li>
  </ul>
</nav>
  <div className="text" >
     
               <h1 className="responsive-headline" >I am {props.name}.</h1>
               
               <h5 className="bio-text">I am a {props.role} {props.bio}
               </h5>
               <hr style={{width:'33%',color:'white',marginLeft:'570px'}}/>
               <br />
               <div className="icons-h">
               <div className="icons-f">
              < Facebook />
              </div>
              <div className="icons-i">
              <Instagram />
              </div>
              <div className="icons-l">
              < Linkedin />
              </div>
              <div className="icons-g">
              < Github />
              </div>
             </div>
             
              <br  />
              <div className="Arrow-Down">
              <a  href="#about"><ArrowDownCircle /> <br/></a><span>SCROLL DOWN</span>
              </div>
              <br/>
         
            </div>

</section>

    )
}
export default Header
  