import { AutoComplete, Col, Divider, Row } from "antd";
import React from "react";
import pic from "../../img/샤인머스켓.png";
import { NavLink } from "react-router-dom";
import { Space, Typography } from "antd";
const { Text, Link } = Typography;
const style = {
  padding: "8px 0",
  border: "0.5px solid green",
  textAlign: "center",
};
const imgStyle = {
  width: "200px",
  height: "220px",
};

const productNum = ["0001", "0002", "0003", "3", "4", "5", "6", "7"];
const productAddress = [];
productNum.map((value, i) => {
  productAddress[i] = "shop-detail/" + value;
});
const Grid = () => (
  <>
    <Divider orientation="left"></Divider>
    <Row gutter={[16, 24]}>
      <Col className="gutter-row" span={6}>
        <div className="main-flex-item" style={style}>
          <NavLink to={productAddress[0]} alt="profile">
            <img style={imgStyle} src={pic} />
          </NavLink>
          <Text type="success">샤인머스켓: 2000원</Text>
        </div>
      </Col>
      <Col className="gutter-row" span={6}>
        <div className="main-flex-item" style={style}>
          <NavLink to={productAddress[1]} alt="profile">
            <img style={imgStyle} src={pic} />
          </NavLink>
          <Text type="success">샤인머스켓: 2000원</Text>
        </div>
      </Col>{" "}
      <Col className="gutter-row" span={6}>
        <div className="main-flex-item" style={style}>
          <NavLink to={productAddress[2]} alt="profile">
            <img style={imgStyle} src={pic} />
          </NavLink>
          <Text type="success">샤인머스켓: 2000원</Text>
        </div>
      </Col>{" "}
      <Col className="gutter-row" span={6}>
        <div className="main-flex-item" style={style}>
          <NavLink to={productAddress[3]} alt="profile">
            <img style={imgStyle} src={pic} />
          </NavLink>
          <Text type="success">샤인머스켓: 2000원</Text>
        </div>
      </Col>{" "}
      <Col className="gutter-row" span={6}>
        <div className="main-flex-item" style={style}>
          <NavLink to={productAddress[4]} alt="profile">
            <img style={imgStyle} src={pic} />
          </NavLink>
          <Text type="success">샤인머스켓: 2000원</Text>
        </div>
      </Col>{" "}
      <Col className="gutter-row" span={6}>
        <div className="main-flex-item" style={style}>
          <NavLink to={productAddress[5]} alt="profile">
            <img style={imgStyle} src={pic} />
          </NavLink>
          <Text type="success">샤인머스켓: 2000원</Text>
        </div>
      </Col>{" "}
      <Col className="gutter-row" span={6}>
        <div className="main-flex-item" style={style}>
          <NavLink to={productAddress[6]} alt="profile">
            <img style={imgStyle} src={pic} />
          </NavLink>
          <Text type="success">샤인머스켓: 2000원</Text>
        </div>
      </Col>{" "}
      <Col className="gutter-row" span={6}>
        <div className="main-flex-item" style={style}>
          <NavLink to={productAddress[7]} alt="profile">
            <img style={imgStyle} src={pic} />
          </NavLink>
          <Text type="success">샤인머스켓: 2000원</Text>
        </div>
      </Col>
    </Row >
  </>
);

export default Grid;
