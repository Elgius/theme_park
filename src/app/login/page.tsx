import { LoginForm } from "@/components/login-form";

import Image from "next/image";

import Pool from "@/assets/themepark.png";


export default function Page() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen  bg-gray-100">
      <div className="bg-gray rounded-2xl shadow-2xl flex w-2/3 max-w-4xl">
                <div className="w-3/5 text-white">
               
                    <div className="relative w-full h-full">

                    <Image
                      src={Pool}
                      alt="Themepark"
                      layout="fill"
                      // width={200}
                      // height={100}
                      className="rounded-lg shadow-lg"
                    />

                    
                    </div>
                  
                  {/* <LoginForm /> */}
                  
                </div>
                <div className="w-2/5 ">
              
                  <LoginForm />
                </div>


            </div>


    </div>
   
   
  );
}
