"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,

} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Trash2 } from "lucide-react";



interface Booking {
  id: number;
  hotel: string;
  numRooms: string;
  roomType: string;
  firstName: string;
  lastName: string;
  contact: string;
  email: string,
  comments: string;
}

import {
  BookingForm,
  BookingFormHeader,
  BookingFormSidebar,
  BookingFormContent,
} from "@/components/ui/booking-form";


// interface PayerDetails {

//   cardHolder: string;
//   cardNumber: string;
//   expiryDate: "",
//   cvv: "",
// }

export default function BookingPage() {
  const links = [
    { href: "/calendar/", label: "Date" },
    { href: "/calendar/booking", label: "Guest Info" },
    { href: "/calendar/booking/hotelbooking", label: "Hotel" },
    { href: "/payment", label: "Payment" },
  ];
  
  const [bookings, setBookings] = useState<Booking[]>([
    {
      id: 1,
      hotel: "",
      numRooms: "",
      roomType: "",
      firstName: "",
      lastName: "",
      contact: "",
      email: "",
      comments: "",
    },
  ]);

  const addBooking = () => {
    const newId = bookings.length > 0 ? Math.max(...bookings.map((b) => b.id)) + 1 : 1;
    setBookings([
      ...bookings,
      {
        id: newId,
        hotel: "",
        numRooms: "",
        roomType: "",
        firstName: "",
        lastName: "",
        contact: "",
        email: "",
        comments: "",

      },
    ]);
  };

  const removeBooking = (id: number) => {
    setBookings(bookings.filter((booking) => booking.id !== id));
  };

  const updateBooking = (id: number, field: keyof Booking, value: string) => {
    setBookings(
      bookings.map((booking) =>
        booking.id === id ? { ...booking, [field]: value } : booking
      )
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", bookings);
    // Submit the bookings data to your backend
  };

  const [isClicked, setIsClicked] = useState(false);

 
  return (
    <BookingForm title="Theme Park Name" subtitle="Step 3 of 4" links={links}>
    <BookingFormHeader />
    <div className="grid md:grid-cols-5 ou">
      <BookingFormSidebar className="md:col-span-1" />
      <BookingFormContent  >
      <form onSubmit={handleSubmit} className="md:col-span-4 "> 
        {/* Guest Info */}
        <Card noOutline noShadow>
         <CardHeader>
          {/* <CardTitle className="text-2xl font-bold">Guest Information</CardTitle> */}
         </CardHeader>
         <CardContent>
         {bookings.map((booking) => (
              <div key={booking.id} className="mb-6 p-4 border rounded-lg">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-semibold"></h3>
                  {bookings.length > 1 && (
                    <Button
                      type="button"
                      variant="destructive"
                      size="icon"
                      onClick={() => removeBooking(booking.id)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  )}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor={`hotel-${booking.id}`}>Select Hotel</Label>
                    <select
                      id={`hotel-${booking.id}`}
                      className="border rounded-md p-2 w-full"
                      value={booking.hotel}
                      onChange={(e) =>
                        updateBooking(booking.id, "hotel", e.target.value)
                      }
                      required
                    >
                      <option value="">Select a hotel</option>
                      <option value="Hotel A">Sunset Hotel</option>
                      <option value="Hotel B">Stone Hotel</option>
                      <option value="Hotel C">Village Inn</option>
                    </select>
                  </div>
                  <div>
                    <Label htmlFor={`numRooms-${booking.id}`}>Number of Rooms</Label>
                    <Input
                      id={`numRooms-${booking.id}`}
                      type="number"
                      value={booking.numRooms}
                      onChange={(e) =>
                        updateBooking(booking.id, "numRooms", e.target.value)
                      }
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor={`roomType-${booking.id}`}>Room Type</Label>
                    <select
                      id={`roomType-${booking.id}`}
                      className="border rounded-md p-2 w-full"
                      value={booking.roomType}
                      onChange={(e) =>
                        updateBooking(booking.id, "roomType", e.target.value)
                      }
                      required
                    >
                      <option value="">Select a room type</option>
                      <option value="Single">Single</option>
                      <option value="Double">Double</option>
                      <option value="Suite">Suite</option>
                    </select>
                  </div>
                </div>
                <div>
                  <h2 className="text-sm font-semibold py-10">
                      {" "}
                      Contact Person Information
                    </h2>
                    
                  </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                      <Label htmlFor={`firstName-${booking.id}`}>First Name</Label>
                      <Input
                        id={`firstName-${booking.id}`}
                        value={booking.firstName}
                        onChange={(e) =>
                          updateBooking(booking.id, "firstName", e.target.value)
                        }
                        required
                      />
                    </div>
                    <div>
                    <Label htmlFor={`lastName-${booking.id}`}>Last Name</Label>
                    <Input
                      id={`lastName-${booking.id}`}
                      value={booking.lastName}
                      onChange={(e) =>
                        updateBooking(booking.id, "lastName", e.target.value)
                      }
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor={`contact-${booking.id}`}>Contact</Label>
                    <Input
                      id={`contact-${booking.id}`}
                      value={booking.contact}
                      onChange={(e) =>
                        updateBooking(booking.id, "contact", e.target.value)
                      }
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor={`email-${booking.id}`}>Email</Label>
                    <Input
                      id={`email-${booking.id}`}
                      value={booking.email}
                      onChange={(e) =>
                        updateBooking(booking.id, "email", e.target.value)
                      }
                      required
                    />
                  </div> 
                </div>
 
                  <div className="md:col-span-2">
                    <Label htmlFor={`comments-${booking.id}`}>Additional Comments</Label>
                    <textarea
                      id={`comments-${booking.id}`}
                      className="border rounded-md p-2 w-full"
                      value={booking.comments}
                      onChange={(e) =>
                        updateBooking(booking.id, "comments", e.target.value)
                      }
                    />
                  </div>
              </div>
            ))}
            {/* <Button type="button" variant="outline" onClick={addBooking}>
              <PlusCircle className="mr-2 h-4 w-4" />
              Add Another Booking
            </Button> */}
          </CardContent>
          <CardFooter className="flex justify-end">
            <Button type="submit" className="bg-violet-300 hover:bg-violet-400 text-white font-semibold py-2 px-4">
              Continue
            </Button>
          </CardFooter>
        <div className="divide-y divide-dashed">
        
      </div>
      </Card> 
      </form> 
      </BookingFormContent>
    </div>
  </BookingForm>
  );
}


