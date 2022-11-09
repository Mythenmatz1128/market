import { LikeOutlined, MessageOutlined, StarOutlined } from "@ant-design/icons";
import { Avatar, List, Space } from "antd";
import { useRef, useState, useEffect } from "react";
import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
import { useResetRecoilState } from "recoil";

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

//function ShopList(props) {
function ShopList({ selId, casId, serverData, setServerData }) {
  const pageNum=useRef(1);
  const pageSize="5";
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
          pageNum.current=page;
          console.log(page);
        },
        //total
        pageSize: pageSize,
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
