"use client";
import Sidenav from "../component/sidenav";
import Image from "next/image";
import myphoto from "../../public/photos/myphoto.png";

export default function Home() {
  return (
    <>
      <Sidenav />
      <div className="container">
        <div className="wraper">
          <div className="image">
            <Image className="photo" src={myphoto} width={350} alt="author photo" priority={true} ></Image>
          </div>
          <div className="intro">
            <h1 className="heading">Hello !!</h1>
            <h3>
              Lets dive into world of webedev with me . My shelf Biswajit Mandal
              a intermidiate webdeveloper.
            </h3>
            <div className="skills">this is skill section</div>
          </div>
        </div>
      </div>
    </>
  );
}
