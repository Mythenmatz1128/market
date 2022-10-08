import { Layout, Menu } from "antd";
import "antd/dist/antd.min.css";
import React, { useState } from "react";
import { BrowserRouter, Link, Route, Routes, NavLink } from "react-router-dom";
import "./App.css";
import Grid from "./components/main/Grid";
import MainCarousel from "./components/main/MainCarousel";
import DateChoice from "./components/main/DateChoice";
import MainLayout from "./components/main/MainLayout";

import ManagerMyPage from "./components/managerMyPage/ManagerMyPage";
import BuyerMyPage from "./components/buyerMyPage/BuyerMyPage";
import BusinessApplicationInquiry from "./components/managerMyPage/BusinessApplicationInquiry";
import BusinessAcceptionInquiry from "./components/managerMyPage/BusinessAcceptionInquiry";
import BusinessRejectionInquiry from "./components/managerMyPage/BusinessRejectionInquiry";
import MemberInquiry from "./components/buyerMyPage/MemberInquiry";
import MemberEdit from "./components/buyerMyPage/MemberEdit";
import Business from "./components/managerMyPage/Business";
import Shop from "./components/shop-list/Shop";
import LoginModal from "./components/login/LoginModal";
import CreateWriting from "./components/writing/CreateWriting";
import OrderModal from "./components/order/OrderModal";
import ModifyWriting from "./components/writing/ModifyWriting";
import { Content } from "antd/lib/layout/layout";
import ShopContent from "./components/shop-detail/ShopContent";

function App() {
  const DataFromDB = {
    productNum: null,
    title: null,
    description: null,
    sellor: null,
    basket: null,
    score: null,
    price: null,
    grade: null,
  };
  const arrDataFromDB = [{ DataFromDB }];

  arrDataFromDB[0] = {
    productNum: "0001",
    title: "싱싱한 사과",
    description: "이사과는 뉴턴의 사과입니다",
    price: "300원",
    sellor: "강대현",
    basket: 14,
    score: 9.7,
    grade: "상"
  };
  arrDataFromDB[1] = {
    productNum: "0002",
    title: "싱싱한 포도",
    description: "이포도는 18브릭스 입니다",
    price: "3000원",
    sellor: "강병관",
    basket: 15,
    score: 9.8,
    grade: "상"
  };
  arrDataFromDB[2] = {
    productNum: "0003",
    title: "싱싱한 바나나",
    description: "원숭이가 떨어트린 바나나",
    price: "30000원",
    sellor: "성호창",
    basket: 16,
    score: 9.9,
    grade: "상"
  };

  return (
    <BrowserRouter>
      <MainLayout></MainLayout>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <MainCarousel></MainCarousel>
              <Grid></Grid>
            </div>
          }
        ></Route>
        <Route path="/first" element={<DateChoice />}></Route>
        <Route
          path="/shop-list"
          element={<Shop test={arrDataFromDB} />}
        ></Route>
        <Route path="/third" element={<ManagerMyPage />}></Route>
        {/* <Route path="/third" element={<BuyerMyPage />}></Route> */}
        <Route
          path="/third/first"
          element={<BusinessApplicationInquiry />}
        ></Route>
        <Route
          path="/third/second"
          element={<BusinessAcceptionInquiry />}
        ></Route>
        <Route
          path="/third/third"
          element={<BusinessRejectionInquiry />}
        ></Route>
        {/* <Route path="/third/first" element={<MemberInquiry />}></Route> */}
        <Route path="/third/first/memberEidt" element={<MemberEdit />}></Route>
        <Route
          path="/shop-detail/:id"
          element={<ShopContent test={arrDataFromDB}></ShopContent>}
        ></Route>
        <Route
          path="/third/first/business-detail/:businessId"
          element={<Business />}
        ></Route>
        <Route
          path="/fourth"
          element={
            <div>
              <CreateWriting />
            </div>
          }
        ></Route>
 
        <Route
          path="/sixth"
          element={
            <div>
              <ModifyWriting />
            </div>
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
