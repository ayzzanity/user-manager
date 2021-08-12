import { Layout, Menu, Typography } from "antd";
import { Link } from "react-router-dom";
import {
  HomeOutlined,
  UserOutlined,
  LaptopOutlined,
  AntDesignOutlined,
} from "@ant-design/icons";
const SideBar = () => {
  const { Sider } = Layout;
  const { Title } = Typography;
  return (
    <Sider width={200} height={800} className="site-layout-background">
      <div className="logo">
        <Title level={3} style={{ color: "white" }}>
          <AntDesignOutlined /> Ant Design
        </Title>
      </div>
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["2"]}
        style={{ height: "100%", borderRight: 0 }}
      >
        <Menu.Item key="1" icon={<HomeOutlined />}>
          <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item key="2" icon={<UserOutlined />}>
          <Link to="/users">View Users</Link>
        </Menu.Item>
        <Menu.Item key="3" icon={<LaptopOutlined />}>
          <Link to="/about">About</Link>
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default SideBar;
