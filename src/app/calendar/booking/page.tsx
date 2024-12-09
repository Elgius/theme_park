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

export default function Component() {
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

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
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
    <div className="max-w-4xl mx-auto p-4">
      <div className="mb-8"></div>

      <header className="flex items-center mb-6">
        <Button variant="ghost" className="mr-2">
          <ArrowLeft className="h-6 w-6" />
        </Button>
        <h1 className="text-2xl font-bold"></h1>
        <span className="ml-auto text-gray-500">Step 3 of 5</span>
      </header>

      <div className="grid md:grid-cols-5 ">
        <Card className="bg-violet-50 md:col-span-1">
          <CardHeader>
            <div className="flex justify-between items-center">
              <CardTitle className="text-lg text-center">
                Theme Park Name{" "}
              </CardTitle>
            </div>
            <div>
              <p className="text-xs font-semibold text-center">Booking</p>
            </div>
          </CardHeader>
          <CardContent className=" space-y-8 text-sm font-semibold text-center">
            <br></br>
            <div className="space-x-7">
              <Link href="/calendar/">
                <p
                  className={`text-slate-400 ${
                    isClicked ? "text-black" : "hover:text-black"
                  } transition-colors duration-300`}
                  onClick={clickText} // Trigger clickText when clicked
                >
                  Date
                </p>
              </Link>

              {/* <p className="">Date</p> */}

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

        <form onSubmit={handleSubmit} className="md:col-span-4 ">
          {/* Guest Info */}
          <Card>
            <CardHeader>
              {/* <CardTitle className="text-2xl font-bold">Guest Information</CardTitle> */}
            </CardHeader>
            <CardContent>
              {/* eslint-disable-next-line @typescript-eslint/no-unused-vars */}
              {people.map((person, index) => (
                <div key={person.id} className="mb-6 p-4 border rounded-lg">
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
              <Button type="button" variant="outline" onClick={addPerson}>
                <PlusCircle className="mr-2 h-4 w-4" />
                Add Another Person
              </Button>
            </CardContent>
            <div className="divide-y divide-dashed"></div>

            {/* Payment Info  */}
            <CardContent>
              {/* {payer.map((payerDetails) => (
                <div className="mb-6 p-4 border rounded-lg">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg font-semibold">
                      {" "}
                      Payer Information
                    </h3>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor={`cardHolder-${payerDetails.cardHolder}`}>
                        Card Holder Name
                      </Label>
                      <Input
                        id={`cardHolder-${payerDetails.cardHolder}`}
                        value={payerDetails.cardHolder}
                        onChange={(e) => addPayer("cardHolder", e.target.value)}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor={`cardNumber-${payerDetails.cardNumber}`}>
                        Card Number
                      </Label>
                      <Input
                        id={`cardNumber-${payerDetails.cardNumber}`}
                        value={payerDetails.cardNumber}
                        onChange={(e) => addPayer("cardNumber", e.target.value)}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor={`expiryDate-${payerDetails.expiryDate}`}>
                        Expiry Date
                      </Label>
                      <Input
                        id={`expiryDate-${payerDetails.expiryDate}`}
                        value={payerDetails.expiryDate}
                        onChange={(e) => addPayer("expiryDate", e.target.value)}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor={`hotelBooking-${payerDetails.cvv}`}>
                        CVV
                      </Label>
                      <Input
                        id={`hotelBooking-${payerDetails.cvv}`}
                        value={payerDetails.cvv}
                        onChange={(e) => addPayer("cvv", e.target.value)}
                        required
                      />
                    </div>
                  </div>
                </div>
              ))} */}
            </CardContent>

            <CardFooter className="flex justify-between">
              <Button
                className="bg-violet-300 hover:bg-violet-400 text-white font-semibold py-3 px-8"
                type="submit"
              >
                Submit Booking
              </Button>
            </CardFooter>
          </Card>
        </form>
      </div>
    </div>
  );
}
