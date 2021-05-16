
import './App.css';
  import Header from './component/Header';

  import Footer from './component/Footer';
  import About from './component/Aboutme'
  import Work from './component/Work'
  import Resume from "./component/Resume/Resume";
  import {Row,Col} from 'react-bootstrap'
  
function App() {
  return (
    <div className="App" >
      <div className="header" >
     <Header name="Sirine Bennaceur"
        bio=" who loves to take on new projects that challenges his analytical and technological capacities.
        Let's start scrolling and learn about me..
        "
        role=' fullstack developer'/>
        <br />
        
        </div>
        <div className="about">
        <About
          aboutme="I'm 26 years old I've been an Electrical automatic enginner,i graduated in October 2020 from national school of  engineers of Gabes.I did a professional transition to discover new challenges and better opportunities. I recently joind a very instructive Course among GOMYCODE team and I instantly started to learn a lot in a very short period.I'm able now to use Html, CSS ,javascript and React Js to create my Web applications I am a Devolper and also a Designer. An ambitious person that accepts all kinds ofchallenges and has no limitations."
          name="Sirine Bennaceur"
          address1="Rue Ahmed Rami "
          address2="Gafsa, Tunisie"
          phoneNumber="+21626167697"
          addressMail="sirinebennaceur044@gmail.com"
          CV="/Sirine CV.pdf"
          src={"/sirine.jpg"}
        />
      </div>
        <div className="work">
        <div className="text-work">
        <h1 className="title-work">My Recent<strong className="orange"> Works</strong></h1>
        <p>Here are a fiew projects i've worked on</p>
        </div> 
        <br />
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <Work
              imgPath="./Captureapp.png"
              isBlog={false}
              title1="Movie app"
              description="It's a movie app, you can add and remove any movie and you can find your favourites with title or with ratings.  "
              link="https://github.com/Sirine454/Movie-app"
            />
          </Col>

          <Col md={4} className="project-card">
            <Work
              imgPath="./captureapp3.png"
              isBlog={false}
              title1="Shopping Card"
              description="It's a shopping card for friends items for the lovers of the show Friends.You can add to card any item to price total and remove it.Also you can like your favourites items."
              link="https://drive.google.com/drive/folders/1xeoV6zkLqnDNMeusFjeOrTyIQVbu5juh?usp=sharing"
            />
          </Col>

       
   </Row>
   </div>
   <div className="resume">
        <Resume sectionHeader="CAREER" />
        <Resume sectionHeader="EDUCATION" />
        <Resume sectionHeader="SKILL" />
      </div>
   <div className="Footer">
        <Footer
          project="Have a new project in mind? Let's collaborate and build something awesome.
         Let's turn that idea to an even greater product :)"
          mail="sirinebennaceur044@gmail.com"
          phoneNumber="+216 26 167 697"
          facebbok="https://www.facebook.com/sirine.bennaceur.10/"
          instagram=""
          linkedin="https://www.linkedin.com/in/sirine-bennaceur-15762b132/"
          github="https://github.com/Sirine454?tab=repositories"
        ></Footer>
      </div>
      
   </div>
    
  );
}

export default App;
