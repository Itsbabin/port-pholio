"use client";
import React, { useEffect, useState } from "react";
import { usePathname } from 'next/navigation'
import Link from "next/link";


export default function Navigate() {
  const [path, setPath] = useState("");
  const [navidata, setNavidata] = useState("");
  const [path2, setPath2] = useState("");
  const [navidata2, setNavidata2] = useState("");
  const url = usePathname();

  useEffect(() => {
    if(url == "/"){
      setPath("projects");
      setPath2("skills");
      setNavidata("Projects");
      setNavidata2("Skills");
    }
    else if(url == "/skills"){
      setPath("");
      setPath2("about");
      setNavidata("Home");
      setNavidata2("About");
    }
    else if(url == "/about"){
      setPath("skills");
      setPath2("contact");
      setNavidata("Skills");
      setNavidata2("Contact");
    }
    else if(url == "/contact"){
      setPath("about");
      setPath2("projects");
      setNavidata("About");
      setNavidata2("Projects");
    }
    else if(url == "/projects"){
      setPath("contact");
      setPath2("");
      setNavidata("Contact");
      setNavidata2("Home");
    }
    else{
      setPath("");
      setPath2("");
      setNavidata("Home");
      setNavidata2("Home");
    }
  }, [url])
  

  
  return (
    <>
      <Link className="nextlink" href={`/${path}`}>
      <div className="left">
        <svg
          viewBox="0 0 30 30"
          width="70"
          height="80"
          fill="none"
          stroke="#ffffff"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          
          <line className="up"   x1="3" y1="16" x2="20" y2="23" />
          <line className="down" x1="3" y1="16" x2="20" y2="8" />
        </svg>
      <div className="navigate">{navidata}</div> 
      </div>
      </Link>
      <Link className="nextlink" href={`/${path2}`}>
      <div className="right">
       <div className="navigate">{navidata2}</div> 
        <svg
          viewBox="0 0 30 30"
          width="70"
          height="80"
          fill="none"
          stroke="#ffffff"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line className="down"    x1="3" y1="23" x2="20" y2="14" />
          <line className="up"  x1="3" y1="6" x2="20" y2="14" />
        </svg>
      </div>
        </Link>
    </>
  );
}
