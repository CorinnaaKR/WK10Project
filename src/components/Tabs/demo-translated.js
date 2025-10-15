import React from "react";
import { Tabs } from "antd";
const onChange = (key) => {
  console.log(key);
};
const items = [
  {
    key: "1",
    label: "Corinna",
    children: "Corinna's projects can be found here: LINK GOES HERE",
  },
  {
    key: "2",
    label: "Steph",
    children: "Steph's projects can be found here: LINK GOES HERE",
  },
  {
    key: "3",
    label: "Group",
    children: "Group projects can be found here: LINK GOES HERE",
  },
];
const App = () => (
  <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
);
export default Tabs;
