"use client";
import React from "react";
import { Image, Space } from "antd-mobile";
import { AutoCenter } from "antd-mobile";

import StenataphcalkinImage from "@/assets/Stenataphcalkin.png";

// const Stentaphcalkin = "@/assets/Stenataphcalkin.png";
const Stenataphcalkin = "https://i.postimg.cc/vm7x277v/Stenataphcalkin.png";

const CorinnaaKR = "https://i.postimg.cc/0jzQv7mN/Corinnaa-KR.jpg";

export default function Gallery() {
  return (
    <AutoCenter>
      <div style={{ userSelect: "none" }}>
        <Space wrap>
          <a href="https://github.com/CorinnaaKR" target="_blank">
            <Image
              src={CorinnaaKR}
              width={128}
              height={128}
              fit="cover"
              style={{ borderRadius: 64 }}
            />
          </a>
          <a href="https://github.com/Stenataphcalkin" target="_blank">
            <Image
              src={Stenataphcalkin}
              width={128}
              height={128}
              fit="cover"
              style={{ borderRadius: 64 }}
            />
          </a>
        </Space>
      </div>
    </AutoCenter>
  );
}
