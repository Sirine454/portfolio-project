import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Skill = (props) => {
  return (
    <div>
      <h5>{props.skill}</h5>
      <div className="progress" style={{ height: "40px" }}>
        <div
          className="progress-bar"
          role="progressbar"
          style={{ width: `${props.level}%`, backgroundColor: "#141414" }}
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div>
      <br />
    </div>
  );
};

export default Skill;