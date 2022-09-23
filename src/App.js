import { Layout, Menu } from "antd";
import "antd/dist/antd.min.css";
import React, { useState } from "react";
import { BrowserRouter, Link, Route, Routes, NavLink } from "react-router-dom";
import "./App.css";
import Grid from "./components/main/Grid";
import MainCarousel from "./components/main/MainCarousel";
import DateChoice from "./components/main/DateChoice";
import Title from "./components/main/Title";
import Login from "./components/main/Login";
import Shop from "./components/shop-list/Shop";

function MainLayout() {
  const { Header, Content, Sider } = Layout;
  return (
    <Layout>
      <div className="titlewithlogin" onClick={() => window.location.reload()}>
        <NavLink to="">
          <Title></Title>
        </NavLink>
        <div className="login">
          <Login></Login>
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
            <div >
              <MainCarousel></MainCarousel>
              <Grid></Grid>
            </div>
          }
        ></Route>
        <Route path="/first" element={<DateChoice />}></Route>
        <Route path="/shop-list" element={<Shop />}></Route>
        <Route path="/third"></Route>
        <Route path="/shop-detail"></Route>
      </Routes>
    </BrowserRouter>
  );
}
//내가 보내봅니다.
export default App;
