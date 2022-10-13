import "antd/dist/antd.min.css";
import { LikeOutlined, MessageOutlined, StarOutlined } from "@ant-design/icons";
import { Button, Avatar, List, Space } from "antd";
import React, { useState, useEffect } from "react";
import ManagerMyPage from "./ManagerMyPage";
import { useParams } from 'react-router-dom';
import picture from "../../img/사업자_등록증_양식.jpg";

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
  marginTop: "5%",
  float: "right",
  marginLeft: "10px",
};

const style3 = {
  paddingBottom: "20%",
};

const imgStyle = {
  marginTop: "5%",
  display: "table",
  marginLeft: "auto",
  marginRight: "auto",
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
  businessID: arrDataFromDB[i].businessID,
  businessNum: arrDataFromDB[i].businessNum,
  businessName: arrDataFromDB[i].businessName,
  status: arrDataFromDB[i].status,
  createdDate: arrDataFromDB[i].createdDate,
  changeDate: arrDataFromDB[i].changeDate,
  userID: arrDataFromDB[i].userID,
}));

const BusinessDefault = () => {
  const { businessId } = useParams();
  let [num, setNum] = useState(0);

  useEffect(() => {
    for (let i = 0; i < size; i++) {
      const tempId = arrDataFromDB[i].businessID;
      if (businessId == tempId) {
        setNum(i);
        break;
      }
    }
  }, []);

    return (
        <>
            <ManagerMyPage></ManagerMyPage>
            <div className="list-box" style={style0}>
              <div className="business-detail" style={style1}>사업자 신청 내역서</div>
              <table>
                  <thead>
                    <tr>
                      <th class="pin"> </th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th>사업자 번호</th>
                      <td>{arrDataFromDB[num].businessNum}</td>
                    </tr>
                    <tr>
                      <th>상호명</th>
                      <td>{arrDataFromDB[num].businessName}</td>
                    </tr>
                    <tr>
                      <th>신청 날짜</th>
                      <td>{arrDataFromDB[num].createdDate}</td>
                    </tr>
                    <tr>
                      <th>회원 아이디</th>
                      <td>{arrDataFromDB[num].userID}</td>
                    </tr>
                  </tbody>
              </table>
              <img style={imgStyle} src={picture} />
              <Button className="button1" type="primary" style={style2}>
                승인
              </Button>
              <Button className="button2" type="primary" style={style2}>
                거부
              </Button>
              <div className="padding" style={style3}></div>
            </div>
        </>
    );
}
export default BusinessDefault;
