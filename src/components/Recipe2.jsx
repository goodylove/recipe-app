const CateGorieItems = ({ image, label, ingredient }) => {
  const myStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    margin: "10px",
    backgroundColor: "whileSmoke",
    width: "100%",
    borderRadius: "5px",
    boxShadow: "2px 2px 2px gray ,-2px -2px 2px  gray",
    listStyleType: "none",
    textAlign: "center",
  };

  const itemStyle = {
    display: "flex",
    justifyContent: "space-between",
  };
  return (
    <div className="recipe" style={myStyle}>
      <div>
        <span>
          <img
            src={image}
            alt=""
            style={{
              width: "200px",
              height: "150px",
              padding: "20px",
              borderRadius: "5px",
            }}
          />
          <span style={{ fontSize: "20px", padding: "5px" }}>
            <i>{label}</i>
          </span>
        </span>

        <ul>
          {ingredient.map((item) => (
            <li key={item.label}>{item.food}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CateGorieItems;
