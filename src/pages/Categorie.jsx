import React, { useState, useEffect } from "react";
import FetchRecipe from "../components/common/FetchRecipie";
import Recipe from "../components/Recipe";
import Form from "./../components/form/Form";
import SearchItems from "./../components/query/GetItemBySearch";

const Categories = () => {
  const APP_KEY = "29d587081cd94aba8413d56404bfcead";
  const APP_ID = "ef6df93e";

  const [recipe, setRecipe] = useState([]);
  const [search, setsearch] = useState("");
  const [query, setQuery] = useState("chicken");
  const appApi = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;

  useEffect(() => {
    getSeach();
  }, [query]);

  const getSeach = async () => {
    const res = await fetch(appApi);
    const data = await res.json();

    setRecipe(data.hits);
  };
  const handleChange = ({ target: input }) => {
    console.log(input.value);
    setsearch(input.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setQuery(search);
    console.log(search);
    setsearch("");
  };
  return (
    <div className="categories">
      <Form value={search} onchange={handleChange} onSubmit={handleSubmit} />
      {/* <FetchRecipe /> */}
      {recipe.map((recip) => {
        return (
          <Recipe
            key={recip.recipe.label}
            label={recip.recipe.label}
            image={recip.recipe.image}
          />
        );
      })}
    </div>
  );
};

export default Categories;
