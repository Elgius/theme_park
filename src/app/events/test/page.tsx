import Image from "next/image";
import { Button } from "@/components/ui/button";

import Link from "next/link";
import Diving from "@/assets/diver.jpg"

export default function Events() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Theme Park Name</h1>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  About
                </a>
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
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="md:flex">
            <div className="md:flex-shrink-0">
              <Image
              src={Diving}
                // src="https://images.unsplash.com/photo-1517627043994-b991abb62fc8?q=80&w=417&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Diving"
                width={300}
                height={400}
                className="h-48 w-full object-cover md:h-full md:w-48"
              />
            </div>
            <div className="p-8">
              <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                Diving
              </div>
              <h2 className="block mt-1 text-lg leading-tight font-medium text-black">
                Experience our clear blue waters
              </h2>
              <p className="mt-2 text-gray-500">
                Dive into an underwater adventure in our crystal-clear waters.
                Our diving experiences cater to all skill levels, from beginners
                to experienced divers. Explore vibrant coral reefs, encounter
                exotic marine life, and create unforgettable memories beneath
                the waves.
              </p>
              <div className="mt-4">
                <h3 className="font-semibold">Age Requirements:</h3>
                <p>
                  Minimum age: 10 years old. Children aged 10-15 must be
                  accompanied by a parent or guardian.
                </p>
              </div>
              <div className="mt-4">
                <h3 className="font-semibold">Activity Times:</h3>
                <p>
                  Diving sessions are offered daily from 9:00 AM to 4:00 PM,
                  with the last session starting at 2:00 PM.
                </p>
              </div>
              <div className="mt-4">
                <h3 className="font-semibold">Family Offers:</h3>
                <p>
                  Family package available: 2 adults and 2 children (10-15
                  years) at a discounted rate. Includes basic training and
                  equipment rental.
                </p>
              </div>
              <div className="mt-4">
                <h3 className="font-semibold">Price:</h3>
                <p>
                  Starting from $89 per person for a 2-hour session, including
                  equipment rental and basic training.
                </p>
              </div>
              <div className="mt-6">
                <Link href="/PassS">
                <Button className="bg-violet-300 text-white font-bold px-6 py-2 rounded-full hover:bg-violet-400 transition-colors">
                  Book now
                </Button></Link>
               
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
