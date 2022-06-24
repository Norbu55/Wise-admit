import React from "react";
import Image from "../images/pexels-mart-production.png";

const Recruit = () => {
  return (
    <div
      style={{
        marginTop: "200px",
        marginLeft: "204px",
        color: "#333333",
        display: "flex",
        flexWrap: "wrap",
      }}
    >
      <div>
        <h1 style={{ lineHeight: "72px", fontSize: "50px" }}>
          Recruit students to <span style={{ color: "#FF6B26" }}>China</span>
          <br /> & earn better
          <span style={{ color: "#FF6B26" }}> commission</span>
        </h1>
        <p style={{ marginTop: "21px", lineHeight: "40px", fontSize: "24px" }}>
          Earn 3 times more commission by enrolling students 4 times faster to
          the <br />
          500+ world-class Universities in China
        </p>
        <button
          style={{
            background: "#FF6B26",
            color: "white",
            height: "46px",
            width: "223px",
            border: "none",
            fontSize: "14px",
            marginTop: "51px",
            borderRadius: "8px",
          }}
        >
          Collaborate with us
        </button>
      </div>
      <div style={{ marginLeft: "101px" }}>
        <img src={Image} alt="Producntion image" />
      </div>
    </div>
  );
};

export default Recruit;
