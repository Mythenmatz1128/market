import { Cascader } from "antd";
import React from "react";

const options = [
  {
    value: "과일",
    label: "과일",
    children: [
      {
        value: "포도",
        label: "포도",
        children: [
          {
            value: "샤인머스켓",
            label: "샤인머스켓",
          },
          {
            value: "거봉",
            label: "거봉",
          },
        ],
      },
    ],
  },
];

const onChange = (value) => {
  console.log(value);
}; // Just show the latest item.

const displayRender = (labels) => labels[labels.length - 1];

const ShopCascader = () => (
  <Cascader
    options={options}
    displayRender={displayRender}
    onChange={onChange}
  />
);

export default ShopCascader;
