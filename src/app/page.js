"use client";
import Sidenav from "../component/sidenav";
import Image from "next/image";
import myphoto from "../../public/photos/newphoto.jpg";
import Animation from "@/component/animation";

export default function Home() {
  return (
    <>
     <Animation/>
      <Sidenav />
      <div className="container">
        <div className="wraper">
          <div className="image">
            <Image className="photo" src={myphoto} width={300} alt="author photo" priority={true} ></Image>
          </div>
          <div className="intro">
            <h1 className="heading">Hello !!</h1>
            <h3>
              Lets dive into world of webe development with me . My shelf Biswajit Mandal ,
              a intermidiate webdeveloper.
            </h3>
          </div>
        </div>
      </div>
    </>
  );
}
