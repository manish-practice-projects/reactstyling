import React from "react";

function InlineStyleCard({ name, role, active }) {
  const cardStyle = {
    width: "250px",
    padding: "20px",
    borderRadius: "12px",
    boxShadow: "0 4px 6px rgba(0,0,0,0.2)",
    backgroundColor: "white",
    margin: "10px auto",
    textAlign: "center",
  };

  return (
    <div style={cardStyle}>
      <h2> {name} </h2>
      <p>{role}</p>
      <p style={{color: active ? "green" : "red"}} >
        {active ? "Active" : "Inactive"}
      </p>
    </div>
  );
}

export default InlineStyleCard;
