import Image from "next/image";
import Link from "next/link";

export default function Card({project}) {
  return (
    <>
        <div className="project_card">
            <div className="project_image"> 
              <Image src={project.image} width={180} height={100} alt="image" ></Image>            
             </div>
            <Link className="project_link" href={project.link}>
            <div className="project_text">
                <div className="title">{project.title}</div>
                <div className="tag">{project.tag}</div>
                <div className="description">{project.description}</div>
            </div>
            </Link>
        </div>
    </>
  )
}
