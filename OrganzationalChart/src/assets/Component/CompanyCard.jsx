import React from 'react'

function CompanyCard({companyName, industry, ceo}) {
  return (
    <div className="team-member-card">
    <h2>{companyName}</h2>
    <p>{industry}</p>
    <p>{ceo}</p>
    </div>
  )
}

export default CompanyCard;