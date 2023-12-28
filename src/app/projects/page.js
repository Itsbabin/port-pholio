import Card from "@/component/project_card";
import Sidenav from "../../component/sidenav";
import Animation from "@/component/animation";

export default function Projrcts() {
  const list = [
    { 
      id: 0,
      title: "Backend",
      tag: "Node JS",
      description: "A backend for small Banks",
      link: "https://github.com/Itsbabin/kishalay",
      image:
        "https://images.unsplash.com/photo-1633976976526-4e3584e91a5d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0MzQwNDZ8MHwxfHNlYXJjaHwxNnx8Z2l0fGVufDB8fHx8MTcwMzc3MTAxNnww&ixlib=rb-4.0.3&q=80&w=1080",
    },
    { 
      id: 1,
      title: "Imagenary",
      tag: "React",
      description: "Download image of anything",
      link: " https://itsbabin.github.io/shoping-app/",
      image:
        "https://images.unsplash.com/photo-1466378743612-9da217f53e55?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0MzQwNDZ8MHwxfHNlYXJjaHwyMHx8aW1hZ2V8ZW58MHx8fHwxNzAzNzcwOTY4fDA&ixlib=rb-4.0.3&q=80&w=1080",
    },
    {
      id: 2,
      title: "Portpholio",
      tag: "nextJs",
      description: "This project is my portpholio site",
      link: "https://github.com/Itsbabin/port-pholio",
      image:
        "https://s.tmimgcdn.com/scr/1200x750/332300/architecture-portfolio-layout-design-use-for-design-portfolio-brochure-template_332382-original.jpg",
    },
    {
      id: 3,
      title: "DSA",
      tag: "C++",
      description: "DSA basic codes in C++",
      link: "https://github.com/Itsbabin/DSA",
      image:
        "https://images.unsplash.com/photo-1583484963886-cfe2bff2945f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0MzQwNDZ8MHwxfHNlYXJjaHwxNnx8QmluYXJ5JTIwX3RyZWV8ZW58MHx8fHwxNzAzNzcwODY5fDA&ixlib=rb-4.0.3&q=80&w=1080",
    },
    {
      id: 4,
      title: "Authentication",
      tag: "React",
      description: "User authentication and creat user",
      link: "https://github.com/Itsbabin/Tech-Titans",
      image:
        "https://images.unsplash.com/photo-1633356122544-f134324a6cee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0MzQwNDZ8MHwxfHNlYXJjaHw4fHxiYWNrZW5kfGVufDB8fHx8MTcwMzc3MDcwMHww&ixlib=rb-4.0.3&q=80&w=1080",
    },
    {
      id: 5,
      title: "TO DO webapp",
      tag: "React",
      description: "Basic note app to remind tasks",
      link: "https://github.com/Itsbabin/todo",
      image:
        "https://play-lh.googleusercontent.com/HUuQc4Zpl6x7fUyX-jFMmcuUbW77REw4UKl5rfhHfP4VY6ctBU1w1I_RZWsXaojFgIo",
    },
  ];
  return (
    <>
      <Animation />
      <Sidenav />
      <div className="container">
        <div className="skill_container">
          <h1 className="project_h1">Projects</h1>
          <p>click on card to get code</p>
          <div className="wraper">
            {list.map((e) => {
              return <Card key={e.id} project={e} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
}
