"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Page() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    "https://images.unsplash.com/photo-1526762100-0999d11d611c?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d2F0ZXIlMjBwYXJrfGVufDB8fDB8fHww",

    "https://images.unsplash.com/photo-1526762100-0999d11d611c?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d2F0ZXIlMjBwYXJrfGVufDB8fDB8fHww",

    "https://images.unsplash.com/photo-1526762100-0999d11d611c?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d2F0ZXIlMjBwYXJrfGVufDB8fDB8fHww",
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
      <header className="bg-white shadow">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Theme Park Name</h1>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <a href="#" className="text-red-600 hover:text-red-800">
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
                  href="/bookings"
                  className="text-gray-600 hover:text-gray-900"
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
              At &apos;Island Name&apos;, we cater to all your get-away needs.
            </h2>
            <p className="text-gray-600 mb-4">
              Imagine some sample text here. It goes on for a few more lines,
              more lines, many many many lines of text, some promotional bs,
              prolly good stuff
            </p>
            <div className="my-7 flex flex-col items-center justify-center md:flex-row gap-4">
              <Link href="/events">
                <Button className="bg-orange-500 text-white w-20 px-6 py-2 rounded-full hover:bg-orange-600 transition-colors">
                  Events
                </Button>
              </Link>
              <Button className="bg-orange-500 text-white w-20 px-6 py-2 rounded-full hover:bg-orange-600 transition-colors">
                Hotels
              </Button>
              <Button className="bg-orange-500 text-white w-20 px-6 py-2 rounded-full hover:bg-orange-600 transition-colors">
                Book now
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="https://images.unsplash.com/photo-1526762100-0999d11d611c?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d2F0ZXIlMjBwYXJrfGVufDB8fDB8fHww"
              alt="Activity 1"
              width={200}
              height={200}
              className="rounded-lg"
            />
            <Image
              src="https://images.unsplash.com/photo-1526762100-0999d11d611c?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d2F0ZXIlMjBwYXJrfGVufDB8fDB8fHww"
              alt="Activity 2"
              width={200}
              height={200}
              className="rounded-lg"
            />
            <Image
              src="https://images.unsplash.com/photo-1526762100-0999d11d611c?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d2F0ZXIlMjBwYXJrfGVufDB8fDB8fHww"
              alt="Activity 3"
              width={200}
              height={200}
              className="rounded-lg"
            />
            <Image
              src="https://images.unsplash.com/photo-1526762100-0999d11d611c?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d2F0ZXIlMjBwYXJrfGVufDB8fDB8fHww"
              alt="Activity 4"
              width={200}
              height={200}
              className="rounded-lg"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
