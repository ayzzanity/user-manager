import { Typography, Layout } from "antd";
const About = () => {
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
        <Title level={1}>About Page</Title>
        <Title level={3}>User Management App</Title>
        <Text>Version 1.0.0 | Started: 09/08/21 - Finished: 11/08/21</Text>
      </Content>
    </Layout>
  );
};

export default About;
