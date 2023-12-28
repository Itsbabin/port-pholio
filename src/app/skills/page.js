import Card from "@/component/skill_card";
import React from "react";
import Sidenav from "../../component/sidenav";

export default function Skills() {
  const list = [
    "Java Script",
    "C++",
    "React",
    "Css",
    "HTML5",
    "Flutter",
    "Mongo DB",
  ];
  return (
    <>
    <Sidenav />
      <div className="container">
        <div className="skill_container">
            <h1>Skills</h1>
        <div className="wraper_skill">
          {list.map((e) => {
            return <Card name={e} />;
          })}
        </div>
        </div>
      </div>
    </>
  );
}
