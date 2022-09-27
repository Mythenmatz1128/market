import "./Table.css";
import "antd/dist/antd.min.css";
import { LikeOutlined, MessageOutlined, StarOutlined } from "@ant-design/icons";
import { Button, Space, Table, Tag } from 'antd';
import React, { useState } from "react";
import { BrowserRouter, Link, Route, Routes, NavLink } from "react-router-dom";
import BuyerMyPage from "../buyerMyPage/BuyerMyPage";
import MemberEdit from "../buyerMyPage/MemberEdit";

const size = 4;

const style0 = {
  marginLeft: "20%",
  marginRight: "20%",
  //textAlign : "center",
  borderTop: "2px solid",
};

const style1 = {
  marginTop: "5%",
  marginBottom: "5%",
  fontSize: "25px",
  fontWeight: "700",
};

const style2 = {
  marginTop: "5%",
  float: "right",
};

const style3 = {
  paddingBottom: "20%",
};

const DataFromDB = {
    userID: null,
    name: null,
    loginID: null,
    password: null,
    age: null,
    eMail: null,
    phoneNum: null,
    jibun: null,
    road: null,
    zipCode: null,
    detailAddress: null,
};

const arrDataFromDB = [{ DataFromDB }];

arrDataFromDB[0] = {
  userID: "1",
  name: "강대현",
  loginID: "rkdeogus1128",
  password: "kj961128",
  age: "27",
  eMail: "tbqkdlcj1128@naver.com",
  phoneNum: "010-6415-6940",
  jibun: "어쩌구",
  road: "저쩌구",
  zipCode: "얄리얄리얄랴셩",
  detailAddress: "알아서뭐하게",
};
  
  const IconText = ({ icon, text }) => (
    <Space>
      {React.createElement(icon)}
      {text}
    </Space>
  );

function MemberInquiry(){
    return (
        <div>
            <BuyerMyPage></BuyerMyPage>
            <div className="list-box"style={style0}>
              <div className="business-detail" style={style1}>회원 상세 정보</div>
                <table>
                  <thead>
                    <tr>
                      <th class="pin"> </th>
                      <th></th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr>
                      <th>이름</th>
                      <td>{arrDataFromDB[0].name}</td>
                    </tr>
                    <tr>
                      <th>ID</th>
                      <td>{arrDataFromDB[0].loginID}</td>
                    </tr>
                    <tr>
                      <th>비밀 번호</th>
                      <td>{arrDataFromDB[0].password}</td>
                    </tr>
                    <tr>
                      <th>나이</th>
                      <td>{arrDataFromDB[0].age}</td>
                    </tr>
                    <tr>
                      <th>e-mail</th>
                      <td>{arrDataFromDB[0].eMail}</td>
                    </tr>
                    <tr>
                      <th>전화 번호</th>
                      <td>{arrDataFromDB[0].phoneNum}</td>
                    </tr>
                    <tr>
                      <th>지번</th>
                      <td>{arrDataFromDB[0].jibun}</td>
                    </tr>
                    <tr>
                      <th>도로</th>
                      <td>{arrDataFromDB[0].road}</td>
                    </tr>
                    <tr>
                      <th>우편번호</th>
                      <td>{arrDataFromDB[0].zipCode}</td>
                    </tr>
                    <tr>
                      <th>상세주소</th>
                      <td>{arrDataFromDB[0].detailAddress}</td>
                    </tr>
                  </tbody>
              </table>
              <Link to="/third/first/memberEidt">
                <Button className="button1" type="primary" style={style2} onClick={MemberEdit}>
                  회원 정보 수정
                </Button>
              </Link>  
              <div className="padding" style={style3}></div>
            </div>
          </div>
    );
}
export default MemberInquiry;