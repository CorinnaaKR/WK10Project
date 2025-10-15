"use client";
import React from "react";
import { Tabs } from "antd";
const onChange = (key) => {
  console.log(key);
};
const items = [
  {
    key: "1",
    label: "Corinna",
    children: (
      <p>
        Corinna&apos;s projects can be found:{" "}
        <a href="https://github.com/CorinnaaKR" target="_blank">
          here{" "}
        </a>
      </p>
    ),
  },

  {
    key: "2",
    label: "Steph",
    children: (
      <p>
        Corinna&apos;s projects can be found:{" "}
        <a href="https://github.com/Stenataphcalkin" target="_blank">
          here{" "}
        </a>
      </p>
    ),
  },
  {
    key: "3",
    label: "Group",
    children: (
      <p>
        our group project, featuring IndieMasco found:{" "}
        <a href="https://github.com/Stenataphcalkin" target="_blank">
          here{" "}
        </a>
      </p>
    ),
  },
];
const ProjectsTabs = () => (
  <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
);
export default ProjectsTabs;
