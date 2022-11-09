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

const productRootAddress = "shop-list/shop-detail/";

function MainCarousel({ topOrder }) {
  return (
    <Carousel autoplay>
      {topOrder.map((value, i) => {
        return (
          <div key={i}>
            <h3 style={contentStyle}>
              <NavLink to={productRootAddress + value.productId}>
                <img src={value.imgSigSrc} style={imgStyle} />
              </NavLink>
            </h3>
          </div>
        );
      })}
    </Carousel>
  );
}

export default MainCarousel;
