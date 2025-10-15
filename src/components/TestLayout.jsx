"use client";
import { Layout } from "antd";
import "antd/dist/reset.css"; // for AntD v5

const { Header, Sider, Content, Footer } = Layout;

const TestLayout = () => (
  <Layout style={{ minHeight: "100vh" }}>
    <Header style={{ color: "white", textAlign: "center" }}>Header</Header>
    <Layout />
    <Sider width={150} style={{ background: "#001529" }}>
      <div style={{ color: "white", padding: "16px" }}>Sider</div>
    </Sider>
    <Content style={{ padding: "24px" }}>Content</Content>
    <Layout />
    <Footer style={{ textAlign: "center" }}>Footer</Footer>
  </Layout>
);

export default TestLayout;
