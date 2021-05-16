import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Facebook,Instagram,Linkedin,Github,ArrowDownCircle} from 'react-bootstrap-icons'


const Header=(props)=>{
    return (
<section  id="#home">
    
<nav id="nav-wrap">
            <ul id="nav" className="nav">
               <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
               <li><a href="#about">About</a></li>
             <li><a  href="#resume">Resume</a></li>
               <li><a href="#portfolio">Works</a></li>
               <li><a href="#testimonials">Testimonials</a></li>
               <li><a href="#contact">Contact</a></li>
            </ul>
         </nav>
 
  <div className="text" >
     
               <h1 className="responsive-headline" >I am {props.name}.</h1>
               
               <h5 className="bio-text">I am a {props.role} and{props.bio}
               </h5>
               <hr style={{width:'32%',color:'white',marginLeft:'560px'}}/>
               <br />
               <div className="icons">
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
  