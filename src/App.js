import { Layout, Menu,Spin } from "antd";
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
import BusinessDefault from "./components/managerMyPage/BusinessDefault";
import Shop from "./components/shop-list/Shop";
import LoginModal from "./components/login/LoginModal";
import CreateWriting from "./components/writing/CreateWriting";
import OrderModal from "./components/order/OrderModal";
import BusinessAcception from "./components/managerMyPage/BusinessAcception";
import BusinessRejection from "./components/managerMyPage/BusinessRejection";
import MarketCondition from "./components/marketCondition/MarketCondition";
import DailyPriceInquiry from "./components/marketCondition/DailyPriceInquiry";
import MonthlyPriceInquiry from "./components/marketCondition/MonthlyPriceInquiry";
import YearlyPriceInquiry from "./components/marketCondition/YearlyPriceInquiry";
import ModifyWritng from "./components/writing/ModifyWriting";
import ShopContent from "./components/shop-detail/ShopContent";
import MainContent from "./components/main/MainContent";



function App() {
  
 
  return (
 
    <BrowserRouter>
      <MainLayout></MainLayout>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <MainContent/>
            </div>
          }
        ></Route>
        <Route path="/marketCondition" element={<MarketCondition />}></Route>
        <Route path="/marketCondition/DailyPriceInquiry" element={<DailyPriceInquiry />}></Route>
        <Route path="/marketCondition/MonthlyPriceInquiry" element={<MonthlyPriceInquiry />}></Route>
        <Route path="/marketCondition/YearlyPriceInquiry" element={<YearlyPriceInquiry />}></Route>
        <Route
          path="/shop-list"
          element={<Shop  />}
        ></Route>
        {/*---관리자 마이 페이지--- */}
        <Route path="/ManagerMyPage" element={<ManagerMyPage />}></Route>
        <Route
          path="/ManagerMyPage/first"
          element={<BusinessApplicationInquiry />}
        ></Route>
        <Route
          path="/ManagerMyPage/first/business-detail/:businessId"
          element={<BusinessDefault />}
        ></Route>
        <Route
          path="/ManagerMyPage/second"
          element={<BusinessAcceptionInquiry />}
        ></Route>
        <Route
          path="/ManagerMyPage/second/business-detail/:businessId"
          element={<BusinessAcception />}
        ></Route>
        <Route
          path="/ManagerMyPage/third"
          element={<BusinessRejectionInquiry />}
        ></Route>
        <Route
          path="/ManagerMyPage/third/business-detail/:businessId"
          element={<BusinessRejection />}
        ></Route>
        {/*---구매자 마이 페이지--- */}
        <Route path="/BuyerMyPage" element={<BuyerMyPage />}></Route>
        <Route path="/BuyerMyPage/first" element={<MemberInquiry />}></Route>
        <Route path="/BuyerMyPage/first/memberEidt" element={<MemberEdit />}></Route>
        {/*---판매자 마이 페이지--- */}

        <Route
          path="/shop-list/shop-detail/:productNum"
          element={<ShopContent></ShopContent>}
        />
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
              <ModifyWritng />
            </div>
          }
        ></Route>
      </Routes>
    </BrowserRouter>

  );
}
export default App;
