"use client";
import { Flex, Layout } from "antd";
import "antd/dist/reset.css"; // for AntD v5
import DemoList from "@/components/List/demo-translated.js";
import VeryLongNoticeBar from "@/components/NoticeBar/demo-translated.js";
import NavBar from "@/components/NavBar/demo-translated.js";
import { WelcomeTextDemo } from "@/components/TextArea/demo-translated.js";
import DividerDemo from "@/components/Dividers/divider.js";
import WelcomeAreaText from "@/components/CentralisedText/welcome-area-text.js";
import ProjectsTabs from "@/components/Tabs/projects-tabs.js";
import Gallery from "@/components/Gallery/gallery.js";
import ProjectFooter from "@/components/footer/footer.js";
import GitHubText from "@/components/CentralisedText/githubtext.js";

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
        Corinna & Steph's Week 10 Project
      </Header>
      <Content style={{ padding: "24px" }}>
        <WelcomeAreaText />
        <DemoList />
      <ProjectsTabs />
      <DividerDemo />
      <WelcomeTextDemo />
      <DividerDemo />
      <GitHubText />
      <Gallery />
      <DividerDemo />
      <ProjectFooter />
      </Content>
      <Footer style={{ textAlign: "center" }}>Footer</Footer>
    </Layout>
    <Sider width={150} style={{ background: "peru" }}>
      <div style={{ color: "white", padding: "16px" }}>Sider</div>
    </Sider>
  </Layout>
);

export default TestLayout;
