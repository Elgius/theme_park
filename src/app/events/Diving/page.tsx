import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Diving from "@/assets/diver.jpg";

import Navbar from '../../Navbar'

export default function Events() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      <main className="container mx-auto px-4 py-10">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="md:flex">
            <div className="md:flex-shrink-0">
              <Image
                src={Diving}
                alt="Diving"
                width={400}
                height={300}
                className="h-64 w-full object-cover md:h-full md:w-64"
              />
            </div>
            <div className="p-6 md:p-8">
              <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                Diving
              </div>
              <h2 className="mt-1 text-2xl font-semibold text-gray-800 leading-tight">
                Experience Our Clear Blue Waters
              </h2>
              <p className="mt-2 text-gray-600">
                Dive into an underwater adventure in our crystal-clear waters.
                Our diving experiences cater to all skill levels, from beginners
                to experienced divers. Explore vibrant coral reefs, encounter
                exotic marine life, and create unforgettable memories beneath
                the waves.
              </p>

              <div className="mt-6">
                <h3 className="font-semibold text-gray-800">Age Requirements:</h3>
                <p className="text-gray-600">
                  Minimum age: 10 years old. Children aged 10-15 must be
                  accompanied by a parent or guardian.
                </p>
              </div>

              <div className="mt-4">
                <h3 className="font-semibold text-gray-800">Activity Times:</h3>
                <p className="text-gray-600">
                  Diving sessions are offered daily from 9:00 AM to 4:00 PM,
                  with the last session starting at 2:00 PM.
                </p>
              </div>

              <div className="mt-4">
                <h3 className="font-semibold text-gray-800">Family Offers:</h3>
                <p className="text-gray-600">
                  Family package available: 2 adults and 2 children (10-15
                  years) at a discounted rate. Includes basic training and
                  equipment rental.
                </p>
              </div>

              <div className="mt-4">
                <h3 className="font-semibold text-gray-800">Price:</h3>
                <p className="text-gray-600">
                  Starting from $89 per person for a 2-hour session, including
                  equipment rental and basic training.
                </p>
              </div>

              <div className="mt-6">
                <Link href="/PassS">
                  <Button className="bg-violet-300 text-white font-bold px-6 py-2 rounded-full hover:bg-violet-400 transition-colors">
                    Book Now
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
