import React from "react";
import ChooseMember from "./chooseMember";
import "../../../styles/chooseMember.css"; // Import the CSS file for styles


const ChooseMembers = ( {members} ) => {
  return (
    <div className="members-container-parent">
      {members && members.map((member, index) => (
        <ChooseMember key={index} member={member.Member} color = {member.color} />
      ))}
    </div>
  );
};

export default ChooseMembers;