import axios from "axios";
import { useEffect, useState } from "react";
import Grid from "./Grid";
import MainCarousel from "./MainCarousel";
import { AutoComplete, Col, Divider, Row } from "antd";
function MainContent() {
  const [lastet, setLastet] = useState([
    {
      imgSigSrc: null,
      productId: null,
      productName: null,
      price: null,
      retailUnit: null,
    },
  ]);

  const [topOrder, setTopOrder] = useState([
    {
      imgSigSrc: null,
      productId: null,
      productName: null,
      price: null,
      retailUnit: null,
    },
  ]);
  useEffect(() => {
    axios
      .get("/api/products/main-page/latest", {
        headers: { "Content-Type": "application/json" },
      })
      .then((res) => {
        setLastet(res.data.result);
        console.log(lastet);
      });
    axios
      .get("/api/products/main-page/order-count", {
        headers: { "Content-Type": "application/json" },
      })
      .then((res) => {
        setTopOrder(res.data.result);
        console.log(topOrder);
      });
  }, []);
  return (
    <div>
      <MainCarousel topOrder={topOrder}></MainCarousel>
      <Divider></Divider>
      <div>
        {" "}
        <b>최근 등록된 상품</b>
      </div>

      <Row gutter={[16, 24]}>
        {lastet.map((value, i) => {
          return (
            <Grid
              key={i}
              imgSigSrc={value.imgSigSrc}
              productId={value.productId}
              productName={value.productName}
              price={value.price}
              retailUnit={value.retailUnit}
            ></Grid>
          );
        })}
      </Row>
      <Divider></Divider>
      <div>
        {" "}
        <b> 가장 많이 팔린 상품</b>
      </div>
      <Row gutter={[16, 24]}>
        {topOrder.map((value, i) => {
          return (
            <Grid
              key={i}
              imgSigSrc={value.imgSigSrc}
              productId={value.productId}
              productName={value.productName}
              price={value.price}
              retailUnit={value.retailUnit}
            ></Grid>
          );
        })}
      </Row>
    </div>
  );
}
export default MainContent;
