'use client';

import Link from "next/link";
import { useState } from "react";

export default function Sidenav() {
   const [height, setHeight] = useState("-100vw");
   const [area, setArea] = useState("false");

   const linkClick = () => {
        setHeight("-100vw");
        setArea("false")
   }

  return (<>
    <div onClick={() => {

      height === "0vw" ? setHeight("-100vw") : setHeight("0vw");
      area === "false" ? setArea("true") : setArea("false");

    }} aria-expanded={area} className="hamburger">
    <svg viewBox="0 0 24 24" width="60" height="60" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line className="line2" x1="3" y1="12" x2="21" y2="12" />
    <line className="line1" x1="3" y1="6" x2="21" y2="6" />
    <line className="line3" x1="3" y1="18" x2="21" y2="18" />
</svg>
    </div>
    <div className="sidenav" style={{ marginLeft: height}}> 
        <Link onClick={linkClick} className="nextlink" href={'/'}>
          <div className="nav_item">
             <div> Home </div>
          </div>
        </Link>
        <Link onClick={linkClick} className="nextlink" href={'/about'}>
          <div className="nav_item">
             <div> About </div>
          </div>
        </Link>
        <Link onClick={linkClick} className="nextlink" href={'/contact'}>
          <div className="nav_item">
             <div> Contact </div>
          </div>
        </Link>
        <Link onClick={linkClick} className="nextlink" href={'/projects'}>
          <div className="nav_item">
             <div> Projects </div>
          </div>
        </Link>
       
    </div>
    </>
  )
}
