import React, { useState, useEffect } from "react";
import Recipe from "../Recipe";
// import "../styles/FetchRecipe.css";

// import AllRecipe from "./RecipeItems";
// import Pasta from "./../utilit/pasta";

const FetchRecipe = () => {
  const [chicken, setChicken] = useState([]);
  const [pastry, setPastry] = useState([]);
  const [pasta, setPasta] = useState([]);
  const [salad, setSalad] = useState([]);
  const [buger, setBuger] = useState([]);
  const APP_KEY = "29d587081cd94aba8413d56404bfcead";
  const APP_ID = "ef6df93e";
  //   const appApi = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;
  const appApi = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;
  const appApi1 = `https://api.edamam.com/search?q=pastry&app_id=${APP_ID}&app_key=${APP_KEY}`;
  const appApi2 = `https://api.edamam.com/search?q=pasta&app_id=${APP_ID}&app_key=${APP_KEY}`;
  const appApi3 = `https://api.edamam.com/search?q=salad&app_id=${APP_ID}&app_key=${APP_KEY}`;
  const appApi4 = `https://api.edamam.com/search?q=burger bun&app_id=${APP_ID}&app_key=${APP_KEY}`;
  useEffect(() => {
    getRecipes();
  }, []);

  const getRecipes = async () => {
    const response = await Promise.all([
      fetch(appApi),
      fetch(appApi1),
      fetch(appApi2),
      fetch(appApi3),
      fetch(appApi4),
    ]);
    const data1 = await response[0].json();
    const data2 = await response[1].json();
    const data3 = await response[2].json();
    const data4 = await response[3].json();
    const data5 = await response[4].json();

    setChicken(data1.hits);
    setPastry(data2.hits);
    setPasta(data3.hits);
    setSalad(data4.hits);
    setBuger(data5.hits);
  };
  const getStyle = {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
  };
  const styleDiv = {
    width: "100%",
    display: "grid",
    columnGap: "40px",
    gridTemplateColumns: "1fr  1fr 1fr",
    alignContent: "center",
    justifyItems: "center",
  };
  const styleDiv2 = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "80%",
  };

  return (
    <div className="allRecipe" style={getStyle}>
      <div style={styleDiv2}>
        <span style={{ fontSize: "40px", fontWeight: "500" }}>BUGER</span>
        <div style={styleDiv}>
          {buger.map((recip, index) => (
            <Recipe
              key={index}
              label={recip.recipe.label}
              image={recip.recipe.image}
            />
          ))}
        </div>
      </div>
      <div style={styleDiv2}>
        <span style={{ fontSize: "40px", fontWeight: "500" }}>Chicken</span>
        <div style={styleDiv}>
          {chicken.map((recip, index) => (
            <Recipe
              key={index}
              label={recip.recipe.label}
              image={recip.recipe.image}
            />
          ))}
        </div>
      </div>
      <div style={styleDiv2}>
        <span style={{ fontSize: "40px", fontWeight: "500" }}>PASTRY</span>
        <div style={styleDiv}>
          {pastry.map((recip, index) => (
            <Recipe
              key={index}
              label={recip.recipe.label}
              image={recip.recipe.image}
            />
          ))}
        </div>
      </div>
      <div style={styleDiv2}>
        <span style={{ fontSize: "40px", fontWeight: "500" }}>PASTA</span>
        <div style={styleDiv}>
          {pasta.map((recip, index) => (
            <Recipe
              key={index}
              label={recip.recipe.label}
              image={recip.recipe.image}
            />
          ))}
        </div>
      </div>
      <div style={styleDiv2}>
        <span style={{ fontSize: "40px", fontWeight: "500" }}>SALAD</span>
        <div style={styleDiv}>
          {salad.map((recip, index) => (
            <Recipe
              key={index}
              label={recip.recipe.label}
              image={recip.recipe.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FetchRecipe;
