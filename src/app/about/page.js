import Animation from "@/component/animation";
import Sidenav from "@/component/sidenav";
import Link from "next/link";

export default function About() {
  return (
    <>
    <Animation/>
    <Sidenav/>
     <div className="container">
        <div className="wraper">
        <div className="skill_container">
            <div className="heading"><h2>Hello my name is Biswajit Mandal</h2></div>
            <div className="content">
                <p>I am a student . I am persuing my B tech. in ECE through Swami Vivekananda Intitute of Science & Technology </p>
                <p>I have some webdevelopment <Link className="skill_link" href={"/skills"}>skill.</Link> </p>
            </div>
        </div> 
        </div>
     </div>
    </>
  )
}
