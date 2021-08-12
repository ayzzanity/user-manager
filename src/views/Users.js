import { Layout, Typography } from "antd";
import AddUser from "../components/AddUser";
import TableView from "../components/TableView";
import UserInfo from "../components/UserInfo";

const Users = () => {
  const { Content } = Layout;
  const { Title } = Typography;
  return (
    <Layout style={{ padding: "0 24px 24px" }}>
      <Content
        className="site-layout-background"
        style={{
          padding: 24,
          margin: "16px 0",
          minHeight: 550,
        }}
      >
        <Title type={3}>User Management</Title>
        <AddUser />
        <TableView />
        <UserInfo />
      </Content>
    </Layout>
  );
};

export default Users;
