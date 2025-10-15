"use client";
import { NavBar, Space, Toast } from "antd-mobile";
import { MoreOutline, SearchOutline } from "antd-mobile-icons";
import React from "react";

// export default () {
//   // <div style={{ fontSize: 24 }}>
//   //   <Space style={{ "--gap": "16px" }}>
//   //     <SearchOutline />
//   //     <MoreOutline />
//   //   </Space>
//   // </div>
export default function VeryLoNavBar1ngNoticeBar() {
  return (
    <>
      {/* <DemoBlock title="Basic usage" padding="0"> */}
      <NavBar>Corinna & Steph</NavBar>
      {/* </DemoBlock> */}
    </>
  );
}

//   return (
//     <>
//       <DemoBlock title="Basic usage" padding="0">
//         <NavBar onBack={back}>title</NavBar>
//       </DemoBlock>

//       <DemoBlock title="Back button display text" padding="0">
//         <NavBar back="return" onBack={back}>
//           title
//         </NavBar>
//       </DemoBlock>

//       <DemoBlock title="Back button does not display icon" padding="0">
//         <NavBar back="return" onBack={back} backIcon={false}>
//           title
//         </NavBar>
//       </DemoBlock>

//       <DemoBlock title="Customize the back button icon" padding="0">
//         <NavBar back="return" backIcon={<CloseOutline />} onBack={back}>
//           title
//         </NavBar>
//       </DemoBlock>

//       <DemoBlock title="Customize the left area" padding="0">
//         <NavBar back="return" onBack={back} left="closure">
//           title
//         </NavBar>
//       </DemoBlock>

//       <DemoBlock title="Customize the right area" padding="0">
//         <NavBar right={right} onBack={back}>
//           title
//         </NavBar>
//       </DemoBlock>

//       <DemoBlock title="Custom height and border" padding="0">
//         <NavBar
//           style={{
//             "--height": "36px",
//             "--border-bottom": "1px #eee solid",
//           }}
//           onBack={back}
//         >
//           title
//         </NavBar>
//       </DemoBlock>

//       <DemoBlock title="Title is too long" padding="0">
//         <NavBar onBack={back}>
//           This is a very long, very long, very long, very long title
//         </NavBar>
//       </DemoBlock>

//       <DemoBlock title="Show subtitle" padding="0">
//         <NavBar onBack={back}>
//           <div>
//             <div>title</div>
//             <div className="my-nav-bar-subtitle">subtitle</div>
//           </div>
//         </NavBar>
//       </DemoBlock>
//     </>
//   );
// };
