import React, { useState } from "react";
import "antd/dist/antd.min.css";
import "./Table.css";
import { Button, Space, Table, Tag } from 'antd';
import { BrowserRouter, Link, Route, Routes, NavLink } from "react-router-dom";
import BuyerMyPage from "../buyerMyPage/BuyerMyPage";

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

function MemberEdit(){
    return (
        <div>
            <BuyerMyPage></BuyerMyPage>
            <div className="list-box"style={style0}>
                <div className="business-detail" style={style1}>회원 정보 수정</div>
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
                      <td><input type = "text"></input></td>
                    </tr>
                    <tr>
                      <th>ID</th>
                      <td><input type = "text"></input></td>
                    </tr>
                    <tr>
                      <th>비밀 번호</th>
                      <td><input type = "password"></input></td>
                    </tr>
                    <tr>
                      <th>나이</th>
                      <td><input type = "number"></input></td>
                    </tr>
                    <tr>
                      <th>e-mail</th>
                      <td><input type = "email"></input></td>
                    </tr>
                    <tr>
                      <th>전화 번호</th>
                      <td><input type = "tel"></input></td>
                    </tr>
                    <tr>
                      <th>지번</th>
                      <td><input type = "text"></input></td>
                    </tr>
                    <tr>
                      <th>도로</th>
                      <td><input type = "text"></input></td>
                    </tr>
                    <tr>
                      <th>우편번호</th>
                      <td><input type = "text"></input></td>
                    </tr>
                    <tr>
                      <th>상세주소</th>
                      <td><input type = "text"></input></td>
                    </tr>
                  </tbody>
              </table>
              <Link to="/third/first">
                <Button className="button1" type="primary" style={style2} onClick={MemberEdit}>
                  수정
                </Button>
              </Link>  
              <div className="padding" style={style3}></div>
            </div>
        </div>
    );
}
export default MemberEdit;