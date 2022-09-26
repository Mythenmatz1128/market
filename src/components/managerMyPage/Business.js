import "antd/dist/antd.min.css";
import { LikeOutlined, MessageOutlined, StarOutlined } from "@ant-design/icons";
import { Avatar, List, Space } from "antd";
import React, { useState, useEffect } from "react";
import ManagerMyPage from "../../components/managerMyPage/ManagerMyPage";
import { useParams } from "react-router-dom";

const size = 4;

const style0 = {
  marginLeft: "20%",
  marginRight: "20%",
  borderTop: "2px solid",
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

const Business = () => {
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
        <h3>{businessId}번 상품 페이지 입니다.</h3>
        <span>{arrDataFromDB[num].businessID}</span>
      </div>
    </>
  );
};
export default Business;
