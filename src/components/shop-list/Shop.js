import { AudioOutlined } from "@ant-design/icons";
import { Input, Space } from "antd";
import React from "react";
import ShopList from "./ShopList";
import ShopCascader from "./ShopCascader";
import ShopSelect from "./ShopSelect";
const { Search } = Input;
const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: "#1890ff",
    }}
  />
);
const CasStyle = {
  marginTop: "2rem",
  marginLeft: "2rem",
};
const style = {
  marginTop: "2rem",
  marginRight: "2rem",
  textAlign: "right",
};



const onSearch = (value) => console.log(value);

const Shop = (props) => (
  <div>
    <div style={CasStyle}>
      <ShopCascader />
      <ShopSelect></ShopSelect>
    </div>
    
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

    <ShopList test={props.test} ></ShopList>
  </div>
);

export default Shop;
