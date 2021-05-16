
import './App.css';
  import Header from './component/Header';
  import ContactUs from './component/ContactUs';
  import Footer from './component/Footer';
  import About from './component/Aboutme'
  import Work from './component/Work'
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
              title="Movie app"
              description="It's a movie app, you can add and remove any movie and you can find your favourites with title or with ratings.  "
              link="https://github.com/Sirine454/Movie-app"
            />
          </Col>

          <Col md={4} className="project-card">
            <Work
              imgPath="./captureapp3.png"
              isBlog={false}
              title="Shopping Card"
              description="It's a shopping card for friends items for the lovers of the show Friends.You can add to card any item to price total and remove it.Also you can like you favourites items"
              link="https://drive.google.com/drive/folders/1xeoV6zkLqnDNMeusFjeOrTyIQVbu5juh?usp=sharing"
            />
          </Col>

       
   </Row>
   </div>
   </div>
    
  );
}

export default App;
