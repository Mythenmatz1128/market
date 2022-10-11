import { Layout, Menu } from "antd";
import LoginModal from "../login/LoginModal";
import { Link } from "react-router-dom";
import Title from "../main/Title";
function MainLayout() {
  const { Header, Content, Sider } = Layout;
  const style = {
    marginTop: "3rem",
    marginRight: "3rem",
  };
  return (
    <Layout>
      <div className="titlewithlogin">
        <div onClick={() => window.location.assign("/")}>
          <Title></Title>
        </div>

        <div className="login" style={style}>
          <LoginModal />
        </div>
      </div>

      <Header className="header">
        <div className="logo" />

        <Menu theme="dark" mode="horizontal">
          <Menu.Item key="1">
            <Link to="/first">
              <label> 시세</label>
            </Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="/shop-list">
              <label> 농산물 </label>
            </Link>
          </Menu.Item>
          <Menu.Item key="3">
            <Link to="/third">
              <label> 마이페이지 </label>
            </Link>
          </Menu.Item>
          <Menu.Item key="4">
            <Link to="/fourth">
              <label> 임시(상품등록) </label>
            </Link>
          </Menu.Item>
  
          <Menu.Item key="6">
            <Link to="/sixth">
              <label> 임시(상품수정) </label>
            </Link>
          </Menu.Item>
        </Menu>
      </Header>
    </Layout>
  );
}
export default MainLayout;
