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

import axios from "axios";
import { useEffect } from "react";
const { TextArea } = Input;

function ModifyWritng() {
  const [fileList, setFileList] = useState([]);
  const [sigList, setSigList] = useState([]);
  const [options, setOptions] = useState(null);
  const style = { margin: "2rem" };
  useEffect(() => {
    axios.get("/api/item-category").then((response) => {
      console.log(response.data.category);
      setOptions(response.data.category);
    });
  }, []);
  const onChange = (value) => {
    console.log(value);
    const id =value[value.length-1]
  };
  const onFinish = (values) => {
    if (fileList.length === 0 || fileList.length === 0) {
      alert("빈 공간이 있습니다");
      return;
    }
    const formData = new FormData();
    formData.append("id", 432);

    formData.append("price", 10000);
    formData.append("info", "values.설명");
    sigList.forEach((file) => {
      formData.append("sigImg", file);
    });
    fileList.forEach((file) => formData.append("img", file));
    for (let key of formData.keys()) {
      console.log(key, ":", formData.get(key));
    }

    axios
      .post("/api/products", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then((response) => console.log(response.data));
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Form
      id="1"
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
        <Cascader
          options={options}
      
          onChange={onChange}
          fieldNames={{
            label: "name",
            value: "id",

            children: "category",
          }}
        />
      </Form.Item>

      <Form.Item label="가격" price="가격">
        <InputNumber />
      </Form.Item>
      <Form.Item label="설명" info="설명">
        <TextArea rows={10} placeholder="maxLength is 6" maxLength={10} />
      </Form.Item>
      <Form.Item label="대표이미지" name="대표이미지" >
        <Upload
          beforeUpload={(file) => {
            setSigList(sigList.concat(file));
            return false; // 파일 선택시 바로 업로드 하지 않고 후에 한꺼번에 전송하기 위함
          }}
          maxCount="1"
          multiple={false}
          listType="picture-card"
          file={sigList}
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
      <Form.Item label="이미지" name="이미지">
        <Upload
          maxCount="5"
          multiple={true}
          beforeUpload={(file) => {
            setFileList(fileList.concat(file));
            return false; // 파일 선택시 바로 업로드 하지 않고 후에 한꺼번에 전송하기 위함
          }}
          listType="picture-card"
          fileList={fileList}
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
