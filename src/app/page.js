'use client';
import Sidenav from '../component/sidenav'
import Image from 'next/image';
// import myphoto from '../../public/photos/myphoto.png'


export default function Home() {
  
  return (
      <>
      <Sidenav/>
       <div className="container">
        {/* <img src={myphoto.src} alt="Picture of the author" className="myphoto"></img>  */}
       </div>
      </>
  )
}
