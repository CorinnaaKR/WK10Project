"use client";
import { Flex, Layout } from "antd";
import "antd/dist/reset.css"; // for AntD v5
import VeryLongNoticeBar from "@/components/NoticeBar/demo-translated.js";
import WelcomeAreaText from "@/components/CentralisedText/welcome-area-text.js";

const { Header, Sider, Content, Footer } = Layout;

const TestLayout = () => (

  <Layout style={{ minHeight: "100vh" }}>
    <Sider width={150} style={{ background: "peru" }}>
      <div style={{ color: "white", padding: "16px" }}>Sider</div>
    </Sider>
    <Layout>
      <VeryLongNoticeBar />

      <Header
        style={{ background: "peru", color: "white", textAlign: "center" }}
      >
        Header
      </Header>
      <Content style={{ padding: "24px" }}>
        <WelcomeAreaText />
      </Content>
      <Footer style={{ textAlign: "center" }}>Footer</Footer>
    </Layout>
    <Sider width={150} style={{ background: "peru" }}>
      <div style={{ color: "white", padding: "16px" }}>Sider</div>
    </Sider>
  </Layout>
);

export default TestLayout;
