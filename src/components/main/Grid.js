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

const Grid = () => (
  <>
    <Divider orientation="left"></Divider>
    <Row gutter={[16, 24]}>
      <Col className="gutter-row" span={6}>
        <div className="main-flex-item" style={style}>
          <NavLink to="/shop-detail" alt="profile">
            <img style={imgStyle} src={pic} />
          </NavLink>
          <Text type="success">샤인머스켓: 2000원</Text>
        </div>
      </Col>
      <Col className="gutter-row" span={6}>
        <div className="main-flex-item" style={style}>
          <NavLink to="/shop-detail" alt="profile">
            <img style={imgStyle} src={pic} />
          </NavLink>
          <Text type="success">샤인머스켓: 2000원</Text>
        </div>
      </Col>{" "}
      <Col className="gutter-row" span={6}>
        <div className="main-flex-item" style={style}>
          <NavLink to="/shop-detail" alt="profile">
            <img style={imgStyle} src={pic} />
          </NavLink>
          <Text type="success">샤인머스켓: 2000원</Text>
        </div>
      </Col>{" "}
      <Col className="gutter-row" span={6}>
        <div className="main-flex-item" style={style}>
          <NavLink to="/shop-detail" alt="profile">
            <img style={imgStyle} src={pic} />
          </NavLink>
          <Text type="success">샤인머스켓: 2000원</Text>
        </div>
      </Col>{" "}
      <Col className="gutter-row" span={6}>
        <div className="main-flex-item" style={style}>
          <NavLink to="/shop-detail" alt="profile">
            <img style={imgStyle} src={pic} />
          </NavLink>
          <Text type="success">샤인머스켓: 2000원</Text>
        </div>
      </Col>{" "}
      <Col className="gutter-row" span={6}>
        <div className="main-flex-item" style={style}>
          <NavLink to="/shop-detail" alt="profile">
            <img style={imgStyle} src={pic} />
          </NavLink>
          <Text type="success">샤인머스켓: 2000원</Text>
        </div>
      </Col>{" "}
      <Col className="gutter-row" span={6}>
        <div className="main-flex-item" style={style}>
          <NavLink to="/shop-detail" alt="profile">
            <img style={imgStyle} src={pic} />
          </NavLink>
          <Text type="success">샤인머스켓: 2000원</Text>
        </div>
      </Col>{" "}
      <Col className="gutter-row" span={6}>
        <div className="main-flex-item" style={style}>
          <NavLink to="/shop-detail" alt="profile">
            <img style={imgStyle} src={pic} />
          </NavLink>
          <Text type="success">샤인머스켓: 2000원</Text>
        </div>
      </Col>
    </Row>
  </>
);

export default Grid;
