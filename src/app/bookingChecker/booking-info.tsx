"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

// Define the structure of a booking
interface Booking {
  id: string;
  name: string;
  attractions: string[];
  hotel: string;
  arrival: string;
  departure: string;
  pass: string;
}

// Mock function to simulate fetching booking data
const fetchBookingInfo = async (
  bookingNumber: string
): Promise<Booking | null> => {
  // Simulating an API call
  await new Promise((resolve) => setTimeout(resolve, 1000));

  // Mock data
  const bookings: Record<string, Booking> = {
    "001": {
      id: "001",
      name: "John Doe",
      attractions: ["Cosmic Coaster", "Splash Mountain"],
      hotel: "Magic Castle Inn",
      arrival: "2023-07-01",
      departure: "2023-07-05",
      pass: "Normal",
    },
    // Add more mock bookings as needed
  };

  return bookings[bookingNumber] || null;
};

const updateBookingInfo = async (updatedBooking: Booking): Promise<Booking> => {
  // Simulating an API call
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return updatedBooking;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const deleteBookingInfo = async (bookingId: string): Promise<boolean> => {
  // Simulating an API call
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return true;
};

export default function BookingInfo() {
  const [bookingNumber, setBookingNumber] = useState("");
  const [booking, setBooking] = useState<Booking | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editedBooking, setEditedBooking] = useState<Booking | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    try {
      const result = await fetchBookingInfo(bookingNumber);
      if (result) {
        setBooking(result);
        setEditedBooking(result);
      } else {
        setError("Booking not found. Please check your booking number.");
      }
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (err) {
      setError("An error occurred while fetching the booking information.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    setEditedBooking(booking);
  };

  const handleSaveEdit = async () => {
    if (!editedBooking) return;

    setIsLoading(true);
    setError(null);
    try {
      const updatedBooking = await updateBookingInfo(editedBooking);
      setBooking(updatedBooking);
      setIsEditing(false);
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (err) {
      setError("An error occurred while updating the booking information.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async () => {
    if (!booking) return;

    setIsLoading(true);
    setError(null);
    try {
      await deleteBookingInfo(booking.id);
      setBooking(null);
      setEditedBooking(null);
      setBookingNumber("");
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (err) {
      setError("An error occurred while deleting the booking information.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!editedBooking) return;
    setEditedBooking({ ...editedBooking, [e.target.name]: e.target.value });
  };

  return (
    <div className="container mx-auto p-4">
      <Card className="w-full max-w-md mx-auto">
        <CardHeader>
          <CardTitle>Booking Information</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="bookingNumber">Booking Number</Label>
              <Input
                id="bookingNumber"
                type="text"
                placeholder="Enter your booking number"
                value={bookingNumber}
                onChange={(e) => setBookingNumber(e.target.value)}
                required
              />
            </div>
            <Button type="submit" disabled={isLoading}>
              {isLoading ? "Loading..." : "View Booking"}
            </Button>
          </form>

          {error && <p className="mt-4 text-red-500">{error}</p>}

          {booking && !isEditing && (
            <div className="mt-6 space-y-2">
              <h3 className="text-lg font-semibold">Booking Details</h3>
              <p>
                <strong>Name:</strong> {booking.name}
              </p>
              <p>
                <strong>Booking ID:</strong> {booking.id}
              </p>
              <p>
                <strong>Hotel:</strong> {booking.hotel}
              </p>
              <p>
                <strong>Arrival:</strong> {booking.arrival}
              </p>
              <p>
                <strong>Departure:</strong> {booking.departure}
              </p>
              <p>
                <strong>Pass Type:</strong> {booking.pass}
              </p>
              <div>
                <strong>Attractions:</strong>
                <ul className="list-disc list-inside">
                  {booking.attractions.map((attraction, index) => (
                    <li key={index}>{attraction}</li>
                  ))}
                </ul>
              </div>
              <div className="flex space-x-2 mt-4">
                <Button onClick={handleEdit}>Edit</Button>
                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <Button variant="destructive">Delete</Button>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>
                        Are you absolutely sure?
                      </AlertDialogTitle>
                      <AlertDialogDescription>
                        This action cannot be undone. This will permanently
                        delete your booking information.
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Cancel</AlertDialogCancel>
                      <AlertDialogAction onClick={handleDelete}>
                        Delete
                      </AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </div>
            </div>
          )}

          {isEditing && editedBooking && (
            <form className="mt-6 space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  name="name"
                  value={editedBooking.name}
                  onChange={handleInputChange}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="hotel">Hotel</Label>
                <Input
                  id="hotel"
                  name="hotel"
                  value={editedBooking.hotel}
                  onChange={handleInputChange}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="arrival">Arrival</Label>
                <Input
                  id="arrival"
                  name="arrival"
                  type="date"
                  value={editedBooking.arrival}
                  onChange={handleInputChange}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="departure">Departure</Label>
                <Input
                  id="departure"
                  name="departure"
                  type="date"
                  value={editedBooking.departure}
                  onChange={handleInputChange}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="pass">Pass Type</Label>
                <Input
                  id="pass"
                  name="pass"
                  value={editedBooking.pass}
                  onChange={handleInputChange}
                />
              </div>
              <div className="flex space-x-2">
                <Button onClick={handleSaveEdit} disabled={isLoading}>
                  {isLoading ? "Saving..." : "Save Changes"}
                </Button>
                <Button onClick={handleCancelEdit} variant="outline">
                  Cancel
                </Button>
              </div>
            </form>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
