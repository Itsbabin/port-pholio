import Card from "@/component/project_card";
import Sidenav from "../../component/sidenav";
import Animation from "@/component/animation";

export default function Projrcts() {
    const list = [
        {
            title : "Portpholio",
            tag : "nextJs",
            description : "this is a demo description"
        },
        {
            title : "Portpholio",
            tag : "nextJs",
            description : "this is a demo description"
        },
        {
            title : "Portpholio",
            tag : "nextJs",
            description : "this is a demo description"
        },
        {
            title : "Portpholio",
            tag : "nextJs",
            description : "this is a demo description"
        },
        {
            title : "Portpholio",
            tag : "nextJs",
            description : "this is a demo description"
        },
        {
            title : "Portpholio",
            tag : "nextJs",
            description : "this is a demo description"
        },
        {
            title : "Portpholio",
            tag : "nextJs",
            description : "this is a demo description"
        },
    ]
  return (
    <>
    <Animation/>
    <Sidenav />
      <div className="container">
        <div className="skill_container">
            <h1 className="project_h1">Projects</h1>
          <div className="wraper">
            {list.map((e) => {
              return <Card project={e} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
}
