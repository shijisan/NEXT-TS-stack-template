"use client"

import Image from "next/image"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Nav() {

   const path = usePathname();
   const [newPath, setNewPath] = useState("");

   useEffect(() => {
      const splitPath = () => {
         let result = ""
         for (let i = 0; i < path.length; i++) {
            result += path[i] === "/" ? " / " : path[i];
         }
         setNewPath(result);
         console.log(result)
      }
      splitPath();
   }, [])



   return (
      <>
         <nav className="flex md:px-[10vw] h-[8vh] fixed top-0 left-0 w-full bg-primary">
            <div className="flex items-center">
               <Image src={"https://placehold.co/500/webp"} width={32} height={32} alt="placeholder logo" className="me-4" />
               <h1 className="text-3xl me-2">HelpStack</h1>
               <span className="text-lg">{newPath === " / " && " / Home"}</span>
            </div>
            <ul className="flex justify-evenly items-center grow">
               <li>
                  <Link href={"/"}>Home</Link>
               </li>

               <li>
                  <Link href={"/dashboard"}>Dashboard</Link>
               </li>

               <li>
                  <Link href={"/auth"}>Login</Link>
               </li>
            </ul>
         </nav>
      </>
   )
}