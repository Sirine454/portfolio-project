
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
        <div className="about">
        <About
          aboutme="Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
              est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
              velit, sed quia non numquam eius modi tempora incidunt ut labore
              et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima
              veniam, quis nostrum exercitationem ullam corporis suscipit
              laboriosam."
          name="Jonathan Doe"
          address1="1600 Amphitheatre Parkway"
          address2="Mountain View, CA 94043 US"
          phoneNumber="+197 543 2345"
          addressMail="sayhello@ceevee.com"
          CV="yasmina-khadra-ce-que-le-jour-doit-a-la-nuit.pdf"
          src={"/original.jpg"}
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
