import { LikeOutlined, MessageOutlined, StarOutlined } from "@ant-design/icons";
import { Avatar, List, Space } from "antd";
import React from "react";
import pic from "../../img/샤인머스켓.png";

const imgStyle = {
  width: "200px",
  height: "220px",
};
const size = 3;

const DataFromDB = {
  productNum: null,
  title: null,
  description: null,
  content: null,
  basket: null,
  score: null,
  commentCount: null,
};
const arrDataFromDB = [{ DataFromDB }];

arrDataFromDB[0] = {
  productNum: "0001",
  title: "싱싱한 사과",
  description: "강대현",
  content: "300원",
  commentCount: 12,
  basket: 14,
  score: 9.7,
};
arrDataFromDB[1] = {
  productNum: "0002",
  title: "싱싱한 포도",
  description: "강병관",
  content: "3000원",
  commentCount: 13,
  basket: 15,
  score: 9.8,
};
arrDataFromDB[2] = {
  productNum: "0003",
  title: "싱싱한 바나나",
  description: "성호창",
  content: "30000원",
  commentCount: 14,
  basket: 16,
  score: 9.9,
};

const data = Array.from({
  length: size,
}).map((_, i) => ({
  number: i,
  href: "shop-datail/" + arrDataFromDB[i].productNum,
  title: arrDataFromDB[i].title,
  avatar: "https://joeschmoe.io/api/v1/random",
  description: arrDataFromDB[i].description,
  content: arrDataFromDB[i].content,
  commentCount: arrDataFromDB[i].commentCount,
  basket: arrDataFromDB[i].basket,
  score: arrDataFromDB[i].score,
}));

const IconText = ({ icon, text }) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
);

const ShopList = () => (
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
          <IconText
            icon={MessageOutlined}
            text={data[item.number].commentCount}
            key="list-vertical-message"
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

export default ShopList;
