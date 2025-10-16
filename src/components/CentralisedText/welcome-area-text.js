"use client";
import React from "react";
import { AutoCenter } from "antd-mobile";

export default function WelcomeAreaText() {
  return (
    <>
      <div title="Text">
        <AutoCenter>
          <p>Welcome in!</p>
        </AutoCenter>

        <AutoCenter>
          <p>
            We&apos;re Corinna & Steph, two aspiring full-stack developers
            currently studying at Tech Educators. This site is our collaborative
            week 10 project, which is built with Ant Design, a component library
            that allows for clean layouts that makes for a great transition for
            users going between prebuilt or drag and drop website builders into
            more of a full development environment.
          </p>
        </AutoCenter>

        <AutoCenter>
          <p>
            Here you’ll find a collection of our individual and joint projects,
            highlighting our journey as developers and the skills we’ve been
            building along the way. From creative front-end interfaces to
            full-stack applications, each project reflects our growth,
            curiosity, and love for code.
          </p>
        </AutoCenter>

        <AutoCenter>
          <p>Take a look around as we&apos;d love to hear what you think!</p>
        </AutoCenter>
      </div>
    </>
  );
}
