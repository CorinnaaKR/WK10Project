import { NavBar, Space, Toast } from "antd-mobile";
import { CloseOutline, MoreOutline, SearchOutline } from "antd-mobile-icons";
import { DemoBlock } from "demos";
import React from "react";

import "./demo1.less";

export default () => {
  const right = (
    <div style={{ fontSize: 24 }}>
      <Space style={{ "--gap": "16px" }}>
        <SearchOutline />
        <MoreOutline />
      </Space>
    </div>
  );

  const back = () =>
    Toast.show({
      content: "Clicked Return to area",
      duration: 1000,
    });

  return (
    <>
      <DemoBlock title="Basic usage" padding="0">
        <NavBar onBack={back}>title</NavBar>
      </DemoBlock>

      <DemoBlock title="Back button display text" padding="0">
        <NavBar back="return" onBack={back}>
          title
        </NavBar>
      </DemoBlock>

      <DemoBlock title="Back button does not display icon" padding="0">
        <NavBar back="return" onBack={back} backIcon={false}>
          title
        </NavBar>
      </DemoBlock>

      <DemoBlock title="Customize the back button icon" padding="0">
        <NavBar back="return" backIcon={<CloseOutline />} onBack={back}>
          title
        </NavBar>
      </DemoBlock>

      <DemoBlock title="Customize the left area" padding="0">
        <NavBar back="return" onBack={back} left="closure">
          title
        </NavBar>
      </DemoBlock>

      <DemoBlock title="Customize the right area" padding="0">
        <NavBar right={right} onBack={back}>
          title
        </NavBar>
      </DemoBlock>

      <DemoBlock title="Custom height and border" padding="0">
        <NavBar
          style={{
            "--height": "36px",
            "--border-bottom": "1px #eee solid",
          }}
          onBack={back}
        >
          title
        </NavBar>
      </DemoBlock>

      <DemoBlock title="Title is too long" padding="0">
        <NavBar onBack={back}>
          This is a very long, very long, very long, very long title
        </NavBar>
      </DemoBlock>

      <DemoBlock title="Show subtitle" padding="0">
        <NavBar onBack={back}>
          <div>
            <div>title</div>
            <div className="my-nav-bar-subtitle">subtitle</div>
          </div>
        </NavBar>
      </DemoBlock>
    </>
  );
};
