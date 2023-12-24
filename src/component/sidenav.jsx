'use client';

import Link from "next/link";
import { useState } from "react";

export default function Sidenav() {
   const [height, setHeight] = useState("0vw");
  return (<>
    <div onClick={() => {
      height === "0vw" ? setHeight("-100vw") : setHeight("0vw");
    }} className="hamburger">
    <svg viewBox="0 0 24 24" width="60" height="60" fill="none" stroke="#343334" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line className="line2" x1="3" y1="12" x2="21" y2="12" />
    <line className="line1" x1="3" y1="6" x2="21" y2="6" />
    <line className="line3" x1="3" y1="18" x2="21" y2="18" />
</svg>
    </div>
    <div className="sidenav" style={{ marginLeft: height}}> 
        <Link className="nextlink" href={'/home'}> <div className="nav_item">  Home </div> </Link>
        <Link className="nextlink" href={'/abot'}> <div className="nav_item">  About </div> </Link>
        <Link className="nextlink" href={'/projects'}> <div className="nav_item">  Projects </div> </Link>
        <Link className="nextlink" href={'/contact'}> <div className="nav_item">  Contact </div> </Link>
    </div>
    </>
  )
}
