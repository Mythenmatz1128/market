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
import ShopCascader from "../shop-list/ShopCascader";
const { Title } = Typography;
const { RangePicker } = DatePicker;
const { TextArea } = Input;

const CreateWriting = () => {
  const style = {margin :"2rem"}
  return (
    <>
      <Form style={style}
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 14,
        }}
        layout="horizontal"
      >
        <Form.Item label="품목">
          <ShopCascader></ShopCascader>
        </Form.Item>
        <Form.Item label="등급">
          <Select>
            <Select.Option value="A">A</Select.Option>
            <Select.Option value="B">B</Select.Option>
            <Select.Option value="C">C</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item label="가격">
          <InputNumber />
        </Form.Item>
        <Form.Item label="설명">
          <TextArea rows={10} placeholder="maxLength is 6" maxLength={10} />
        </Form.Item>
        <Form.Item label="대표이미지" valuePropName="fileList">
          <ImageUpload />
        </Form.Item>
        <Form.Item label="이미지" valuePropName="fileList">
          <Upload action="/upload.do" listType="picture-card">
            <div>
              <PlusOutlined />
              <div
                style={{
                  marginTop: 8,
                }}
              >
                상품이미지
              </div>
            </div>
          </Upload>
        </Form.Item>
        <Form.Item label="제출">
          <Button>글 등록</Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default () => <CreateWriting />;
