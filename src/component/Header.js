import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Facebook,Instagram} from 'react-bootstrap-icons'


const Header=(props)=>{
    return (
<section className="header" id="#home">
    
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
 
  <div className="banner-text" >
     
               <h1 className="responsive-headline" style={{color:'white', fontFamily:'sans-serif ',padding:"20px",marginTop:"50px"}}>I am {props.name}.</h1>
               <h5 style={{color:'white', fontFamily:'sans-serif ', marginBottom:'50px'}}>I am a {props.role} and{props.bio}
               </h5>
               
               <br />
               <div>
              <i Facebook></i>
              <i className="bi bi-linkedin"></i>
              <i className="bi bi-instagram"></i>
              </div>
              <br/>
         <p className="scrolldown">
            <a  href="#about"><i className="bi bi-arrow-down-circle"></i></a>
         </p>
            </div>

</section>

    )
}
export default Header
  