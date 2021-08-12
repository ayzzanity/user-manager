import { Typography, Layout } from "antd";
const Home = () => {
  const { Content } = Layout;
  const { Title } = Typography;
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
        <Title level={5}>
          Developed with Ant Design and MobX State Tree | ReactJS |
        </Title>
        <Title level={5}>
          Developed with NodeJS, ExpressJS, Sequelize ORM, and MySQL Database |
          Webserver |
        </Title>
      </Content>
    </Layout>
  );
};

export default Home;
