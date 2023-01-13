import react from "react";
import ellipse from "../assets/Ellipse 10.png";
import homeb from "../assets/bg4.jpg";
import FetchRecipe from "./../components/common/FetchRecipie";
import "../styles/Home.css";

const Home = () => {
  const myStyle = {
    backgroundImage: `url(${homeb}`,
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
        <p>Savory & Sweet</p>
        <img src={ellipse} alt="" />
      </div>
      <FetchRecipe />
    </div>
  );
};

export default Home;
