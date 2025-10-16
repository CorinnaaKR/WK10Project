"use client";
import React from "react";
import { TextArea } from "antd-mobile";

export function WelcomeTextDemo() {
  return (
    <>
      <div title="Word Limit">
        <TextArea
          defaultValue={
            "This is an example of an interactive text field using Ant Design"
          }
          showCount
          maxLength={80}
        />
      </div>
    </>
  );
}

// import React, { useState } from "react";
// import { TextArea } from "antd-mobile";
// import { DemoBlock } from "demos";

// export default () => {
//   const [value, setValue] = useState("");
//   return (
//     <>
//       <DemoBlock title="Basic Input Box Component">
//         <TextArea
//           placeholder="Please enter content"
//           value={value}
//           onChange={(val) => {
//             setValue(val);
//           }}
//         />
//       </DemoBlock>

//       <DemoBlock title="Specify number of rows">
//         <TextArea placeholder="Please enter content" rows={5} />
//       </DemoBlock>

//       <DemoBlock title="Automatically adjust height based on content">
//         <TextArea
//           placeholder="Please enter content"
//           autoSize={{ minRows: 3, maxRows: 5 }}
//         />
//       </DemoBlock>

//       <DemoBlock title="Word Count">
//         <TextArea
//           defaultValue={
//             "The North Star hangs low to the ground,\nThe moon is full over the eastern mountain."
//           }
//           showCount
//         />
//       </DemoBlock>

//       <DemoBlock title="Word Limit">
//         <TextArea
//           defaultValue={
//             "The North Star hangs low to the ground,\nThe moon is full over the eastern mountain."
//           }
//           showCount
//           maxLength={30}
//         />
//       </DemoBlock>

//       <DemoBlock title="Disabled">
//         <TextArea
//           placeholder="Please enter content"
//           value={
//             "The North Star hangs low to the ground,\nThe moon is full over the eastern mountain."
//           }
//           disabled
//         />
//       </DemoBlock>

//       <DemoBlock title="Read-only">
//         <TextArea
//           placeholder="Please enter content"
//           value={
//             "The North Star hangs low to the ground,\nThe moon is full over the eastern mountain."
//           }
//           readOnly
//         />
//       </DemoBlock>
//     </>
//   );
// };
