import { Collapse } from "antd-mobile";
import { DemoBlock, lorem } from "demos";
import React from "react";

export default () => {
  return (
    <>
      {/* <DemoBlock title='基础用法' padding='0'> */}
      <DemoBlock title="Basic usage" padding="0">
        <Collapse defaultActiveKey={["1"]}>
          {/* <Collapse.Panel key='1' title='第一项'> */}
          <Collapse.Panel key="1" title="Item 1">
            {mockContents[0]}
          </Collapse.Panel>
          <Collapse.Panel key="2" title="Item 2">
            {/* <Collapse.Panel key='2' title='第二项'> */}
            {mockContents[1]}
          </Collapse.Panel>
          {/* <Collapse.Panel key='3' title='第三项'> */}
          <Collapse.Panel key="3" title="Item 3">
            {mockContents[2]}
          </Collapse.Panel>
        </Collapse>
      </DemoBlock>

      {/* <DemoBlock title='手风琴模式' padding='0'> */}
      <DemoBlock title="Accordion Mode" padding="0">
        <Collapse accordion>
          {/* <Collapse.Panel key="1" title="第一项"> */}
          <Collapse.Panel key="1" title="item 1">
            {/* 手风琴模式只能同时展开一个 */}
            Accordion mode can only expand one at a time
          </Collapse.Panel>
          {/* <Collapse.Panel key="2" title="第二项"> */}
          <Collapse.Panel key="2" title="item 2">
            {/* 手风琴模式只能同时展开一个 */}
            Accordion mode can only expand one at a time
          </Collapse.Panel>
          {/* <Collapse.Panel key="3" title="第三项"> */}
          <Collapse.Panel key="3" title="item 3">
            {/* 手风琴模式只能同时展开一个 */}
            Accordion mode can only expand one at a time
          </Collapse.Panel>
        </Collapse>
      </DemoBlock>
    </>
  );
};

const mockContents = Array(5)
  .fill(null)
  .map(() => lorem.generateParagraphs(1));
