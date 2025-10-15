"use client";
import React from "react";
import { List } from "antd";

const data = [
  "AntDesign",
  "AntDesign Mobile",
  "React.js but is primarily used in Next.js",
];

export default function DemoList() {
  return (
    <List
      header={
        <div>
          <b>What did we use for this page?</b>
        </div>
      }
      bordered
      dataSource={data}
      renderItem={(item) => <List.Item>{item}</List.Item>}
    />
  );
}

// const DemoList = () => (
//   <>
//     <Divider orientation="left">Default Size</Divider>
//     <List
//       header={<div>Header</div>}
//       footer={<div>Footer</div>}
//       bordered
//       dataSource={data}
//       renderItem={(item) => (
//         <List.Item>
//           <Typography.Text mark>[ITEM]</Typography.Text> {item}
//         </List.Item>
//       )}
//     />
//     <Divider orientation="left">Small Size</Divider>
//     <List
//       size="small"
//       header={<div>Header</div>}
//       footer={<div>Footer</div>}
//       bordered
//       dataSource={data}
//       renderItem={(item) => <List.Item>{item}</List.Item>}
//     />
//     <Divider orientation="left">Large Size</Divider>
//     <List
//       size="large"
//       header={<div>Header</div>}
//       footer={<div>Footer</div>}
//       bordered
//       dataSource={data}
//       renderItem={(item) => <List.Item>{item}</List.Item>}
//     />
//   </>
// );
// export default DemoList;
