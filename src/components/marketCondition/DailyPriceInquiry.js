import React, { useState } from "react";
import { PlusOutlined } from "@ant-design/icons";
import {
  PageHeader,
  Form,
  Input,
  Button,
  Radio,
  Select,
  Cascader,
  DatePicker,
  InputNumber,
  TreeSelect,
  Switch,
  Checkbox,
  Upload,
} from "antd";
import { BrowserRouter, Link, Route, Routes, NavLink } from "react-router-dom";
import Chart from 'chart.js/auto';
import MarketCondition from "./MarketCondition";
import ShopCascader from "../shop-list/ShopCascader";
import DateChoice from "../main/DateChoice";
import LineGraph from "./LineGraph"

const style0 = {
    marginLeft: "20%",
    marginRight: "20%",
};
const style1 = {
    borderBottom: "2px solid",
    backgroundColor: "white",
};
const style2 = {
    margin :"2rem"
};
const style3 = {
    marginLeft: "20%",
    paddingBottom: "3%",
};
const style4 = {
    marginTop: "5%",
    float: "right",
    marginLeft: "10px",
};
const style5 = {
    paddingBottom: "20%",
};

function DailyPriceInquiry(){
    const [data1, setData1] = useState([]);
    const [data2, setData2] = useState([]);
    const [date, setDate] = useState([]);
    const [options, setOptions] = useState([]);
    const status1 = "일간-소매"; 
    const status2 = "일간-도매"; 

    function setDatas(){
        console.log(options);
        console.log(date);
        setData1([status1,options,date]);
        setData2([status2,options,date]);
    }

    return (      
        <div>
            <MarketCondition></MarketCondition>
            <div style={style0}>
                <div style={style1}>
                <PageHeader className="manage-mypage-title" title="일간 가격" />       
                </div>
                <Form style={style2}
                    labelCol={{
                    span: 4,
                    }}
                    wrapperCol={{
                    span: 14,
                    }}
                    layout="horizontal"
                >
                    <Form.Item label="품목">
                    <ShopCascader setOptions = {setOptions}></ShopCascader>
                    </Form.Item>
                    <Form.Item label="등급">
                    <Select>
                        <Select.Option value="A">A</Select.Option>
                        <Select.Option value="B">B</Select.Option>
                        <Select.Option value="C">C</Select.Option>
                    </Select>
                    </Form.Item>
                </Form>
                <div style = {style3}>
                    <DateChoice setDate = {setDate}></DateChoice>
                    <Button className="button1" type="primary" style={style4} onClick={setDatas}>
                        조회
                    </Button>
                </div>
                <LineGraph data = {data1}></LineGraph>
                <LineGraph data = {data2}></LineGraph>
            </div>
            <div className="padding" style={style5}></div>
        </div>
    );
}
export default DailyPriceInquiry;