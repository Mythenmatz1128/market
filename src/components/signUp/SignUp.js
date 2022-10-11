import { Button, Checkbox, Form, Input } from "antd";
import Address from "../order/Address";
import { useState } from "react";
function SignUp() {
  const style = {
    display: "flex",
    flexDirection: "column",

    width: "100%",
    flexWrap: "wrap",
    alignItems: "left",
  };
  const btnStyle = {
    marginTop: "1rem",
    
  };
  const onFinish = (values) => {
    return <div>회원가입 완료</div>;
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const [address, setAddress] = useState(null); // 주소
  const [zipCode, setZipCode] = useState(null);

  return (
    <Form
      name="basic"
      style={style}
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      className="loginform"
    >
      <div>
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="id"
          name="id"
          rules={[{ required: true, message: "Please input your Id!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          label="age"
          name="age"
          rules={[{ required: true, message: "Please input your age!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="email"
          name="email"
          rules={[{ required: true, message: "Please input your email!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="phone"
          name="phone"
          rules={[{ required: true, message: "Please input your phone" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="address"
          rules={[{ required: true, message: "Please input your address!" }]}
        >
          <Input value={address} readOnly />
        </Form.Item>
        <Form.Item
          label="detailAddress"
          name="detailAddress"
          rules={[
            { required: true, message: "Please input your detailAddress!" },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="zipCode"
          rules={[{ required: true, message: "Please input your zipCode!" }]}
        >
          <Input value={zipCode} readOnly />
        </Form.Item>
        <Address setAddress={setAddress} setZipCode={setZipCode} />
        <Form.Item style={btnStyle}>
          <Button
            type="primary"
            htmlType="submit"
            onClick={() => {
              window.alert("회원가입 성공");
            }}
          >
            회원가입
          </Button>
        </Form.Item>
      </div>
    </Form>
  );
}
export default SignUp;
