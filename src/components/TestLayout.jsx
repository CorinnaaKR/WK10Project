"use client";
import { Flex, Layout } from "antd";
import "antd/dist/reset.css"; // for AntD v5

const { Header, Sider, Content, Footer } = Layout;

const TestLayout = () => (
  <Layout style={layoutStyle} width="100vw, auto">
    <Sider width={150} style={{ background: "#001529" }}>
      <div style={{ color: "white", padding: "16px" }}>Sider</div>
    </Sider>
    <Header style={{ color: "white", textAlign: "center" }}>Header</Header>
    <Content style={{ padding: "24px" }}>Content</Content>
    <Footer style={{ textAlign: "center" }}>Footer</Footer>
  </Layout>
);

{
  /* <Layout style={layoutStyle}>
  <Header style={headerStyle}>Header</Header>
  <Layout>
    <Sider width="25%" style={siderStyle}>
      Sider
    </Sider>
    <Content style={contentStyle}>Content</Content>
  </Layout>
  <Footer style={footerStyle}>Footer</Footer>
</Layout>; */
}

export default TestLayout;

const headerStyle = {
  textAlign: "center",
  color: "#fff",
  height: 64,
  paddingInline: 48,
  lineHeight: "64px",
  backgroundColor: "#4096ff",
};
const contentStyle = {
  textAlign: "center",
  minHeight: 120,
  lineHeight: "120px",
  color: "#fff",
  backgroundColor: "#0958d9",
};
const siderStyle = {
  textAlign: "center",
  lineHeight: "120px",
  color: "#fff",
  backgroundColor: "#1677ff",
};
const footerStyle = {
  textAlign: "center",
  color: "#fff",
  backgroundColor: "#4096ff",
};
const layoutStyle = {
  borderRadius: 8,
  overflow: "hidden",
  width: "calc(50% - 8px)",
  maxWidth: "calc(50% - 8px)",
};
