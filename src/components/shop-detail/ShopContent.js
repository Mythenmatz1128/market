import "antd/dist/antd.min.css";
import { LikeOutlined, MessageOutlined, StarOutlined } from "@ant-design/icons";
import { Button, Avatar, List, Space, Divider, Image, Rate } from "antd";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ManagerMyPage from "../../components/managerMyPage/ManagerMyPage";
import { useParams } from "react-router-dom";
import Review from "./Review";
import OrderModal from "../order/OrderModal";
const ShopContent = (props) => {
  const { id } = useParams();
  const style = {
    marginTop: "2rem",
    textAlign: "center",
  };
  const dataStyle = {
    color: "red",
  };
  const boxStyle = {
    display: "flex",
    justifyContent: "center",
  };
  const buttonBoxStyle = {
    display: "flex",
    flexDirection: "column",
    margin: "1rem",
  };
  const btnStyle = {
    margin: "1rem",
  };
  let [product, setProduct] = useState({
    productNum: null,
    title: null,
    description: null,
    content: null,
    basket: null,
    score: null,
    commentCount: null,
  });

  useEffect(() => {
    const arrDataFromDB = props.test;
    //console.log(arrDataFromDB)
    const res = arrDataFromDB.filter((i) => i.productNum === id);
    setProduct(res[0]);
  }, []);

  return (
    <div style={style}>
      <div style={boxStyle}>
        <Image
          width={600}
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
      <div style={boxStyle}>
        <div>
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
        </div>
      </div>
      <Divider />
      <p>각종그래프추가예정</p>
      <Review></Review>
    </div>
  );
};
export default ShopContent;
