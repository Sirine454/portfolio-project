import React from "react";
import { Facebook, Instagram, Linkedin, Github } from "react-bootstrap-icons";
import { Container, Row, Col } from "react-bootstrap";


const Footer = (props) => {
  return (
    <section id="footer">
      <Container>
        <Row>
          <Col>
            <h5 className="hello-title">SAY HELLO</h5>
            <br />
            <br />
            <p className="collaborate">{props.project}</p>
          </Col>
          <Col xs={5}>
            <br />
            <br />
            <br />
            <br />
            <br />
            <div className="second-footer">
              <h5>Email </h5>
              <a className="mail1" href={`mailto: ${props.mail}`}>
                {props.mail}
              </a>
              <h5>
                Phone <br /> <span className="phone">{props.phoneNumber}</span>
              </h5>
            </div>
          </Col>
        </Row>
      </Container>
      <hr className="the-line" />
      <div className="foot-footer">
        <p className="copyright">
          © Copyright A2S | Design by{" "}
          <span className="designers">Aymen-Sirine-Safa</span>
        </p>
        <div className="icons">
          <div className="icons-f">
            <a href={props.facebbok} target="_blank">
              <Facebook />
            </a>
          </div>
          <div className="icons-i">
            <a href={props.instagram} target="_blank">
              <Instagram />
            </a>
          </div>
          <div className="icons-l">
            <a href={props.linkedin} target="_blank">
              <Linkedin />
            </a>
          </div>
          <div className="icons-g">
            <a href={props.github} target="_blank">
              <Github />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Footer;