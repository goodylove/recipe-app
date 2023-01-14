import react from "react";
import FetchRecipe from "../components/common/FetchRecipie";
import Slider from "../components/Slider/Slider";
import Image from "../components/assets/Ellipse 10.png";

import "../styles/Home.css";

const Home = () => {
  const myStyle = {
    backgroundImage: `url(${Image}`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    height: "500px",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
  };
  return (
    <div className="home">
      <div style={myStyle}>
        {/* <p>Savory & Sweet</p>
        <img src={ellipse} alt="" /> */}
        <Slider />
      </div>
      <FetchRecipe />
    </div>
  );
};

export default Home;
