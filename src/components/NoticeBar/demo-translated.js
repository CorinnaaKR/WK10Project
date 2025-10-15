import { NoticeBar, Space } from "antd-mobile";
import { CloseCircleOutline, CompassOutline } from "antd-mobile-icons";
import { DemoBlock, lorem } from "demos";
import React from "react";

const demoLongText = lorem.generateWords(20);

export default () => {
  return (
    <>
      <DemoBlock
        title="Notice Board Semantics"
        padding="0"
        background="transparent"
      >
        <Space block direction="vertical">
          <NoticeBar content="default" color="default" />
          <NoticeBar content="success" color="success" />
          <NoticeBar content="warning" color="alert" />
          <NoticeBar content="error" color="error" />
          <NoticeBar content="information" color="info" />
        </Space>
      </DemoBlock>{" "}
      <DemoBlock title="Closeable" padding="0">
        <NoticeBar
          content="This notification can be closed."
          color="alert"
          closeable
        />
      </DemoBlock>
      <DemoBlock title="Extra-long scrolling" padding="0">
        <NoticeBar content={demoLongText} color="alert" />
      </DemoBlock>
      <DemoBlock title="Multi-line display" padding="0">
        <NoticeBar
          content="Notification for information within the current page, a more eye-catching in-page notification method."
          wrap
          color="alert"
        />
      </DemoBlock>
      <DemoBlock title="Custom" padding="0" background="transparent">
        <Space block direction="vertical">
          <NoticeBar
            extra={<CloseCircleOutline style={{ fontSize: 18 }} />}
            icon={<CompassOutline />}
            content={"Customize icon"}
          />
          <NoticeBar
            extra={
              <Space style={{ "--gap": "12px" }}>
                <span>View details</span>
                <span>Close</span>
              </Space>
            }
            content={"Customize right ribbon"}
            color="alert"
          />
          <div style={{ paddingInline: 12 }}>
            <NoticeBar
              color="info"
              shape="neutral"
              bordered
              content={"Rounded corners + full border"}
            />
          </div>
          <div style={{ paddingInline: 12 }}>
            <NoticeBar
              color="success"
              shape="rounded"
              bordered={false}
              content={"Rounded + no border"}
            />
          </div>
        </Space>
      </DemoBlock>
    </>
  );
};
