import React, { useState } from "react";

const Question = ({ title, text }) => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="question">
      <div className="questionHead">
        <div className="text">{title}</div>
        <button
          className={toggle ? "icon iconRotate" : "icon"}
          onClick={() => setToggle((prev) => !prev)}
        >
          <i className="fa-solid fa-chevron-down"></i>
        </button>
      </div>
      {/* {toggle ? <div className="questionBody">{text}</div> : null} */}
      <div className={ toggle ? 'questionBody test1' : 'questionBody test2' } >{text}</div>
    </div>
  );
};

export default Question;
