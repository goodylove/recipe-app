import React, { useState, useEffect } from "react";
import Recipe from "../Recipe";

const FetchRecipe = () => {
  const [recipe, setRecipe] = useState([]);
  const APP_KEY = "29d587081cd94aba8413d56404bfcead";
  const APP_ID = "ef6df93e";
  //   const appApi = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;
  const appApi = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;
  useEffect(() => {
    getRecipes();
  }, []);

  const getRecipes = async () => {
    const response = await fetch(appApi);
    const data = await response.json();
    console.log(data.hits);
    setRecipe(data.hits);
  };

  return (
    <div>
      {recipe.map((recip, index) => (
        <Recipe
          key={index}
          label={recip.recipe.label}
          image={recip.recipe.image}
        />
      ))}
    </div>
  );
};

export default FetchRecipe;
