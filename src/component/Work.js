import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import { Link } from "react-bootstrap-icons";
function Works(props) {
    return (
      <div className="projects">
        
      <Card className="project-card-view">
        <Card.Img variant="top" src={props.imgPath} alt="card-img" />
        <Card.Body>
          <Card.Title><strong>{props.title}</strong></Card.Title>
          <Card.Text style={{ textAlign: "justify" }}>
            {props.description}
          </Card.Text>
          <Button variant="primary" href={props.link} target="_blank" >
            <Link /> &nbsp;
            {props.isBlog ? "View Blog" : "View Project"}
          </Button>
        </Card.Body>
      </Card>
      </div>
    );
  }
  export default Works;