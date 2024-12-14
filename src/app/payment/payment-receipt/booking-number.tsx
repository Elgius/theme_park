"use client";

import { useState, useEffect } from "react";

function generateBookingNumber() {
  return Math.random().toString(36).substring(2, 10).toUpperCase();
}

export default function BookingNumber() {
  const [bookingNumber, setBookingNumber] = useState("");

  useEffect(() => {
    setBookingNumber(generateBookingNumber());
  }, []);

  return (
    <div className="text-center">
      <p className="font-semibold mb-2">Your Booking Number:</p>
      <div className="bg-gray-100 p-3 rounded-lg">
        <span className="text-2xl font-mono font-bold text-blue-600">
          {bookingNumber}
        </span>
      </div>
    </div>
  );
}
