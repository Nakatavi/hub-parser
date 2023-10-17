import React from "react";
import ChooseMember from "./chooseMember";
import "../../../styles/chooseMember.css"; // Import the CSS file for styles

function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

const ChooseMembers = ({ members }) => {
  return (
    <div className="members-container">
      {members && members.map((member, index) => (
        <ChooseMember key={index} member={member} color = {getRandomColor()} />
      ))}
    </div>
  );
};

export default ChooseMembers;