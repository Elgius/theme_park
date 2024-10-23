"use client";
import React, { useState } from "react";
// import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { ArrowLeft, Info } from "lucide-react";

type Ticket = {
  name: string;
  price: number;
  earlyBirdRate: number;
};

const tickets: Ticket[] = [
  {
    name: "Jingle Fest - Adult/Child (+16) - Santa No Gift",
    price: 18.0,
    earlyBirdRate: 18.0,
  },
  {
    name: "Jingle Fest - Child 0-1 - Santa Visit",
    price: 11.0,
    earlyBirdRate: 11.0,
  },
  {
    name: "Jingle Fest - Child 2-4 - Santa Visit",
    price: 30.0,
    earlyBirdRate: 30.0,
  },
  {
    name: "Jingle Fest - Child 5-12 - Santa Visit",
    price: 34.0,
    earlyBirdRate: 34.0,
  },
  {
    name: "Jingle Fest - Carer With Santa - No Gift",
    price: 0.0,
    earlyBirdRate: 0.0,
  },
];

export default function Page() {
  //   const router = useRouter();
  const [quantities, setQuantities] = useState<Record<string, number>>(
    Object.fromEntries(tickets.map((ticket) => [ticket.name, 0]))
  );

  const updateQuantity = (ticketName: string, delta: number) => {
    setQuantities((prev) => ({
      ...prev,
      [ticketName]: Math.max(0, prev[ticketName] + delta),
    }));
  };

  const totalQuantity = Object.values(quantities).reduce(
    (sum, q) => sum + q,
    0
  );
  const totalPrice = tickets.reduce(
    (sum, ticket) => sum + ticket.price * quantities[ticket.name],
    0
  );

  return (
    <div className="max-w-4xl mx-auto p-4">
      <header className="flex items-center mb-6">
        <Button variant="ghost" className="mr-2">
          <ArrowLeft className="h-6 w-6" />
        </Button>
        <h1 className="text-2xl font-bold">Select Ticket Quantity</h1>
      </header>

      <div className="grid md:grid-cols-3 gap-6">
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Ticket Selection</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-600 mb-4">
              Each booking is treated as one group and will enter the park and
              visit Santa together, we cannot split groups on the day. If your
              group will not check in together, please book tickets separately.
            </p>
            <h2 className="text-xl font-semibold mb-4">Select quantity</h2>
            {tickets.map((ticket) => (
              <div
                key={ticket.name}
                className="flex items-center justify-between py-2 border-b"
              >
                <div>
                  <p className="font-medium">{ticket.name}</p>
                  <div className="flex items-center">
                    <Info className="h-4 w-4 text-yellow-500 mr-1" />
                    <span className="text-sm text-green-600">
                      Early bird rate €{ticket.earlyBirdRate.toFixed(2)}
                    </span>
                  </div>
                </div>
                <div className="flex items-center">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => updateQuantity(ticket.name, -1)}
                    disabled={quantities[ticket.name] === 0}
                  >
                    -
                  </Button>
                  <span className="mx-2 w-8 text-center">
                    {quantities[ticket.name]}
                  </span>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => updateQuantity(ticket.name, 1)}
                  >
                    +
                  </Button>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Ticket Summary</CardTitle>
          </CardHeader>
          <CardContent>
            {tickets.map(
              (ticket) =>
                quantities[ticket.name] > 0 && (
                  <div
                    key={ticket.name}
                    className="flex justify-between items-center mb-2"
                  >
                    <span className="text-sm">{ticket.name}</span>
                    <div className="flex items-center">
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-6 w-6 min-w-6"
                        onClick={() => updateQuantity(ticket.name, -1)}
                      >
                        -
                      </Button>
                      <span className="mx-2 w-6 text-center">
                        {quantities[ticket.name]}
                      </span>
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-6 w-6 min-w-6"
                        onClick={() => updateQuantity(ticket.name, 1)}
                      >
                        +
                      </Button>
                    </div>
                  </div>
                )
            )}
            <div className="mt-4 pt-4 border-t">
              <div className="flex justify-between font-semibold">
                <span>Total</span>
                <span>€{totalPrice.toFixed(2)}</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="mt-6">
        <Button
          className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-3"
          disabled={totalQuantity === 0}
        >
          Continue
        </Button>
      </div>
    </div>
  );
}
