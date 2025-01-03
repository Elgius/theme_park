"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

import { Footer } from "@/components/ui/footer";

import Diving from "@/assets/scubadive.jpg";
import BumperCar from "@/assets/bumpercar.jpg";
import Dinner from "@/assets/romanticdinner.jpg";
import Carousel from "@/assets/carousel.jpg";

import Navbar from '../Navbar'

export default function Page() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    "https://images.unsplash.com/photo-1526762100-0999d11d611c?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d2F0ZXIlMjBwYXJrfGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1640693036854-3dff95e6bf81?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1669570083880-0d9cb0ad1dea?q=80&w=2066&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="min-h-screen overflow-hidden bg-gray-100">
      {/* Header */}  

      <Navbar />
      

      {/* Hero Section */}
      <section className="relative h-[400px]">
        {slides.map((slide, index) => (
          <Image
            key={index}
            src={slide}
            alt={`Slide ${index + 1}`}
            layout="fill"
            objectFit="cover"
            className={`transition-opacity duration-500 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </section>

      {/* Content Section */}
      <section className="container mx-auto px-4 py-8 my-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">
              At &apos;Fun Island&apos;, we cater to all your getaway needs.
            </h2>
            <p className="text-gray-600 mb-4">
              Whether you&apos;re looking to escape the hustle and bustle or indulge in a lavish experience, we&apos;ve got something for everyone. Picture this: crystal-clear waters, golden sandy beaches, luxurious rooms, and exceptional service—all at your fingertips. Our island is designed for those who seek relaxation, adventure, or a combination of both.
              <br />
              <br />
              Relax by the pool, enjoy world-class cuisine, and unwind with our spa treatments. Explore local culture with guided tours or take part in thrilling water sports. With a wide range of activities and amenities, there&apos;s never a dull moment at Fun Island.
              <br />
              <br />
              Experience the island&apos;s natural beauty, and let us take care of the details. From the moment you arrive until the time you depart, Fun Island is your perfect escape. Don&apos;t wait—book your stay with us today and create memories that will last a lifetime.
            </p>
            <div className="my-7 flex flex-col items-center justify-center md:flex-row gap-4">
              <Link href="/events">
                <Button className="bg-violet-300 text-white font-bold w-60 px-6 py-2 rounded-full hover:bg-violet-400">
                  Events
                </Button>
              </Link>
              <Link href="/hotels">
                <Button className="bg-violet-300 text-white font-bold w-60 px-6 py-2 rounded-full hover:bg-violet-400 transition-colors">
                  Hotels
                </Button>
              </Link>
              <Link href="/PassS">
                <Button className="bg-violet-300 text-white font-bold w-60 px-6 py-2 rounded-full hover:bg-violet-400 transition-colors">
                  Book now
                </Button>
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src={Carousel}
              alt="Activity 1"
              width={200}
              height={200}
              layout="fixed"
              className="rounded-lg"
            />
            <Image
              src={Diving}
              alt="Activity 2"
              width={200}
              height={200}
              layout="fixed"
              className="rounded-lg"
            />
            <Image
              src={BumperCar}
              alt="Activity 3"
              width={200}
              height={200}
              className="rounded-lg"
            />
            <Image
              src={Dinner}
              alt="Activity 4"
              width={200}
              height={200}
              className="rounded-lg"
            />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
