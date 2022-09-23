import { Layout, Menu } from "antd";
import { PageHeader } from "antd";
import "antd/dist/antd.min.css";
import pic from "../../img/회원.jpg"
import React, { useState } from "react";
import { BrowserRouter, Link, Route, Routes, NavLink } from "react-router-dom";
import ManagerMyPage from "../../components/managerMyPage/ManagerMyPage";

function BusinessApplicationInquiry(){
    return (
        <div>
            <ManagerMyPage></ManagerMyPage>
        </div>
    );
}
export default BusinessApplicationInquiry;