import { Layout, Menu } from "antd";
import { PageHeader } from "antd";
import "antd/dist/antd.min.css";
import pic from "../../img/회원.jpg"
import React, { useState } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";


const style0 = {
    marginLeft: "20%",
    marginRight: "20%",
};
const style1 = {
    borderBottom: "2px solid",
    backgroundColor: "white",
};
const style2 = {
    display: "flex",
    marginTop: "30px",
    marginBottom: "60px",
};
const style3 = {
    height:'120px',
    flexDirection: "column",
};
const style4 = {
    display: "flex",
    lineHeight: "90px",
    marginLeft: "40px",
    fontSize: "25px",
    fontWeight: "700",
};
const imgStyle ={
    marginLeft: "60px",
    width:'100px',
    height:'120px',
};
const style5 = {
    position:"relative",
    marginLeft: "40px",
};
const style6 = {
    position:"absolute",
};
const style7 = {
    position:"absolute",
    left:"50%",
};
const style8 = {
    marginLeft: "40px",
};
const style9 = {
    marginTop: "20px",
    marginBottom: "20px",
};
const style10 = {
    fontSize: "40px",
};


function ManageMyPage(){
    return (
        <Layout className="total-box"style={style0}>
            <div className="title"style={style1}>
                <PageHeader className="site-page-header" title="마이 페이지" />
            </div>

            <div className='guest-info-box' style={style2}><img style={imgStyle} src={pic}/>
                <div className='guest-info' style={style3}> 
                    <span className = "guest-text" style={style4}>
                        안녕하세요 회원님.
                    </span>
                    <div className='button-box' style={style5}> 
                        <button class="button1" type="button" style={style6}>
                            로그아웃
                        </button>
                        <button class="button2" type="button" style={style7}>
                            회원탈퇴
                        </button>
                    </div>
                </div> 
            </div>

            <div className = "manage-mypage-title-box" style={style1}>
                <PageHeader className="manage-mypage-title" title="관리자 마이 페이지" />
            </div>

            <div className = "manage-mypage-menu-box" style={style8}>
                <Menu>
                    <Menu.Item key="1"style={style9}>
                        <Link to="/third/first">
                            <label style={style10}> 사업자 신청 조회</label>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="2"style={style9}>
                        <Link to="/third/second">
                            <label style={style10}> 사업자 신청 승인 내역 </label>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="3"style={style9}>
                        <Link to="/third/third">
                            <label style={style10}> 사업자 신청 거부 내역 </label>
                        </Link>
                    </Menu.Item>
                </Menu>
            </div>
        </Layout>
    );
}


export default ManageMyPage;