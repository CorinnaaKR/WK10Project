"use client";

import React from "react";
import { Footer } from "antd-mobile";

export default function ProjectFooter() {
  return (
    <>
      <Footer content="@ 2004-2020 Alipay.com All rights reserved"></Footer>
      <Footer
        links={[
          {
            text: "阿里云",
            href: "https://www.aliyun.com/",
          },
        ]}
      ></Footer>
    </>
  );
}
