import React from "react";

import { Download } from "react-bootstrap-icons";
import { Container, Row, Col } from "react-bootstrap";

const About = (about) => {
  return (
    <section id="about">
      <Container>
        <Row>
          <Col>
            <div className="profile-pic">
              <img src={about.src} alt="profile-pic" />
            </div>
          </Col>
          <Col xs={9}>
            <h2 className="title">About Me</h2>
            <p>{about.aboutme}</p>
            <hr />
            <div className="contact-details">
              <div className="contact">
                <h2 className="title">Contact Details</h2>
                <p className="address">
                  <span>{about.name}</span>
                  <br />
                  <span>{about.address1}</span>
                  <br />
                  <span>{about.address2}</span>
                  <br />
                  <span>{about.phoneNumber}</span>
                  <br />
                  <a className="mail" href={`mailto: ${about.addressMail}`}>
                    {about.addressMail}
                  </a>
                </p>
              </div>
              <a href={about.CV}>
                <button className="btn">
                  <Download className="download"></Download> DOWNLOAD CV
                </button>
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
export default About;