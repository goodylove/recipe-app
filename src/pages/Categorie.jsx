import React, { useState, useEffect } from "react";
import Recipe from "../components/Recipe";
import Form from "./../components/form/Form";
import CateGorieItems from "./../components/Recipe2";

import "./Categories.css";
// import Ingredient from "./../components/Ingredients";

const Categories = () => {
  const APP_KEY = "29d587081cd94aba8413d56404bfcead";
  const APP_ID = "ef6df93e";

  const [recipe, setRecipe] = useState([]);
  const [search, setsearch] = useState("");
  const [query, setQuery] = useState("pastry");
  const appApi = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;

  useEffect(() => {
    getSeach();
  }, [query]);

  const getSeach = async () => {
    const res = await fetch(appApi);
    const data = await res.json();
    console.log(data.hits);

    setRecipe(data.hits);
  };
  const handleChange = ({ target: input }) => {
    console.log(input.value);
    setsearch(input.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setQuery(search);
    // console.log();
    setsearch("");
  };
  return (
    <div className="categories">
      <Form value={search} onchange={handleChange} onSubmit={handleSubmit} />
      {/* <FetchRecipe /> */}
      <div className="recip">
        {recipe.map((recip, index) => {
          return (
            <div className="r-ingred" key={index}>
              <CateGorieItems
                key={index}
                label={recip.recipe.label}
                image={recip.recipe.image}
                ingredient={recip.recipe.ingredients}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Categories;
