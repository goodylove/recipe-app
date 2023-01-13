// import React, { useEffect, useState } from "react";

// const AllRecipe = () => {
//   const APP_KEY = "29d587081cd94aba8413d56404bfcead";
//   const APP_ID = "ef6df93e";
//   //   const appApi = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;

//   const appApiUrl = [
//     `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`,
//     `https://api.edamam.com/search?q=rice&app_id=${APP_ID}&app_key=${APP_KEY}`,
//     `https://api.edamam.com/search?q=pastry&app_id=${APP_ID}&app_key=${APP_KEY}`,
//     `https://api.edamam.com/search?q=pasta&app_id=${APP_ID}&app_key=${APP_KEY}`,
//   ];

//   useEffect(() => {
//     getAllData();
//   });
//   const getAllData = async () => {
//     try {
//       const response = await Promise.all(appApiUrl.map((e) => fetch(e)));
//       const data = await Promise.all(response.map((re) => re.json()));
//       data = data.map((data) => data[0].recipe.recipe);
//       console.log(data);
//     } catch (err) {
//       console.log(err);
//     }
//   };
// };

// export default AllRecipe;
