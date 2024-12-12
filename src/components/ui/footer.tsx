import * as React from "react"
import Link from "next/link"


export function Footer() {
    return (
        <div className="bg-indigo-900 h-1/2 w-full flex md:flex-row flex-col justify-around items-start p-20 ">
               <div className="grid md:grid-cols-4 gap-12 font-bold cursor-pointer">
          <div className="block text-slate-400 hover:text-white transition-colors duration-300">
            <Link href={"/about"}>
            About</Link>
            
          </div>
          <div className="block text-slate-400 hover:text-white  ">
            Contact
          </div>
          <div className="block text-slate-400 hover:text-white  transition-colors duration-300">
            Visitor Information
          </div>
          <div className="block text-slate-400 hover:text-white  transition-colors duration-300">
            Terms and Conditions
          </div>
        </div>

        </div>
     
    )

}