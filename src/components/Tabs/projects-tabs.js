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
        Hi! I&apos;m a digital marketing executive turned full-stack developer
        in training. My background in marketing has given me a strong foundation
        in understanding user experience, journeys, and site design which I aim
        to apply in all my projects.
        <p>
          <br /> Outside of coding, you&apos;ll likely find me in the local
          tabletop gaming stores and waxing-lyrical about Pokémon, or taking
          part in roleplaying games as both a player and dungeon-master!
          <p>
            <br /> Steph&apos;s projects can be found:{" "}
            <a href="https://github.com/Stenataphcalkin" target="_blank">
              here{" "}
            </a>
          </p>
        </p>
      </p>
    ),
  },
  {
    key: "3",
    label: "Group",
    children: (
      <p>
        This is our group project, featuring IndieMasco found:{" "}
        <a
          href="https://github.com/IndieMasco/TechEdWeek5GroupAssignment-"
          target="_blank"
        >
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
