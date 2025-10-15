// import { Layout } from "antd";

//the below code is what the documentation says the code structure should look like

// export default function layout() {
//   return (
//     <Layout>
//       <Header>header</Header>
//       <Layout>
//         <Sider>left sidebar</Sider>
//         <Content>main content</Content>
//         <Sider>right sidebar</Sider>
//       </Layout>
//       <Footer>footer</Footer>
//     </Layout>
//   );
// }

//however the code errored when inputted like this, so Corinna consulted chap gpt about the error and it provided the below example of how the components need to be used and imported.

// import React from "react";
// import { Layout } from "antd";
// import "antd/dist/reset.css"; // for AntD v5

// const { Header, Content, Footer } = Layout;

// const TestLayout = () => (
//   <Layout style={{ minHeight: "100vh" }}>
//     <Header style={{ color: "white" }}>Header</Header>
//     <Content style={{ padding: "24px" }}>Content</Content>
//     <Footer style={{ textAlign: "center" }}>Footer</Footer>
//   </Layout>
// );

// export default TestLayout;
