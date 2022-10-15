import { LikeOutlined, MessageOutlined, StarOutlined } from "@ant-design/icons";
import { Avatar, List, Space } from "antd";
import { useRef, useState, useEffect } from "react";
import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";

const imgStyle = {
  width: "200px",
  height: "220px",
};

const IconText = ({ icon, text }) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
);
// function binding(props) {
//   console.log(props.test)
//   const arrDataFromDB = props.test;
//   return arrDataFromDB.map((_, i) => ({
//     number: i,
//     href: "shop-detail/" + arrDataFromDB[i].productNum,
//     title: arrDataFromDB[i].title,
//     avatar: "https://joeschmoe.io/api/v1/random",
//     description: arrDataFromDB[i].description,
//     content: arrDataFromDB[i].content,
//     commentCount: arrDataFromDB[i].commentCount,
//     basket: arrDataFromDB[i].basket,
//     score: arrDataFromDB[i].score,
//   }));
// }
// function binding({ serverData }) {
//   console.log(serverData);
//   const arrDataFromDB = serverData;
//   return arrDataFromDB.map((_, i) => ({
//     number: i,
//     href: "shop-detail/" + arrDataFromDB[i].productNum,
//     title: arrDataFromDB[i].title,
//     avatar: "https://joeschmoe.io/api/v1/random",
//     description: arrDataFromDB[i].description,
//     content: arrDataFromDB[i].content,
//     commentCount: arrDataFromDB[i].commentCount,
//     basket: arrDataFromDB[i].basket,
//     score: arrDataFromDB[i].score,
//   }));
// }

//function ShopList(props) {
function ShopList({ selId, casId, serverData, setServerData }) {
  useEffect(() => {
    axios
      .get(
        `/api/products?productName=&orderBy=${selId.current}&itemCategoryCode=${casId.current[0]}&itemCode=${casId.current[1]}&kindId=${casId.current[2]}&kindGradeId=${casId.current[3]}`,
        {
          headers: { "Content-Type": "application/json" },
        }
      )
      .then((response) => {
        const data = response.data.result;

        setServerData(data);
        console.log("serverdata: ", serverData);
      })
      .catch((error) => alert(error.response));
  }, []);

  return (
    <List
      itemLayout="vertical"
      size="large"
      pagination={{
        onChange: (page) => {
          console.log(page);
        },
        pageSize: 5,
      }}
      dataSource={serverData}
      renderItem={(item) => {
        return (
          <List.Item
            key={item.productId}
            actions={[
              <IconText
                icon={StarOutlined}
                text="판매자 등급"
                key={item.sellerRank}
              />,
              <IconText
                icon={LikeOutlined}
                text="판매자 백분위"
                key={item.sellerPercent}
              />,
            ]}
            extra={
              <img
                width={272}
                alt="logo"
                src={item.signatureImgSrc}
                style={imgStyle}
              />
            }
          >
            <List.Item.Meta
              title={
                <p>
                  <Link to={`shop-detail/${item.productId}`}>
                    {" "}
                    {item.productName}
                  </Link>
                </p>
              }
              description={item.sellerName}
            />
            <h3>가격 : {item.price} 원 </h3>
            <h3>등록일 : {item.createdDate} </h3>
          </List.Item>
        );
      }}
    />
  );
}

export default ShopList;
