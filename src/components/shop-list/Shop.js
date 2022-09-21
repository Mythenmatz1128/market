import { AudioOutlined } from "@ant-design/icons";
import { Input, Space } from "antd";
import React from "react";
import ShopList from "./ShopList";

const { Search } = Input;
const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: "#1890ff",
    }}
  />
);
const style = {
  marginTop: "2rem",
  marginRight: "2rem",
  textAlign: "right",
};
const onSearch = (value) => console.log(value);

const Shop = () => (
  <div>
    <div style={style}>
      <Space direction="vertical">
        <Search
          placeholder="input search text"
          allowClear
          enterButton="Search"
          size="large"
          onSearch={onSearch}
        />
      </Space>
    </div>
    <ShopList>
      
    </ShopList>
  </div>
);

export default Shop;
