import React from "react";
import { Divider } from "antd-mobile";
import { DemoBlock } from "demos";

export default () => {
  return (
    <>
      {/* <DemoBlock title='基础分割线'> */}
      <DemoBlock title="Basic dividing line">
        <Divider />
      </DemoBlock>

      <DemoBlock title="Dividing line with content">
        {/* <DemoBlock title='带内容的分割线'> */}
        <Divider>Default content is in the middle</Divider>
        {/* <Divider>默认内容在中间</Divider> */}
        <Divider contentPosition="left">Left content</Divider>
        {/* <Divider contentPosition='left'>左侧内容</Divider> */}
        <Divider contentPosition="right">right content</Divider>
        {/* <Divider contentPosition='right'>右侧内容</Divider> */}
      </DemoBlock>

      <DemoBlock title="Custom styles">
        {/* <DemoBlock title='自定义样式'> */}
        <Divider
          style={{
            color: "#1677ff",
            borderColor: "#1677ff",
            borderStyle: "dashed",
          }}
        >
          {/* 自定义样式 */}
          Custom styles
        </Divider>
      </DemoBlock>
      {/* <DemoBlock title='竖向分割线'> */}
      <DemoBlock title="vertical dividing line">
        <>
          Text
          <Divider direction="vertical" />
          <a href="#">Link</a>
          <Divider direction="vertical" />
          <a href="#">Link</a>
        </>
      </DemoBlock>
    </>
  );
};
