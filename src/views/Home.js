import { Typography, Layout } from "antd";
const Home = () => {
  const { Content } = Layout;
  const { Title, Text } = Typography;
  return (
    <Layout style={{ padding: "0 24px 24px" }}>
      <Content
        className="site-layout-background"
        style={{
          padding: 24,
          margin: "16px 0",
          minHeight: 590,
        }}
      >
        <Title level={1}>Home Page</Title>
        <Title level={3}>User Management App</Title>
        <Text>Developed with Ant Design and MobX State Tree | ReactJS</Text>
      </Content>
    </Layout>
  );
};

export default Home;
