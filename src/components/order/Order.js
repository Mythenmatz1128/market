import { Button, Form, Input, InputNumber } from "antd";
import Address from "./Address";
import React, { useEffect, useState } from "react";

function Order() {
  const [address, setAddress] = useState(null); // 주소
  const [zipCode, setZipCode] = useState(null);
  const [price, setPrice] = useState(1000);
  const [totalPrice, setTotalPrice] = useState();
  const style = {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    justifyContent: "center",
    flexWrap: "wrap",
    alignItems: "left",
  };

  const onFinish = (values) => {
    console.log(
      "successed:",
      values.count,
      "\n address:",
      address,
      "\n totalPrice ",
      totalPrice
    );
  };

  const onValuesChange = (values) => {
    if (values.count) setTotalPrice(values.count * price);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <>
      <Form
        name="basic"
        style={style}
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        onValuesChange={onValuesChange}
      >
        <Form.Item
          label="totalPrice"
          rules={[{ required: true, message: "Please input your count!" }]}
        >
          <Input value={totalPrice} readOnly />
        </Form.Item>
        <Form.Item
          label="count"
          name="count"
          initialValue={1}
          rules={[{ required: true, message: "Please input your count!" }]}
        >
          <InputNumber min={1} />
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
        <Form.Item wrapperCol={{ offset: 10, span: 16 }}>
          <Button
            type="primary"
            htmlType="submit"
            onClick={() => {
              if (address) {
                window.alert("결제성공");
              }
            }}
          >
            결제하기
          </Button>
        </Form.Item>
      </Form>
    </>
  );
}
export default Order;
