import { Layout, Menu } from "antd";
import { PageHeader } from "antd";
import "antd/dist/antd.min.css";
import { LikeOutlined, MessageOutlined, StarOutlined } from "@ant-design/icons";
import { Avatar, List, Space } from "antd";
import React, { useState } from "react";
import { BrowserRouter, Link, Route, Routes, NavLink } from "react-router-dom";
import ManagerMyPage from "./ManagerMyPage";

const size = 4;

const style0 = {
    marginLeft: "20%",
    marginRight: "20%",
    borderTop: "2px solid",
};

const style1 = {
  paddingTop: "5%",
  paddingBottom: "5%",
  fontSize: "25px",
  fontWeight: "700",
  color: "black",
};

const style2 = {
    fontSize: "25px",
    fontWeight: "500",
};

const style3 = {
    fontSize: "20px",
    fontWeight: "500",
};

const DataFromDB = {
    businessID: null,
    businessNum: null,
    businessName: null,
    status: null,
    createdDate: null,
    changeDate: null,
    userID: null,
};

const arrDataFromDB = [{ DataFromDB }];

arrDataFromDB[0] = {
    businessID: "0001",
    businessNum: "20180004",
    businessName: "대현상회",
    status: "wait",
    createdDate: "2019-11-13",
    changeDate: "2019-11-13",
    userID: "강대현",
  };
  arrDataFromDB[1] = {
    businessID: "0002",
    businessNum: "20180584",
    businessName: "호창상회",
    status: "wait",
    createdDate: "2019-11-13",
    changeDate: "2019-11-13",
    userID: "성호창",
  };
  arrDataFromDB[2] = {
    businessID: "0003",
    businessNum: "20180333",
    businessName: "현민상회",
    status: "wait",
    createdDate: "2019-11-13",
    changeDate: "2019-11-13",
    userID: "김현민",
  };
  arrDataFromDB[3] = {
    businessID: "0004",
    businessNum: "20180012",
    businessName: "병관상회",
    status: "wait",
    createdDate: "2019-11-13",
    changeDate: "2019-11-13",
    userID: "강병관",
  };
  
  const data = Array.from({
    length: size,
  }).map((_, i) => ({
    number: i,
    href: "business-detail/" + arrDataFromDB[i].businessID,
    businessNum: arrDataFromDB[i].businessNum,
    avatar: "https://joeschmoe.io/api/v1/random",
    businessName: arrDataFromDB[i].businessName,
    status: arrDataFromDB[i].status,
    createdDate: arrDataFromDB[i].createdDate,
    changeDate: arrDataFromDB[i].changeDate,
    userID: arrDataFromDB[i].userID,
  }));
  
  const IconText = ({ icon, text }) => (
    <Space>
      {React.createElement(icon)}
      {text}
    </Space>
  );

function BusinessAcceptionInquiry(){
    return (
        <div>
            <ManagerMyPage></ManagerMyPage>
            <div className="list-box"style={style0}>
              <div className="business-detail" style={style1}>사업자 신청 승인 내역서</div>
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
                        <List.Item>
                            <List.Item.Meta
                            avatar={<Avatar src={item.avatar} />}
                            title={<Link to={item.href} style = {style2}>{item.userID}</Link>}
                            description={<span style = {style3}>{item.businessName}</span>}
                            />
                            {item.businessNum}
                        </List.Item>
                    )}
                />
            </div>
        </div>
    );
}
export default BusinessAcceptionInquiry;