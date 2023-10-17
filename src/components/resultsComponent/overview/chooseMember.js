import React from "react";
import "../../../styles/chooseMember.css"; // Import the CSS file for styles

const ChooseMember = ({ member,color }) => {
  return (
    <div className="member-container">
      <div className="dot" style={{ backgroundColor: color }}></div>
      <div className="member-name">{member}</div>
    </div>
  );
};

export default ChooseMember;
