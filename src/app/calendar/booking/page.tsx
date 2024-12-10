"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  BookingForm,
  BookingFormHeader,
  BookingFormSidebar,
  BookingFormContent,
} from "@/components/ui/booking-form";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Trash2, PlusCircle } from "lucide-react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

interface Person {
  id: number;
  firstName: string;
  lastName: string;
  nidPassport: string;
  emailAddress: string;
  age: string;
  contact: string;
}

interface PayerDetails {
  cardHolder: string;
  cardNumber: string;
  expiryDate: "";
  cvv: "";
}
export default function BookingPage() {
  const links = [
    { href: "/calendar/", label: "Date" },
    { href: "/calendar/booking", label: "Guest Info" },
    { href: "/calendar/booking/hotelbooking", label: "Hotel" },
    { href: "/payment", label: "Payment" },
  ];

// export default function Component() {
  const [people, setPeople] = useState<Person[]>([
    {
      id: 1,
      firstName: "",
      lastName: "",
      nidPassport: "",
      emailAddress: "",
      age: "",
      contact: "",
    },
  ]);

  const [payer, setPayer] = useState<PayerDetails[]>([
    { cardHolder: "", cardNumber: "", expiryDate: "", cvv: "" },
  ]);

  const addPerson = () => {
    const newId =
      people.length > 0 ? Math.max(...people.map((p) => p.id)) + 1 : 1;
    setPeople([
      ...people,
      {
        id: newId,
        firstName: "",
        lastName: "",
        nidPassport: "",
        emailAddress: "",
        age: "",
        contact: "",
      },
    ]);
  };

  const addPayer = (field: keyof PayerDetails, value: string) => {
    setPayer({
      ...payer,
      [field]: value,
    });
  };

  const removePerson = (id: number) => {
    setPeople(people.filter((person) => person.id !== id));
  };

  const updatePerson = (id: number, field: keyof Person, value: string) => {
    setPeople(
      people.map((person) =>
        person.id === id ? { ...person, [field]: value } : person
      )
    );
  };

  const [isClicked, setIsClicked] = useState(false);

  const clickText = () => {
    setIsClicked(!isClicked);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", people);
    // Here you would typically send the data to your backend
  };

  return (
    <BookingForm title="Theme Park Name" subtitle="Step 2 of 4" links={links}>
    <BookingFormHeader />
    <div className="grid md:grid-cols-5 ou">
      <BookingFormSidebar className="md:col-span-1" />
      <BookingFormContent  >
      <form onSubmit={handleSubmit} className="md:col-span-4 ">
        {/* Guest Info */}
        <Card  noOutline noShadow>
          <CardHeader>
            {/* <CardTitle className="text-2xl font-bold">Guest Information</CardTitle> */}
          </CardHeader>
          <CardContent noOutline noShadow>
            {/* eslint-disable-next-line @typescript-eslint/no-unused-vars */}
            {people.map((person, index) => (
              <div key={person.id} className="mb-6 p-4  ">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-sm font-semibold">
                    {" "}
                    Guest Information
                  </h3>
                  {/* <h3 className="text-lg font-semibold">  {index + 1}</h3> */}
                  {people.length > 1 && (
                    <Button
                      type="button"
                      variant="destructive"
                      size="icon"
                      onClick={() => removePerson(person.id)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  )}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor={`firstName-${person.id}`}>
                      First Name
                    </Label>
                    <Input
                      id={`firstName-${person.id}`}
                      value={person.firstName}
                      onChange={(e) =>
                        updatePerson(person.id, "firstName", e.target.value)
                      }
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor={`lastName-${person.id}`}>Last Name</Label>
                    <Input
                      id={`lastName-${person.id}`}
                      value={person.lastName}
                      onChange={(e) =>
                        updatePerson(person.id, "lastName", e.target.value)
                      }
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor={`hotelBooking-${person.id}`}>
                      NID/Passport No.
                    </Label>
                    <Input
                      id={`hotelBooking-${person.id}`}
                      value={person.nidPassport}
                      onChange={(e) =>
                        updatePerson(person.id, "nidPassport", e.target.value)
                      }
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor={`hotelBooking-${person.id}`}>Age</Label>
                    <Input
                      id={`hotelBooking-${person.id}`}
                      value={person.age}
                      onChange={(e) =>
                        updatePerson(person.id, "age", e.target.value)
                      }
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor={`contact-${person.id}`}>Contact</Label>
                    <Input
                      id={`contact-${person.id}`}
                      value={person.emailAddress}
                      onChange={(e) =>
                        updatePerson(person.id, "contact", e.target.value)
                      }
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor={`address-${person.id}`}>
                      Email Address
                    </Label>
                    <Input
                      id={`address-${person.id}`}
                      value={person.emailAddress}
                      onChange={(e) =>
                        updatePerson(
                          person.id,
                          "emailAddress",
                          e.target.value
                        )
                      }
                      required
                    />
                  </div>
                </div>
              </div>
            ))}
           
          </CardContent>

        </Card>
        <div className="flex justify-between space-x-4">
        <Button type="button" variant="outline"  className="mt-4 ml-9"
        onClick={addPerson}>
              <PlusCircle className="mr-2 h-4 w-4 mt" />
              Add Another Person
            </Button>
          <div>
            <div className="flex justify-end mt-4 mr-9">
            <Button
              className=" bg-violet-300 hover:bg-violet-400 text-white font-semibold py-3 px-8 "
              type="submit"
            >
              Continue
            </Button>

            </div>

          </div>
        
           

        </div>
        
            
      </form>
      </BookingFormContent>
    </div>
  </BookingForm>
);
}

// export default BookingPage;

