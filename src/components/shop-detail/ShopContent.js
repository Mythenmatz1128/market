import "antd/dist/antd.min.css";
import { LikeOutlined, MessageOutlined, StarOutlined } from "@ant-design/icons";
import {
  Button,
  Avatar,
  List,
  Space,
  Divider,
  Image,
  Rate,
  Typography,
  Skeleton,
  Spin,
  Card,
} from "antd";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PriceComparison from "./PriceComparison";
import { useParams } from "react-router-dom";
import Review from "./Review";
import OrderModal from "../order/OrderModal";
import axios from "axios";
const ShopContent = () => {
  const { Text, Link, Title } = Typography;

  const style = {
    marginTop: "2rem",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };
  const dataStyle = {
    fontWeight: "bolder",
  };
  const imgStyle = {
    textAlign: "center",
    marginTop: "2rem",
  };

  const boxStyle = {
    display: "flex",
    justifyContent: "center",
    wordWrap: "break-word",

    width: "800px",
  };
  const infoStyle = {
    wordWrap: "break-word",

    width: "800px",
  };
  const buttonBoxStyle = {
    display: "flex",
    flexDirection: "column",
    margin: "1rem",
  };
  const btnStyle = {
    margin: "1rem",
  };
  const metaStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "start",
  };
  const imgArrStyle = {
    wordWrap: "break-word",

    width: "800px",
  };
  const commetStyle = {
    wordWrap: "break-word",

    width: "800px",
  };
  const priceStyle = {
    alignSelf: "center",
  };

  function handleClick(){
    var object = new Object();
    object.count = 1;
    object.productId = product.productId;
    const json = JSON.stringify(object);
    console.log(json);

    axios
      .post("/api/cart", json, {
        headers: { "Content-Type": "application/json" },
      })
      .then((response) => alert(response.data.result.msg))

      .catch((error) => alert(error.response.data.msg));
  };
  const [product, setProduct] = useState({
    productId: null,
    kindGradeId: null,
    productName: null,
    price: null,
    info: null,
    createdDate: null,
    sellerName: null,
    sellerRank: null,
    sellerPercent: null,
    ordinalImgSrc: [],
    signatureImgSrc: null,
    productAvgPrice: null,
    latestMarketPrice: {
      retail: { price: null, latestDate: null },
      wholesale: { price: null, latestDate: null },
    },
    retailUnit: null,
  });
  const [isloading, setIsLoading] = useState(true);
  const { productNum } = useParams();
  useEffect(() => {
    axios
      .get(`/api/products/${productNum}`, {
        headers: { "Content-Type": "application/json" },
      })
      .then((response) => {
        const data = response.data.result;
        console.log(data);
        setProduct(data);
        setIsLoading(false);
      });
  }, []);

  return (
    <div style={style}>
      <Spin spinning={isloading} size="large">
        <div style={boxStyle}>
          <Card title={product.productName} style={{ width: 300 }}>
            <p>
              {" "}
              판매자
              <Text type="danger"> {product.sellerName} </Text>
            </p>
            <p>
              판매자 등급{" "}
              <Text type="danger">
                {product.sellerRank} 상위({product.sellerPercent})%
              </Text>
            </p>
            <p>
              {product.retailUnit} 당{" "}
              <Text type="danger"> {product.price}</Text> 원
            </p>
            <p>
              사이트 내 평균 가격은 {product.retailUnit} 당{" "}
              <Text type="danger"> {product.productAvgPrice}</Text> 원
            </p>
            <p>
              등록일자
              <Text type="danger"> {product.createdDate}</Text> 일
            </p>
          </Card>

          <Image
            width={250}
            height={250}
            src={`http://localhost:8080/${product.signatureImgSrc}`}
          />
          <div style={buttonBoxStyle}>
            <OrderModal
              style={btnStyle}
              price={product.price}
              productId={product.productId}
            ></OrderModal>

            <Button style={btnStyle} onClick={handleClick}>
              {" "}
              장바구니 추가
            </Button>
          </div>
        </div>
        <Divider />
        <div style={infoStyle}>
          <h3> {product.info}</h3>
        </div>
        <Divider />
        <div style={boxStyle}>
          <div style={imgArrStyle}>
            {Object.values(product.ordinalImgSrc).map((value, i) => {
              return (
                <div key={i}>
                  <Image
                    width="800px"
                    height="600px"
                    src={`http://localhost:8080/${product.ordinalImgSrc[i]}`}
                  ></Image>
                  <Divider />
                </div>
              );
            })}
          </div>
        </div>

        <PriceComparison
          price={product.price}
          retail={product.latestMarketPrice.retail}
          wholesale={product.latestMarketPrice.wholesale}
        />
        <Divider />
        <p>각종그래프추가예정</p>
        <Divider />
        <div style={commetStyle}>
          <Review productNum={productNum}></Review>
        </div>
      </Spin>
    </div>
  );
};
export default ShopContent;
