import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import image from "@/assets/fWheel.jpg";
import Navbar from '../../Navbar'

export default function FerrisWheel() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      <main className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="md:flex">
            <div className="md:flex-shrink-0">
              <Image
                src={image}
                alt="Ferris wheel"
                width={300}
                height={400}
                className="h-48 w-full object-cover md:h-full md:w-48"
              />
            </div>
            <div className="p-8">
              <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Ferris Wheel</div>
              <p className="mt-2 text-gray-500">Take in breathtaking views from the top of our giant Ferris wheel. Ideal for couples, families, and anyone seeking a relaxing ride above the ground.</p>
              <div className="mt-4">
                <h3 className="font-semibold">Age Requirements:</h3>
                <p>No minimum age, but children must be accompanied by an adult.</p>
              </div>
              <div className="mt-4">
                <h3 className="font-semibold">Activity Times:</h3>
                <p>Daily from 10:00 AM to 8:00 PM.</p>
              </div>
              <div className="mt-4">
                <h3 className="font-semibold">Price:</h3>
                <p>$10 per person.</p>
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
