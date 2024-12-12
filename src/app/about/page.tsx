// import Image from "next/image";
import Link from "next/link";
import Image from "next/image";

import Watersports from "@/assets/watersports.jpg";
import {Footer} from "@/components/ui/footer";


export default function Component() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Theme Park Name</h1>
          <nav>
            <ul className="flex space-x-4">
              <li>
              <Link href="/main" className="text-red-600 hover:text-red-800"> Home</Link>
                {/* <a href="#" className="text-gray-600 hover:text-gray-900">
                  Home
                </a> */}
              </li>
              <li>
              <Link href="/about" className="text-gray-600 hover:text-gray-900">  About</Link>
              
                {/* <a href="#" className="text-gray-600 hover:text-gray-900">
                 
                </a> */}
              </li>
              <li>
                <a
                  href="#"
                  className="text-red-600 hover:text-red-800 font-semibold"
                >
                  Tickets
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-4 ">
          <div className="">
            <h2 className="font-bold text-4xl">
            About us 
            </h2>         
            <div className="mt-10">
            <Image
            src={Watersports}
                // src="https://images.unsplash.com/photo-1648852231208-21ce6bd2768b?q=80&w=940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Diving"
                width={500}
                height={600}
                className="h-48 w-full object-cover md:h-full "
              />
                {/* Lorem ipsum dolor sit amet, consectetur adipi allltscing elit. Donec pulvinar rabitur vel semper lectus. Fusce blandit felis quis turpis accumsan consequat. In eu arcu eget allerlorem posuere sapien id eniviverra, sit amet condimentum lorem volutpat. Mauris fermentum tortor. */}
            </div>
          </div>
          <div className="ml-9 mt-20 col-span-2 text-justify">
          FunIsland is your ultimate destination for adventures and memories. We are committed to providing an unforgettable experience to all our guests.Whether you&apos;re here for adrenaline-pumping roller coasters, enchanting family attractions, or relaxing scenic areas, we are dedicated to delivering an experience like no other.
          <div className="mt-9">
            We provide a diverse range of attractions,From heart-pounding roller coasters to enchanting family rides, every detail is designed with excitement and wonder in mind. But we&apos;re more than just rides — our vibrant live shows, unique dining experiences, and meticulously themed areas offer something for everyone. Above all, we pride ourselves on exceptional guest service and a commitment to safety, ensuring every visit is as magical as it is memorable.

          
          </div>
          </div>
          <div className="ml-8 mt-20">
            <h3 className="font-bold text-xl">
            Opening hours 
            </h3>
            <div className="text-slate-500 text-sm mt-3 text-justify">
            We will suspend transfer services to Funisland at 2300 and begin at 0600 in the morning. 
            <div className="text-slate-500 text-sm mt-3 text-justify">
            Our events and services will open at 0600, and is subjeted to change. Please check events page for regular updates.
            </div>

            </div>
            
          </div>
        </div>
      </main>
      <Footer/>
    </div>
  );
}
