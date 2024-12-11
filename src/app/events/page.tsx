"use client";

import Image from "next/image";
import Link from "next/link";

import Diving from "@/assets/diving.jpg";
import RomanticDinner from "@/assets/romanticdinner.jpg";
import BumperCar from "@/assets/bumpercar.jpg";
import FerrisWheel from "@/assets/carousel.jpg";
import Surfing from "@/assets/surfing.jpg";
import { useEffect, useState } from "react";
import axios from "axios";

const activities = [
  {
    name: "Diving",
    image: Diving,
    link: "Diving",
  },
  {
    name: "Bumper car Rides",
    image: BumperCar,
    link: "bumper",
  },
  {
    name: "ferris wheel ride",
    image: FerrisWheel,
    link: "ferris",
  },
  {
    name: "surfing",
    image: Surfing,
    link: "surfing",
  },

  {
    name: "Romantic Dinner",
    image: RomanticDinner,
    link: "rdinner",
  },
];

interface Events {
  id: number;
  name: string;
  image: string;
}

export default function Component() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [event, setEvents] = useState<Events[]>([]);

  useEffect(() => {
    async function puller() {
      try {
        const response = await axios.get("/api/events");

        if (!response.data.success) {
          alert("Contact support, the server is down.");
          throw new Error(
            `There was a problem with data fetching. HTTP status: ${response.status}`
          );
        }

        const data = response.data.events; // Access the correct key
        console.log("This is your data: ", data);
        setEvents(data);
      } catch (error) {
        console.error("Error with the DB:", error);
      }
    }
    puller();
  }, []);

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
        <>
          <h1 className="text-center m-5 text-2xl capitalize font-bold">
            Our daily Events
          </h1>
        </>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {activities.map((activity, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <Image
                src={activity.image}
                alt={activity.name}
                width={300}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-lg font-semibold text-center cursor-pointer">
                  <Link href={`/events/${activity.link}`}>{activity.name}</Link>
                </h2>
              </div>
            </div>
          ))}
        </div>

        {/* data from the server */}
        <h1 className="text-center m-10 text-2xl capitalize font-bold">
          Our Special Events
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-5">
          {event.map((events) => (
            <div
              key={events.id}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <Image
                src={events.image}
                alt={events.name}
                width={300}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-lg font-semibold text-center cursor-pointer">
                  <Link href="/events/test">{events.name}</Link>
                </h2>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
