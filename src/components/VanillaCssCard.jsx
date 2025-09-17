import "../App.css";

import React from 'react'

function VanillaCssCard({name, role, active}) {
  return (
    <div className="card">
      <h2>{name}</h2>
      <p>{role}</p>
      <p className={active ? "active" : "Inactive"} >
        {active ? "Active": "Inactive"}
      </p>
    </div>
  )
}

export default VanillaCssCard
