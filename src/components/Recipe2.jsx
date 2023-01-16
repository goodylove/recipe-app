const CateGorieItems = ({ image, label, ingredient }) => {
  const myStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    margin: "10px",
    backgroundColor: "whileSmoke",
    width: "80%",
    borderRadius: "5px",
    boxShadow: "2px 2px 2px gray ,-2px -2px 2px  gray",
    listStyleType: "none",
    textAlign: "center",
  };

  const itemStyle = {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    width: "60%",
  };
  return (
    <div className="recipe" style={myStyle}>
      <span style={{ fontSize: "20px", padding: "5px", fontWeight: "bold" }}>
        <i>{label}</i>
      </span>
      <div style={itemStyle}>
        <span>
          <img
            src={image}
            alt=""
            style={{
              width: "250px",
              height: "200px",
              padding: "20px",
              borderRadius: "20px",
            }}
          />
        </span>

        <ul style={{ listStyleType: "none" }}>
          <span
            style={{
              fontSize: "22px",
              fontFamily: "cursive",
              textDecoration: "underline",
            }}
          >
            ingredients
          </span>
          {ingredient.map((item, index) => (
            <li key={index}>{item.food}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CateGorieItems;
