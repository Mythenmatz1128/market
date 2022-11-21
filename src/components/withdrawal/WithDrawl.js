import { Button, Checkbox, Form, Input } from "antd";

import { useState } from "react";

import axios from "axios";

function WithDrawl({ onCancel }) {
  const [address, setAddress] = useState(null); // 주소
  const [jibun, setJibun] = useState(null);
  const [zipCode, setZipCode] = useState(null);

  const style = {
    display: "flex",
    flexDirection: "column",

    width: "100%",
    flexWrap: "wrap",
    alignItems: "left",
  };
  const btnStyle = {
    textAlign:"Right"
  };
  const onFinish = (values) => {
    let object = new Object(values);
    const json = JSON.stringify(object);
    console.log(json);
    axios
      .delete("/api/user", json, {
        headers: { "Content-Type": "application/json" },
      })
      .then((response) => alert(response.data.result.msg))

      .catch((error) => alert(error.response.data.msg))
      .then(() => onCancel());
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Form
      name="basic"
      style={style}
      labelCol={{ span: 6 }}
      wrapperCol={{ span: 14 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      className="loginform"
    >
      <div>
        <Form.Item
          label="password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item style={btnStyle}>
          <Button type="primary" htmlType="submit">
            탈퇴하기
          </Button>
        </Form.Item>
      </div>
    </Form>
  );
}
export default WithDrawl;
