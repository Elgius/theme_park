"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import image from "@/assets/Ferris.jpg";
import { useEffect, useState } from "react";
import axios from "axios";

interface Sevents {
  id: number;
  name: string;
  title: string;
  age: string;
  description: string;
  family_offers: boolean;
  price: string;
  event_id: string;
}

export default function EventDetails({ eventId }: { eventId: string }) {
  const [sEvent, setSEvent] = useState<Sevents | null>(null);

  useEffect(() => {
    async function fetchEventDetails() {
      try {
        const response = await axios.post("/api/eventDetails", {
          id: eventId,
        });

        if (!response.data.success) {
          alert("Contact support");
          throw new Error(
            `There seems to be a problem from our side. HTTP status: ${response.status}`
          );
        }
        const data = response.data.event;

        console.log("Full API Response:", data);

        setSEvent(data);
      } catch (error) {
        console.error(
          "There has been an error when communicating with server",
          error
        );
      }
    }
    fetchEventDetails();
  }, [eventId]);

  if (!sEvent) {
    return <div>Loading...</div>;
  }

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
                src={image}
                alt="ferris"
                width={300}
                height={400}
                className="h-48 w-full object-cover md:h-full md:w-48"
              />
            </div>
            <div className="p-8">
              <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                {sEvent.name}
              </div>
              <h2 className="block mt-1 text-lg leading-tight font-medium text-black">
                {sEvent.title}
              </h2>
              <p className="mt-2 text-gray-500">{sEvent.description}</p>
              <div className="mt-4">
                <h3 className="font-semibold">Age Requirements:</h3>
                <p>{sEvent.age}</p>
              </div>
              <div className="mt-4">
                <h3 className="font-semibold">Family Offers:</h3>
                <p>{sEvent.family_offers ? "Yes" : "No"}</p>
              </div>
              <div className="mt-4">
                <h3 className="font-semibold">Price:</h3>
                <p>{sEvent.price}</p>
              </div>
              <div className="mt-6">
                <Link href="/PassS">
                  <Button className="bg-violet-300 text-white font-bold px-6 py-2 rounded-full hover:bg-violet-400 transition-colors">
                    Book now
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
