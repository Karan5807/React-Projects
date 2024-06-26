import React from "react";
const MemberCard = ({imageUrl,name,employeeName,role,email}) =>{
  return (
    <div className="team-member-card">
    <img src={imageUrl} alt={name} />
    <h2>{employeeName}</h2>
    <p>{role}</p>
    <p>{email}</p>
    </div>
  )
}

export default MemberCard;