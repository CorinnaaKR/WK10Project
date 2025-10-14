import React from "react";
import { Footer } from "antd-mobile";
import { DemoBlock } from "demos";
import { HandPayCircleOutline } from "antd-mobile-icons";
import { ChipItem, LinkItem } from "../footer";

export default () => {
  const links: LinkItem[] = [
    {
      text: "阿里云",
      href: "https://www.aliyun.com/",
    },
    {
      text: "支付宝",
      href: "https://www.antgroup.com/",
    },
  ];
  const chips: ChipItem[] = [
    {
      text: "蚂蚁借呗",
    },
    {
      text: "备用金",
    },
    {
      text: "蚂蚁花呗",
    },
  ];
  const chipsLinkData: ChipItem[] = [
    {
      text: "蚂蚁借呗",
      type: "link",
    },
    {
      text: "备用金",
      type: "link",
    },
    {
      text: "蚂蚁花呗",
      type: "link",
    },
  ];

  const onChipClick = (item: ChipItem, index: number) => {
    console.log(item, index);
    // alert(`${item?.text}被点击了`)
    alert(`${item?.text}Clicked`);
  };
  const onLinkClick = (item: LinkItem, index: number) => {
    console.log(item, index);
    // alert(`跳转到${item?.href}`)
    alert(`Jump to${item?.href}`);
  };

  return (
    <>
      {/* <DemoBlock title='基础页脚'> */}
      <DemoBlock title="Basic Footer">
        {/* <Footer label='没有更多了'></Footer> */}
        <Footer label="No more?"></Footer>
      </DemoBlock>
      {/* <DemoBlock title='自定义 label'> */}
      <DemoBlock title="Custom label">
        <Footer
          label={
            <div>
              <HandPayCircleOutline /> 蚂蚁财富
            </div>
          }
        ></Footer>
      </DemoBlock>
      {/* <DemoBlock title='带内容的页脚'> */}
      <DemoBlock title="Footer with content">
        <Footer content="@ 2004-2020 Alipay.com All rights reserved"></Footer>
      </DemoBlock>
      {/* <DemoBlock title='带链接的页脚'> */}
      <DemoBlock title="Footer with links">
        <Footer
          links={[
            {
              text: "阿里云",
              href: "https://www.aliyun.com/",
            },
          ]}
        ></Footer>
      </DemoBlock>
      {/* <DemoBlock title='通过点击事件跳转'> */}
      <DemoBlock title="Jump via click event">
        <Footer links={links} onLinkClick={onLinkClick}></Footer>
      </DemoBlock>
      {/* <DemoBlock title='带标签的页脚'> */}
      <DemoBlock title="Footer with Label">
        <Footer chips={chips}></Footer>
      </DemoBlock>
      {/* <DemoBlock title='标签可点击'> */}
      <DemoBlock title="Labels are clickable">
        <Footer chips={chipsLinkData} onChipClick={onChipClick}></Footer>
      </DemoBlock>
      {/* <DemoBlock title='组合使用'> */}
      <DemoBlock title="Combination use">
        <Footer
          //   label='没有更多了'
          label="No more?"
          content="@ 2004-2020 Alipay.com All rights reserved"
          links={links}
          chips={chips}
        ></Footer>
      </DemoBlock>
    </>
  );
};
