"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";


import {
  BookingForm,
  BookingFormHeader,
  BookingFormSidebar,
  BookingFormContent,
} from "@/components/booking-form";
import { Footer } from "@/components/ui/footer";



const DAYS = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];
const MONTHS = ["October", "November", "December"];

// type TicketType = {
//   name: string;
//   price: number;
//   quantity: number;
// };

export default function BookingPage() {

  const links = [
    { href: "/calendar/", label: "Date" },
    { href: "/calendar/booking", label: "Guest Info" },
    { href: "/calendar/booking/hotelbooking", label: "Hotel" },
    { href: "/payment", label: "Payment" },
  ];
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [currentMonth, setCurrentMonth] = useState(1); // November
 

 
  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   console.log("Form submitted:", people);
  //   // Here you would typically send the data to your backend
  // };

  // legacy code

  // const tickets: TicketType[] = [
  //   {
  //     name: "Jingle Fest - Adult/Child (+16) - Santa No Gift",
  //     price: 18.0,
  //     quantity: 1,
  //   },
  //   {
  //     name: "Jingle Fest - Child 5-12 - Santa Visit",
  //     price: 34.0,
  //     quantity: 1,
  //   },
  //   {
  //     name: "Jingle Fest - Carer With Santa - No Gift",
  //     price: 0.0,
  //     quantity: 1,
  //   },
  // ];

  // const totalTickets = tickets.reduce(
  //   (sum, ticket) => sum + ticket.quantity,
  //   0
  // );
  // const totalPrice = tickets.reduce(
  //   (sum, ticket) => sum + ticket.price * ticket.quantity,
  //   0
  // );

  const generateCalendar = () => {
    const year = 2024;
    const month = currentMonth + 9; // Adjusting for 0-based months
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const calendar = [];

    for (let i = 0; i < 35; i++) {
      const day = i - (firstDay - 1);
      if (day > 0 && day <= daysInMonth) {
        calendar.push(day);
      } else {
        calendar.push(null);
      }
    }

    return calendar;
  };

  const calendar = generateCalendar();

  return (
    <div className="min-h-screen overflow-hidden bg-white-100">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Fun Island</h1>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <Link href="/main" className="text-gray-600 hover:text-gray-900"> Home</Link>
                {/* <a href="#" className="text-red-600 hover:text-red-800">
                  Home
                </a> */}
              </li>
              <li>
              <Link href="/about" className="text-gray-600 hover:text-gray-900">  About</Link>
                {/* <a href="#" className="text-gray-600 hover:text-gray-900">
                  About
                </a> */}
              </li>
              <li>
                <a href="/PassS" className="text-gray-600 hover:text-gray-900">
                  Tickets
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Contact
                </a>
              </li>
              <li>
                <a href="/login" className="text-gray-600 hover:text-gray-900">
                  Login
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    
    <BookingForm title="" subtitle="Step 1 of 4" links={links}>
      <BookingFormHeader />
      <div className="grid md:grid-cols-5 ou">
        <BookingFormSidebar className="md:col-span-1" />
        <BookingFormContent  >
        <Card className="bg-white md:col-span-4" noOutline noShadow>
            <CardHeader>
              <div className="flex justify-between items-center">
                <Button
                  variant="ghost"
                  onClick={() =>
                    setCurrentMonth((prev) => Math.max(0, prev - 1))
                  }
                  disabled={currentMonth === 0}
                >
                  <ArrowLeft className="h-4 w-4" />
                </Button>
                <CardTitle>{MONTHS[currentMonth]}</CardTitle>
                <Button
                  variant="ghost"
                  onClick={() =>
                    setCurrentMonth((prev) => Math.min(2, prev + 1))
                  }
                  disabled={currentMonth === 2}
                >
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </CardHeader>
            <CardContent >
              <div className="grid grid-cols-7 text-center">
                {DAYS.map((day) => (
                  <div key={day} className="font-semibold text-green-800">
                    {day}
                  </div>
                ))}
                {calendar.map((day, index) => (
                  <Button
                    key={index}
                    variant={day === 30 ? "default" : "ghost"}
                    className={`h-10 ${
                      day === 23
                        ? "bg-red-100"
                        : day === 30
                        ? "bg-green-400"
                        : ""
                    }`}
                    onClick={() =>
                      day &&
                      setSelectedDate(new Date(2024, currentMonth + 9, day))
                    }
                    disabled={!day}
                  >
                    {day}
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card> 
          <div className="mt-6 " >
          <Card noOutline noShadow>
          <CardContent className="" >
              <Button variant="outline" className="text-red-500 border-red-500">
                09:57
              </Button>
            </CardContent>
          </Card>
            </div>
              <div className="flex justify-end mt-4 mr-9">
                <Link href="/calendar/booking">
                <Button
                className=" bg-violet-300 hover:bg-violet-400 text-white font-semibold py-3 px-8 "
                type="submit"
              >
                Continue
              </Button></Link>
             
            </div>
        </BookingFormContent>
      </div>
    </BookingForm>
    <Footer/>
    </div>
  );
}

