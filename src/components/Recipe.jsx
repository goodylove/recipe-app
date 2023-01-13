import React from "react";
const Recipe = ({ label, image }) => {
  return (
    <div className="recipe">
      <h1>{label}</h1>
      <img src={image} alt="" />
    </div>
  );
};

export default Recipe;
