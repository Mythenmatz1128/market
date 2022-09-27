import { Button, Checkbox, Form, Input } from "antd";

function SignUp() {
  const style = {
    display: "flex",
    margin: "3rem",
    width: "100%",
    textAlign: "center",
  };
  const btnStyle = {
    margin: "2rem",
  };
  const onFinish = (values) => {
    return <div>회원가입 완료</div>;
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

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
          rules={[
            { required: true, message: "Please input your phone" },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button
            style={btnStyle}
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
