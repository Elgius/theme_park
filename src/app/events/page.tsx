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

import Navbar from '../Navbar'

const activities = [
  {
    name: "Diving",
    image: Diving,
    link: "Diving",
  },
  {
    name: "Bumper Car Rides",
    image: BumperCar,
    link: "bumper",
  },
  {
    name: "Ferris Wheel Ride",
    image: FerrisWheel,
    link: "ferris",
  },
  {
    name: "Surfing",
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

        const data = response.data.events;
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
      <Navbar />

      <main className="container mx-auto px-4 py-8">
        <h1 className="text-center m-5 text-2xl capitalize font-bold">Our Daily Events</h1>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {activities.map((activity, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105">
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

        <h1 className="text-center m-10 text-2xl capitalize font-bold">Our Special Events</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-5">
          {event.map((events) => (
            <div key={events.id} className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105">
              <Image
                src={events.image}
                alt={events.name}
                width={300}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-lg font-semibold text-center cursor-pointer">
                  <Link href={`/sEvents/${events.id}`}>{events.name}</Link>
                </h2>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
