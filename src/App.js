import { Layout, Menu, Button } from "antd";
import "antd/dist/antd.min.css";
import React, { useState } from "react";
import { BrowserRouter, Link, Route, Routes, NavLink } from "react-router-dom";
import "./App.css";
import Grid from "./components/main/Grid";
import MainCarousel from "./components/main/MainCarousel";
import DateChoice from "./components/main/DateChoice";
import Title from "./components/main/Title";
import Login from "./components/login/Login";
import ManagerMyPage from "./components/managerMyPage/ManagerMyPage";
import BusinessApplicationInquiry from "./components/managerMyPage/BusinessApplicationInquiry";
import Shop from "./components/shop-list/Shop";
import LoginModal from "./components/login/LoginModal";
function MainLayout() {
  const { Header, Content, Sider } = Layout;
  const style = {
    marginTop: "3rem",
    marginRight: "3rem",
  };
  return (
    <Layout>
      <div className="titlewithlogin">
        <NavLink to="">
          <Title onClick={() => window.location.reload()}></Title>
        </NavLink>
        <div className="login" style={style}>
          <LoginModal />
        </div>
      </div>

      <Header className="header">
        <div className="logo" />

        <Menu theme="dark" mode="horizontal">
          <Menu.Item key="1">
            <Link to="/first">
              <label> 시세</label>
            </Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="/shop-list">
              <label> 농산물 </label>
            </Link>
          </Menu.Item>
          <Menu.Item key="3">
            <Link to="/third">
              <label> 마이페이지 </label>
            </Link>
          </Menu.Item>
        </Menu>
      </Header>
    </Layout>
  );
}
function App() {
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
        <Route path="/shop-list" element={<Shop />}></Route>
        <Route path="/third" element={<ManagerMyPage />}></Route>
        <Route path="/third/first" element={<BusinessApplicationInquiry />}></Route>
        <Route path="/shop-detail"></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
