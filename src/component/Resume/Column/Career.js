import React from "react";

const Career = (props) => {
  return (
    <div>
      <div className="right-col">
        <h2>{props.companyName}</h2>
        <h5>
          <span>{props.position} ▸</span> {props.period}
        </h5>
        <span>{props.tasks}</span>
      </div>
    </div>
  );
};

export default Career;