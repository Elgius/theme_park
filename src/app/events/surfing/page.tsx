import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import image from "@/assets/surfing.jpg";

import Navbar from '../../Navbar'

export default function Surfing() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      <main className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="md:flex">
            <div className="md:flex-shrink-0">
              <Image
                src={image}
                alt="Surfing"
                width={300}
                height={400}
                className="h-48 w-full object-cover md:h-full md:w-48"
              />
            </div>
            <div className="p-8">
              <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Surfs Up</div>
              <p className="mt-2 text-gray-500">Catch the waves and experience the thrill of surfing! Our instructors cater to all skill levels.</p>
              <div className="mt-4">
                <h3 className="font-semibold">Age Requirements:</h3>
                <p>Minimum age: 12 years old. Must be accompanied by an adult.</p>
              </div>
              <div className="mt-4">
                <h3 className="font-semibold">Activity Times:</h3>
                <p>Lessons available daily at 8:00 AM, 11:00 AM, and 3:00 PM.</p>
              </div>
              <div className="mt-4">
                <h3 className="font-semibold">Price:</h3>
                <p>$75 for a 1.5-hour lesson, including board rental.</p>
              </div>
              <div className="mt-6">
                <Link href="/PassS">
                  <Button className="bg-violet-300 text-white font-bold px-6 py-2 rounded-full hover:bg-violet-400 transition-colors">Book now</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
