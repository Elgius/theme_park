import Image from "next/image";
import { Button } from "@/components/ui/button";

import Navbar from '../../Navbar'

export default function Events() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      <main className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="md:flex">
            <div className="md:flex-shrink-0">
              <Image
                src="https://images.unsplash.com/photo-1648852231208-21ce6bd2768b?q=80&w=940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Diving"
                width={300}
                height={400}
                className="h-48 w-full object-cover md:h-full md:w-48"
              />
            </div>
            <div className="p-8">
              <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                Hotel 1
              </div>
              <h2 className="block mt-1 text-lg leading-tight font-medium text-black">
                Welcome to our fancy hotel
              </h2>
              <p className="mt-2 text-gray-500">Hotel info</p>
              <div className="mt-4">
                <h3 className="font-semibold">Location</h3>
                <p>Location</p>
              </div>
              <div className="mt-4">
                <h3 className="font-semibold">Opening hours</h3>
                <p>some info on their timings</p>
              </div>
              <div className="mt-4">
                <h3 className="font-semibold">Family Offers:</h3>
                <p>Should have family offers</p>
              </div>
              <div className="mt-4">
                <h3 className="font-semibold">Price:</h3>
                <p>Price range</p>
              </div>
              <div className="mt-6">
                <Button className="bg-purple-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 transition-colors">
                  Book now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
