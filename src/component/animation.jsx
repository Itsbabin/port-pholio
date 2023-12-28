"use client";
import { useEffect, useState } from "react";

export default function Animation() {
const [isloaded, setIsloaded] = useState("false")

  useEffect(() => {
    setTimeout(() => {
      setIsloaded("true");
    }, 100);
  }, [])
  
  return (
    <>
    <div className="navigation_aniimation" isloaded={isloaded}></div>
    <div className="navigation_aniimation2" isloaded={isloaded}></div>
    <div className="navigation_aniimation3" isloaded={isloaded}></div>
    </>
  )
}
