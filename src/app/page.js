import TestLayout from "@/components/TestLayout";
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

export default function Homepage() {
  return (
    <>
      <VeryLongNoticeBar />
      <NavBar />
      <WelcomeAreaText />
      {/* <DividerDemo /> */}
      <TestLayout>
        <header>
          <h1>Home Page</h1>
        </header>
      </TestLayout>
      <DemoList />
      <ProjectsTabs />
      <DividerDemo />
      <WelcomeTextDemo />
      <DividerDemo />
      <GitHubText />
      <Gallery />
      <DividerDemo />
      <ProjectFooter />
    </>
  );
}
