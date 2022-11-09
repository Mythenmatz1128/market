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
    },
  ]);

  const [topOrder, setTopOrder] = useState([
    {
      imgSigSrc: null,
      productId: null,
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
      <Row gutter={[16, 24]}>
        {lastet.map((value, i) => {
          return (
            <Grid key={i}
              imgSigSrc={value.imgSigSrc}
              productId={value.productId}
            ></Grid>
          );
        })}
        <Divider></Divider>
        {topOrder.map((value, i) => {
          return (
            <Grid key={i}
              imgSigSrc={value.imgSigSrc}
              productId={value.productId}
            ></Grid>
          );
        })}
      </Row>
    </div>
  );
}
export default MainContent;
