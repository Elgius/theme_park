"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";

const DAYS = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];
const MONTHS = ["October", "November", "December"];

// type TicketType = {
//   name: string;
//   price: number;
//   quantity: number;
// };

export default function Component() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [currentMonth, setCurrentMonth] = useState(1); // November
  const [isClicked, setIsClicked] = useState(false);

  const clickText = () => {
    setIsClicked(!isClicked);
  };

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
    <div className="max-w-4xl mx-auto p-4">
      <div className="mb-8"></div>

      <header className="flex items-center mb-6">
        <Button variant="ghost" className="mr-2">
          <ArrowLeft className="h-6 w-6" />
        </Button>
        <h1 className="text-2xl font-bold">Select Date</h1>
        <span className="ml-auto text-gray-500">Step 2 of 5</span>
      </header>

      <div className=" mt-10 flex md:flex-row lg:flex-row  flex-col">
        <div className="grid md:grid-cols-5 ">
          <Card className="bg-violet-50 md:col-span-1 ">
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle className="text-lg text-center">
                  Theme Park Name{" "}
                </CardTitle>
              </div>
              <div>
                <p className="text-xs font-semibold text-center">Booking</p>
                {/* <div className=" grid grid-cols-7 gap-2 text-center"> */}
              </div>
            </CardHeader>
            <CardContent className=" text-sm font-semibold text-center">
              <br></br>

              <div className="space-x-7">
                <p className="">Date</p>

                <Link href="/calendar/booking">
                  <p
                    className={`text-slate-400 ${
                      isClicked ? "text-black" : "hover:text-black"
                    } transition-colors duration-300`}
                    onClick={clickText} // Trigger clickText when clicked
                  >
                    Guest Info
                  </p>
                </Link>
                <Link href="/calendar/booking/roombooking">
                  <p
                    className={`text-slate-400 ${
                      isClicked ? "text-black" : "hover:text-black"
                    } transition-colors duration-300`}
                    onClick={clickText} // Trigger clickText when clicked
                  >
                    Hotel
                  </p>
                </Link>
                <Link href="/events">
                  <div>
                    <p
                      className={`text-slate-400 ${
                        isClicked ? "text-black" : "hover:text-black"
                      } transition-colors duration-300`}
                      onClick={clickText}
                    >
                      Payment
                    </p>
                  </div>
                </Link>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white md:col-span-4">
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
            <CardContent>
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
            <CardContent className="">
              <Button variant="outline" className="text-red-500 border-red-500">
                09:57
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="mt-6 flex justify-between">
        <Link href="/hotels">
          <Button className="bg-violet-300 hover:bg-violet-400 text-white font-semibold py-3 px-8">
            Continue
          </Button>
        </Link>
      </div>
    </div>
  );
}
