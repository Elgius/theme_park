import * as React from "react"
import Link from "next/link"


export function Footer() {
    return (
        <div className="bg-indigo-900 h-1/2 w-full flex md:flex-row flex-col justify-around items-start p-20 ">
               <div className="grid md:grid-cols-4 gap-12 font-bold cursor-pointer">

          <div className="block text-slate-400 text-center hover:bg-slate-400 hover:text-indigo-900 border-none py-2 px-4 rounded-full transition-colors duration-300">
            <Link href={"/about"}>
            About</Link>
            
          </div>
          <div className="block text-slate-400 text-center hover:bg-slate-400 hover:text-indigo-900 border-none py-2 px-4 rounded-full transition-colors duration-300">
            Contact
          </div>
          <div className="block text-slate-400 text-center hover:bg-slate-400 hover:text-indigo-900 border-none py-2 px-4 rounded-full transition-colors duration-300">
            Visitor Information
          </div>
          <div className="block text-slate-400 text-center hover:bg-slate-400 hover:text-indigo-900 border-none py-2 px-4 rounded-full transition-colors duration-300">
            Terms and Conditions
          </div>
        </div>

        </div>
     
    )

}