import { LikeOutlined, MessageOutlined, StarOutlined } from "@ant-design/icons";
import { Avatar, List, Space } from "antd";
import React from "react";
import pic from "../../img/샤인머스켓.png";

const imgStyle = {
  width: "200px",
  height: "220px",
};
const size = 2
const DataFromDB = {
  productNum: ['1','2'],
  title : ['최고급 샤인머스켓','싸구려 사과'],
  description : ['강대현','성호창'],
  content: ['진짜 달달한 설탕급 당도 ','둘이 먹다가 하나가 죽을 지도 ?'],
  commentCount : ['10','3']
}
const data = Array.from({
  length:size ,
}).map((_, i) => ({
  number : i,
  href: "shop-datail/" + i,
  title: DataFromDB.title[i],
  avatar: "https://joeschmoe.io/api/v1/random",
  description: DataFromDB.description[i],
  content: DataFromDB.content[i],
  commentCount : DataFromDB.commentCount[i]
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
            text="12"
            key="list-vertical-star-o"
          />,
          <IconText
            icon={LikeOutlined}
            text={data[item.number].commentCount}
            key="list-vertical-like-o"
          />,
          <IconText
            icon={MessageOutlined}
            text="2"
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
