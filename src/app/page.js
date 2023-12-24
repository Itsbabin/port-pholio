'use client';
import Sidenav from '../component/sidenav'

import { useState } from "react";

export default function Home() {
  
  const [navHeight, setNavHeight] = useState("");
  return (
      <>
      <Sidenav/>
       hello home
      </>
  )
}
