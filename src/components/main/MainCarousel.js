import pic from "../../img/샤인머스켓.png";
import { Carousel } from "antd";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
const imgStyle = {
  border: "1px solid green",
  width: "750px",
  height: "300px",
  margin: "auto",
};
const contentStyle = {
  height: "300px",
  color: "#fff",
  lineHeight: "300px",
  textAlign: "center",
  background: "#364d79",
  width: "750px",
  margin: "auto",
  marginTop: "10px",
};
const productNum = ["0", "1", "2", "3"]
const productAddress = [];
productNum.map((value, i) => {
  productAddress[i] = "shop-detail/" + value;
});
function MainCarousel() {
  return (
    <Carousel autoplay>
      <div>
        <h3 style={contentStyle}>
          <NavLink to={productAddress[0]}>
            <img src={pic} style={imgStyle} />
          </NavLink>
        </h3>
      </div>
      <div>
        <h3 style={contentStyle}>2</h3>
      </div>
      <div>
        <h3 style={contentStyle}>3</h3>
      </div>
      <div>
        <h3 style={contentStyle}>4</h3>
      </div>
    </Carousel>
  );
}

export default MainCarousel;
