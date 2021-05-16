import React from "react";
import { Container, Row, Col, ProgressBar } from "react-bootstrap";
import Career from "./Column/Career";
import Education from "./Column/Education";
import Skill from "./Column/skills";

import "bootstrap/dist/css/bootstrap.min.css";
import "./Resume.css";

const Resume = (props) => {
  if (props.sectionHeader === "CAREER") {
    return (
      <section id="resume">
        <Container>
          <Row>
            <Col>
              <h5>{props.sectionHeader}</h5>
            </Col>
            <Col xs={9}>
              <div className="cont">
                <Career
                  companyName="Dropbox"
                  position="Product Designer"
                  period="AUGUST 2019 - PRESENT"
                  tasks=" Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laudantium cumque laborum, unde eligendi fugiat qui in sunt!
                Quis dolor, itaque nisi harum tempora eum minima! Veritatis,
                mollitia! Impedit, cumque totam?"
                />
              </div>

              <div className="cont">
                <Career
                  companyName="Facebook"
                  position="UI/UX Designer"
                  period="AUGUST 2016 - JULY 2019"
                  tasks=" Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laudantium cumque laborum, unde eligendi fugiat qui in sunt!
                Quis dolor, itaque nisi harum tempora eum minima! Veritatis,
                mollitia! Impedit, cumque totam?"
                />
              </div>
            </Col>
          </Row>
          <hr />
        </Container>
      </section>
    );
  } else if (props.sectionHeader === "EDUCATION") {
    return (
      <section id="resume">
        <Container>
          <Row>
            <Col>
              <h5>{props.sectionHeader}</h5>
            </Col>
            <Col xs={9}>
              <div className="cont">
                <Education
                  universityName="University of Life"
                  degree="Master in Graphic Design"
                  period="APRIL 2015"
                  tasks=" Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laudantium cumque laborum, unde eligendi fugiat qui in sunt!
                Quis dolor, itaque nisi harum tempora eum minima! Veritatis,
                mollitia! Impedit, cumque totam?"
                />
              </div>

              <div className="cont">
                <Education
                  universityName="School of Cool Designers"
                  degree="B.A. Degree in Graphic Design"
                  period="AUGUST 2012"
                  tasks=" Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laudantium cumque laborum, unde eligendi fugiat qui in sunt!
                Quis dolor, itaque nisi harum tempora eum minima! Veritatis,
                mollitia! Impedit, cumque totam?"
                />
              </div>
            </Col>
          </Row>
          <hr />
        </Container>
      </section>
    );
  } else if (props.sectionHeader === "SKILL") {
    return (
      <section id="resume">
        <Container>
          <Row>
            <Col>
              <h5>{props.sectionHeader}</h5>
            </Col>
            <Col xs={9}>
              <Skill skill="HTML" level={85} />
              <Skill skill="CSS" level={70} />
              <Skill skill="JavaScript" level={75} />
              <Skill skill="React" level={70} />
            </Col>
          </Row>
        </Container>
      </section>
    );
  }
};
export default Resume;