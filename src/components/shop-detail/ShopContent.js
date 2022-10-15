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
    color: "red",
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
  });

  const { productNum } = useParams();
  useEffect(() => {
    console.log("productNum", productNum);
    axios
      .get(`/api/products/${productNum}`, {
        headers: { "Content-Type": "application/json" },
      })
      .then((response) => {
        const data = response.data.result;
        console.log(data);
        setProduct(data);
      });
  }, []);

  return (
    <div style={style}>
      <div style={boxStyle}>
        <div style={metaStyle}>
          <Title>
            <Text>{product.productName}</Text>
          </Title>

          <Title level={3}>
            판매자
            <Text type="warning">
              {" "}
              {product.sellerName} {product.sellerRank} ({product.sellerPercent}
              )
            </Text>
          </Title>
          <Title level={3}>
            단위 당<Text type="danger"> {product.price}</Text> 원
          </Title>
          <Title level={5}>
            등록일자
            <Text mark> {product.createdDate}</Text> 일
          </Title>
        </div>

        <Image
          width={200}
          height={200}
          src="https://previews.123rf.com/images/redrockerz/redrockerz1303/redrockerz130300043/18435157-%EA%B8%B0%EB%8B%A4%EB%A6%AC%EB%8A%94-%EC%82%AC%EB%9E%8C.jpg"
        />
        <div style={buttonBoxStyle}>
          <OrderModal style={btnStyle}></OrderModal>

          <Button style={btnStyle}>
            {" "}
            <Link to="/shop-list">장바구니 추가</Link>{" "}
          </Button>
        </div>
      </div>

      <Divider />
      <div style={infoStyle}>
        {/* <div>
          {Object.keys(product).map((key, i) => {
            return <h2 key={i}>{key} : </h2>;
          })}
        </div>

        <div>
          {Object.values(product).map((value, i) => {
            return (
              <h2 key={i} style={dataStyle}>
                {value}{" "}
              </h2>
            );
          })}
        </div> */}

        <h3> {product.info}</h3>
      </div>
      <Divider />
      <div style={boxStyle}>
        <div style={imgArrStyle}>
          {Object.values(product.ordinalImgSrc).map((value, i) => {
            return (
              <div>
                <Image
                  width="800px"
                  height="600px"
                  src={`http://localhost:8080/${product.ordinalImgSrc[i]}`}
                ></Image>
              </div>
            );
          })}
        </div>
      </div>
      <Divider />
      <PriceComparison price={product.price} />
      <Divider />
      <p>각종그래프추가예정</p>
      <Divider />
      <div style={commetStyle}>
        <Review></Review>
      </div>
    </div>
  );
};
export default ShopContent;
