import React from "react";
const Recipe = ({ label, image }) => {
  const mystyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    margin: "10px",
    backgroundColor: "whileSmoke",
    width: "100%",
    borderRadius: "5px",
    boxShadow: "2px 2px 2px gray ,-2px -2px 2px  gray",
  };
  return (
    <div className="recipe" style={mystyle}>
      <img
        src={image}
        alt=""
        style={{ width: "200px", height: "150px", padding: "20px" }}
      />
      <span>{label}</span>
    </div>
  );
};

export default Recipe;
