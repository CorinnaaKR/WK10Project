"use client";
import { Layout } from "antd";
import "antd/dist/reset.css"; // for AntD v5

const { Header, Content, Footer } = Layout;

const TestLayout = () => (
  <Layout style={{ minHeight: "100vh" }}>
    <Header style={{ color: "white" }}>Header</Header>
    <Content style={{ padding: "24px" }}>Content</Content>
    <Footer style={{ textAlign: "center" }}>Footer</Footer>
  </Layout>
);

export default TestLayout;
