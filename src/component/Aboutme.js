import React from 'react';
const About=(props)=>{
  

    return (
      <section id="about">
         <div className="row">

            <div className="three columns">

               <img className="profile-pic" src={props.src} />
               {props.children}

            </div>

            <div className="nine columns main-col">

               <h2>About Me</h2>
               <p>
              
               </p>

               <div className="row">

                  <div className="columns contact-details">

                  <h2>Contact Details</h2>
                  <p className="address">
       						<span>{props.name}</span>
                     <br></br>
       						   <span>
                     {props.address}
                    </span>
                    <br></br>
                    <span>{props.website}</span>
       					   </p>
                  </div>
               </div>
            </div>
         </div>
      </section>
    );
  }
export default About