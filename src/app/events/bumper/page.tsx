import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import bumperCar from "@/assets/bumpercar.jpg";
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
                src={bumperCar}
                alt="Bumper Car"
                width={300}
                height={400}
                className="h-48 w-full object-cover md:h-full md:w-48 rounded-lg"
              />
            </div>
            <div className="p-6 md:p-8">
              <div className="uppercase tracking-wide text-sm text-indigo-600 font-semibold mb-2">
                Bumper Car
              </div>
              <p className="text-gray-700 leading-relaxed">
                Get ready for high-energy fun in our bumper car arena! Whether you’re with friends or family, our bumper cars guarantee a thrilling experience as you race, spin, and crash into one another. It’s the perfect activity for adrenaline lovers and those looking to release some energy in a safe and controlled environment.
              </p>
              <div className="mt-4">
                <h3 className="font-semibold text-gray-800">Age Requirements:</h3>
                <p className="text-gray-600">Minimum age: 5 years old. Children under 12 must be accompanied by an adult.</p>
              </div>
              <div className="mt-4">
                <h3 className="font-semibold text-gray-800">Activity Times:</h3>
                <p className="text-gray-600">Available daily from 10:00 AM to 6:00 PM.</p>
              </div>
              <div className="mt-4">
                <h3 className="font-semibold text-gray-800">Price:</h3>
                <p className="text-gray-600">$15 for a 10-minute session.</p>
              </div>
              <div className="mt-6">
                <Link href="/PassS">
                  <Button className="bg-violet-500 text-white font-bold px-6 py-2 rounded-full hover:bg-violet-600 transition-colors">
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
