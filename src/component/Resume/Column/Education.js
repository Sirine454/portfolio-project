import React from "react";

const Education = (props) => {
  return (
    <div className="right-col">
      <h2>{props.universityName}</h2>
      <h5>
        <span>{props.degree} ▸</span> {props.period}
      </h5>
      <span>{props.tasks}</span>
    </div>
  );
};

export default Education;