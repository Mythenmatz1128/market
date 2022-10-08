import { LikeOutlined, MessageOutlined, StarOutlined } from "@ant-design/icons";
import { Avatar, List, Space } from "antd";
import React from "react";
import pic from "../../img/샤인머스켓.png";

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
function binding(props) {
  console.log(props.test)
  const arrDataFromDB = props.test;
  return arrDataFromDB.map((_, i) => ({
    number: i,
    href: "shop-detail/" + arrDataFromDB[i].productNum,
    title: arrDataFromDB[i].title,
    avatar: "https://joeschmoe.io/api/v1/random",
    description: arrDataFromDB[i].description,
    content: arrDataFromDB[i].content,
    commentCount: arrDataFromDB[i].commentCount,
    basket: arrDataFromDB[i].basket,
    score: arrDataFromDB[i].score,
  }));
}

function ShopList(props) {
  const data = binding(props);
  return (
    <List
      itemLayout="vertical"
      size="large"
      pagination={{
        onChange: (page) => {
          console.log(page);
        },
        pageSize: 3,
      }}
      dataSource={data}
      renderItem={(item) => (
        <List.Item
          key={item.href}
          actions={[
            <IconText
              icon={StarOutlined}
              text="판매자 등급"
              key="list-vertical-star-o"
            />,
            <IconText
              icon={LikeOutlined}
              text="판매자 백분위"
              key="list-vertical-like-o"
            />,

          ]}
          extra={<img width={272} alt="logo" src={pic} style={imgStyle} />}
        >
          <List.Item.Meta
            avatar={<Avatar src={item.avatar} />}
            title={<a href={item.href}>{item.title}</a>}
            description={item.description}
          />
          {item.content}
        </List.Item>
      )}
    />
  );
}

export default ShopList;
