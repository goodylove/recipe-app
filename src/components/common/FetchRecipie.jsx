import React, { useState, useEffect } from "react";
import Recipe from "../Recipe";
// import AllRecipe from "./RecipeItems";

const FetchRecipe = () => {
  const [chicken, setChicken] = useState([]);
  const [pastry, setPastry] = useState([]);
  const [pasta, setPasta] = useState([]);
  const [salad, setSalad] = useState([]);
  const APP_KEY = "29d587081cd94aba8413d56404bfcead";
  const APP_ID = "ef6df93e";
  //   const appApi = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;
  const appApi = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;
  const appApi1 = `https://api.edamam.com/search?q=pastry&app_id=${APP_ID}&app_key=${APP_KEY}`;
  const appApi2 = `https://api.edamam.com/search?q=pasta&app_id=${APP_ID}&app_key=${APP_KEY}`;
  const appApi3 = `https://api.edamam.com/search?q=salad&app_id=${APP_ID}&app_key=${APP_KEY}`;
  useEffect(() => {
    getRecipes();
  }, []);

  const getRecipes = async () => {
    const response = await Promise.all([
      fetch(appApi),
      fetch(appApi1),
      fetch(appApi2),
      fetch(appApi3),
    ]);
    const data1 = await response[0].json();
    const data2 = await response[1].json();
    const data3 = await response[2].json();
    const data4 = await response[3].json();
    console.log(data1.hits);
    setChicken(data1.hits);
    setPastry(data2.hits);
    setPasta(data3.hits);
    setSalad(data4.hits);
  };

  return (
    <div className="allRecipe">
      <div>
        <h1>chichen</h1>
        {chicken.map((recip, index) => (
          <Recipe
            key={index}
            label={recip.recipe.label}
            image={recip.recipe.image}
          />
        ))}
      </div>
      <div>
        <h1>pastry</h1>
        {pastry.map((recip, index) => (
          <Recipe
            key={index}
            label={recip.recipe.label}
            image={recip.recipe.image}
          />
        ))}
      </div>
      <div>
        <h1>pasta</h1>
        {pasta.map((recip, index) => (
          <Recipe
            key={index}
            label={recip.recipe.label}
            image={recip.recipe.image}
          />
        ))}
      </div>
      <div>
        <h1>salad</h1>
        {salad.map((recip, index) => (
          <Recipe
            key={index}
            label={recip.recipe.label}
            image={recip.recipe.image}
          />
        ))}
      </div>
    </div>
  );
};

export default FetchRecipe;
