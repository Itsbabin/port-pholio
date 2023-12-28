import Card from "@/component/skill_card";
import React from "react";
import Sidenav from "../../component/sidenav";
import Animation from "@/component/animation";

export default function Skills() {
  const list = [
    {id:0,
      data:"Java Script"},
    {id:1,
      data:"C++"},
    {id:2,
      data:"React"},
    {id:3,
      data:"Css"},
    {id:4,
      data:"HTML5"},
    {id:5,
      data:"Flutter"},
    {id:6,
      data:"Mongo DB"},
    {id:7,
      data:"Docker"},
    {id:8,
      data:"Next JS"},
    {id:9,
      data:"Bootstrap"},
    {id:10,
      data:"Node JS"},
  ];
  return (
    <>
    <Animation/>
    <Sidenav />
      <div className="container">
        <div className="skill_container">
            <h1>Skills</h1>
        <div className="wraper_skill">
          {list.map((e) => {
            return <Card key={e.id} name={e.data} />;
          })}
        </div>
        </div>
      </div>
    </>
  );
}
