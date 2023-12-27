"use client";
import Sidenav from "../component/sidenav";
import Image from "next/image";
import myphoto from "../../public/photos/newphoto.jpg";

export default function Home() {
  return (
    <>
      <Sidenav />
      <div className="container">
        <div className="image">
          <Image className="photo" src={myphoto} width={350}></Image>
        </div>
        <div className="intro">
          <h1 className="heading">
           Hello !!
          </h1> 
          <h3>
            Lets dive into world of webedev with me . My shelf Biswajit Mandal a intermidiate webdeveloper.
          </h3>
        </div>
      </div>
    </>
  );
}
