'use client';

import Link from "next/link";
import { useState } from "react";

export default function Sidenav() {
   const [height, setHeight] = useState("flex");
   const [line1, setLine1] = useState(6);
   const [line2, setLine2] = useState(18);
  return (<>
    <div onClick={() => {
      height === "flex" ? setHeight("none") : setHeight("flex");
      line1 === 6 ? setLine1(18) : setLine1(6);
      line2 === 6 ? setLine2(18) : setLine2(6);
    }} className="hamburger">
    <svg viewBox="0 0 24 24" width="60" height="60" fill="none" stroke="#343334" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="3" y1="12" x2="21" y2="12" />
    <line x1="3" y1="6" x2="21" y2={line1} />
    <line x1="3" y1="18" x2="21" y2={line2} />
</svg>
    </div>
    <div className="sidenav" style={{display: height}}> 
        <Link className="nextlink" style={{height: height}} href={'/home'}> <div className="nav_item">  Home </div> </Link>
        <Link className="nextlink" style={{height: height}} href={'/abot'}> <div className="nav_item">  About </div> </Link>
        <Link className="nextlink" style={{height: height}} href={'/projects'}> <div className="nav_item">  Projects </div> </Link>
        <Link className="nextlink" style={{height: height}} href={'/contact'}> <div className="nav_item">  Contact </div> </Link>
    </div>
    </>
  )
}
