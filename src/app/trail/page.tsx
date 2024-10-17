"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Book,
  ChevronLeft,
  ChevronRight,
  Facebook,
  Home,
  Instagram,
  Phone,
  // Scale,
  // Ticket,
  User,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const carouselImages = [
  "https://images.unsplash.com/photo-1719642674134-de3f983ba9ec?q=80&w=407&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1534283542176-7cb0c9ac33e0?q=80&w=388&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1602233561016-cc7383ff25da?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

const activities = [
  {
    title: "Thrilling Roller Coaster",
    description:
      "Experience the adrenaline rush on our newest roller coaster with loops and steep drops.",
    image:
      "https://images.unsplash.com/photo-1465996140498-df84be101126?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    duration: "3 minutes",
    minHeight: "48 inches",
  },
  {
    title: "Magical Carousel",
    description:
      "A classic ride for all ages, featuring hand-painted horses and charming music.",
    image:
      "https://images.unsplash.com/photo-1424161318821-cb73e69b9422?q=80&w=872&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    duration: "5 minutes",
    minHeight: "None",
  },
  {
    title: "Water Splash Adventure",
    description:
      "Cool off in our water park area with slides, fountains, and a lazy river.",
    image:
      "https://images.unsplash.com/photo-1526762100-0999d11d611c?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d2F0ZXIlMjBwYXJrfGVufDB8fDB8fHww",
    duration: "All day",
    minHeight: "42 inches for slides",
  },
];

export default function ThemeParkPage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + carouselImages.length) % carouselImages.length
    );
  };

  return (
    <div className=" min-h-screen overflow-hidden">
      <div className="container mx-auto px-4 ">
        {/* sample header */}
        <header className=" text-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative pt-6 pb-16 sm:pb-10">
              <div className="flex flex-col items-center space-y-3">
                {/* <Ticket className="h-16 w-16 text-yellow-300 animate-bounce" /> */}
                <h1
                  className="mt-4 text-4xl sm:text-5xl font-extrabold text-center"
                  style={{ fontFamily: "'Bangers', cursive" }}
                >
                  Cool Theme Park
                </h1>
              </div>
              <nav className="mt-8 flex flex-wrap justify-center gap-4">
                <Link href="/">
                  <Button className=" bg-blue-500 hover:bg-blue-600 space-x-4">
                    <Home className="h-5 w-5 " />

                    <span>Home</span>
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button className=" bg-green-500 hover:bg-green-600">
                    <Phone className="h-5 w-5 mr-2" />
                    <span>Contact</span>
                  </Button>
                </Link>
                {/* <Link href="/legal">
                  <Button className=" bg-purple-500 hover:bg-purple-600">
                    <Scale className="h-5 w-5 mr-2" />
                    <span>Legal</span>
                  </Button>
                </Link> */}
                <Link href="/bookings">
                  <Button className=" bg-emerald-500 hover:bg-emerald-600">
                    <Book className="h-5 w-5 mr-2" />
                    <span>Booking</span>
                  </Button>
                </Link>
                <Link href="/login">
                  <Button className=" bg-emerald-500 hover:bg-emerald-600">
                    <User className="h-5 w-5 mr-2" />
                    <span>login</span>
                  </Button>
                </Link>
              </nav>
            </div>
          </div>
        </header>
        <main className="mt-8">
          <section className="mb-12 relative">
            <div className="relative h-[400px] w-full overflow-hidden rounded-lg">
              {carouselImages.map((src, index) => (
                <Image
                  key={index}
                  src={src}
                  alt={`Theme park attraction ${index + 1}`}
                  fill
                  className={`object-cover transition-opacity duration-500 ${
                    index === currentSlide ? "opacity-100" : "opacity-0"
                  }`}
                />
              ))}
            </div>
            <Button
              variant="outline"
              size="icon"
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80"
              onClick={prevSlide}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80"
              onClick={nextSlide}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </section>

          <section className="mb-12">
            <h2 className="text-xl text-center m-20 font-semibold mb-4">
              Opening hours
            </h2>
            <div className="overflow-x-auto rounded-lg">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border p-2">Opening</th>
                    <th className="border p-2">Closing</th>
                    <th className="border p-2">Entry location</th>
                  </tr>
                </thead>
                <tbody>
                  {[...Array(1)].map((_, index) => (
                    <tr key={index} className="text-center bg-white">
                      <td className="border p-2">6 am</td>
                      <td className="border p-2">12 am</td>
                      <td className="border p-2">Random island</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section className="grid md:grid-cols-3 gap-8 my-10">
            {activities.map((activity, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle>{activity.title}</CardTitle>
                  <CardDescription>{activity.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Image
                    src={activity.image}
                    alt={activity.title}
                    width={300}
                    height={200}
                    className="rounded-lg object-cover w-full"
                  />
                  <div className="mt-4 space-y-2">
                    <p>
                      <strong>Duration:</strong> {activity.duration}
                    </p>
                    <p>
                      <strong>Minimum Height:</strong> {activity.minHeight}
                    </p>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline">Learn More</Button>
                  <Button>Book Now</Button>
                </CardFooter>
              </Card>
            ))}
          </section>

          <>
            <section>
              <footer className="bg-gray-100 py-8 min-w-screen">
                <div className="container mx-auto px-4">
                  <div className="grid md:grid-cols-3 gap-8">
                    <div>
                      <h3 className="text-lg font-semibold mb-2">About</h3>
                      <ul className="space-y-1">
                        <li>
                          <a
                            href="#"
                            className="text-gray-600 hover:text-[#e8a87c]"
                          >
                            DOWNLOADS
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="text-gray-600 hover:text-[#e8a87c]"
                          >
                            CONTACT
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="text-gray-600 hover:text-[#e8a87c]"
                          >
                            TERMS & CONDITIONS
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Contact</h3>
                      <p className="text-gray-600">T: + 960 330 9911</p>
                      <p className="text-gray-600">
                        E: reservations@ThemeParkPage.com
                      </p>
                      <p className="text-gray-600">
                        ThemePark limited, Male&apos;, Maldives
                      </p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Social</h3>
                      <div className="flex space-x-4">
                        <a
                          href="#"
                          className="text-gray-600 hover:text-[#e8a87c]"
                        >
                          <Facebook className="h-6 w-6" />
                        </a>
                        <a
                          href="#"
                          className="text-gray-600 hover:text-[#e8a87c]"
                        >
                          <Instagram className="h-6 w-6" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="mt-8 text-center">
                    <p className="text-gray-600">&copy; Themepark 2024</p>
                  </div>
                </div>
              </footer>
            </section>
          </>
        </main>
      </div>
    </div>
  );
}
