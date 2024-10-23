"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, ArrowRight, User } from "lucide-react";

const DAYS = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];
const MONTHS = ["October", "November", "December"];

type TicketType = {
  name: string;
  price: number;
  quantity: number;
};

export default function Component() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [currentMonth, setCurrentMonth] = useState(1); // November

  const tickets: TicketType[] = [
    {
      name: "Jingle Fest - Adult/Child (+16) - Santa No Gift",
      price: 18.0,
      quantity: 1,
    },
    {
      name: "Jingle Fest - Child 5-12 - Santa Visit",
      price: 34.0,
      quantity: 1,
    },
    {
      name: "Jingle Fest - Carer With Santa - No Gift",
      price: 0.0,
      quantity: 1,
    },
  ];

  const totalTickets = tickets.reduce(
    (sum, ticket) => sum + ticket.quantity,
    0
  );
  const totalPrice = tickets.reduce(
    (sum, ticket) => sum + ticket.price * ticket.quantity,
    0
  );

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
      <div className="mb-8">
        {/* <div className="flex justify-between items-center mb-4">
          {[1, 2, 3, 4, 5].map((step) => (
            <div key={step} className="flex items-center">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  step === 2 ? "bg-green-600 text-white" : "bg-gray-200"
                }`}
              >
                {step}
              </div>
              {step < 5 && (
                <div
                  className={`h-1 w-16 ${
                    step < 2 ? "bg-green-600" : "bg-gray-200"
                  }`}
                />
              )}
            </div>
          ))}
        </div> */}
        {/* <div className="flex justify-between text-sm">
          <span>1. Ticket Type</span>
          <span className="text-green-600 font-semibold">2. Date</span>
          <span>3. Extras</span>
          <span>4. Personal Details</span>
          <span>5. Payment</span>
        </div> */}
      </div>

      <header className="flex items-center mb-6">
        <Button variant="ghost" className="mr-2">
          <ArrowLeft className="h-6 w-6" />
        </Button>
        <h1 className="text-2xl font-bold">Select Date</h1>
        <span className="ml-auto text-gray-500">Step 2 of 5</span>
      </header>

      <div className="grid md:grid-cols-3 gap-6">
        <Card className="md:col-span-2">
          <CardHeader>
            <div className="flex justify-between items-center">
              <Button
                variant="ghost"
                onClick={() => setCurrentMonth((prev) => Math.max(0, prev - 1))}
                disabled={currentMonth === 0}
              >
                <ArrowLeft className="h-4 w-4" />
              </Button>
              <CardTitle>{MONTHS[currentMonth]}</CardTitle>
              <Button
                variant="ghost"
                onClick={() => setCurrentMonth((prev) => Math.min(2, prev + 1))}
                disabled={currentMonth === 2}
              >
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-7 gap-2 text-center">
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
                      ? "bg-yellow-300"
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

        <Card>
          <CardHeader>
            <CardTitle>Ticket Summary</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <p className="font-semibold">Date</p>
                <p>
                  {selectedDate
                    ? selectedDate.toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                      })
                    : "Nov, 30"}
                </p>
                <p>16:40</p>
              </div>
              <div className="flex items-center">
                <User className="mr-2" />
                <span>{totalTickets}</span>
              </div>
              {tickets.map((ticket, index) => (
                <div key={index} className="flex justify-between">
                  <span>{ticket.name}</span>
                  <span>{ticket.quantity}</span>
                </div>
              ))}
              <div className="pt-4 border-t">
                <div className="flex justify-between font-semibold">
                  <span>Total</span>
                  <span>€{totalPrice.toFixed(2)}</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="mt-6 flex justify-between">
        <Button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-3 px-8">
          Continue
        </Button>
        <Button variant="outline" className="text-red-500 border-red-500">
          09:57
        </Button>
      </div>
    </div>
  );
}
