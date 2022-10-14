import React, { useState } from "react";
import { PlusOutlined } from "@ant-design/icons";
import {
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
import ImageUpload from "./ImgaeUpload";
import { Typography } from "antd";
import ImgCrop from "antd-img-crop";
import axios from "axios";
const { Title } = Typography;
const { RangePicker } = DatePicker;
const { TextArea } = Input;
function ModifyWritng() {
  const onFinish = (values) => {
    const img=values.이미지
    delete values.이미지

    const sig=values.대표이미지
    delete values.대표이미지

    const json = JSON.stringify(values);
    const jsonImg = JSON.stringify(img);
    const jsonSig = JSON.stringify(sig);
    console.log(json);
    console.log(jsonImg);
    console.log(jsonSig);
    axios.post("http://localhost:3000/api/data", json, {
      headers: { "Content-Type": "application/json" },
    });
    axios.post("http://localhost:3000/api/imgdata", jsonImg, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    axios.post("http://localhost:3000/api/sigdata", jsonSig, {
      headers: { "Content-Type": "multipart/form-data" },
    });
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const options = [
    {
      value: "과일",
      label: "과일",
      children: [
        {
          value: "포도",
          label: "포도",
          children: [
            {
              value: "샤인머스켓",
              label: "샤인머스켓",
            },
            {
              value: "거봉",
              label: "거봉",
            },
          ],
        },
      ],
    },
  ];

  const style = { margin: "2rem" };
  return (
    <Form
      name="basic"
      style={style}
      labelCol={{
        span: 4,
      }}
      wrapperCol={{
        span: 14,
      }}
      layout="horizontal"
      autoComplete="off"
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      initialValues={{ 품목: "과일/포도/샤인머스켓" }}
    >
      <Form.Item label="품목" name="품목">
        <Cascader options={options} />
      </Form.Item>
      <Form.Item label="등급" name="등급">
        <Select>
          <Select.Option value="A">A</Select.Option>
          <Select.Option value="B">B</Select.Option>
          <Select.Option value="C">C</Select.Option>
        </Select>
      </Form.Item>

      <Form.Item label="가격" name="가격">
        <InputNumber />
      </Form.Item>
      <Form.Item label="설명" name="설명">
        <TextArea rows={10} placeholder="maxLength is 6" maxLength={10} />
      </Form.Item>
      <Form.Item label="대표이미지" name="대표이미지" valuePropName="filelist">
        <Upload maxCount="1" re beforeUpload="false" listType="picture-card">
          <div>
            <PlusOutlined />
            <div
              style={{
                marginTop: 8,
              }}
            >
              Upload
            </div>
          </div>
        </Upload>
      </Form.Item>
      <Form.Item label="이미지" name="이미지" valuePropName="filelist">
        <Upload
          maxCount="5"
          multiple={true}
          beforeUpload="false"
          listType="picture-card"
        >
          <div>
            <PlusOutlined />
            <div
              style={{
                marginTop: 8,
              }}
            >
              Upload
            </div>
          </div>
        </Upload>
      </Form.Item>
      <div>
        <Form.Item label="제출">
          <Button type="primary" htmlType="submit">
            글 등록
          </Button>
        </Form.Item>
      </div>
    </Form>
  );
}

export default ModifyWritng;
