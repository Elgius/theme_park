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

interface Person {
  id: number;
  firstName: string;
  lastName: string;
  hotelBookingNumber: string;
  address: string;
}

export default function Component() {
  const [people, setPeople] = useState<Person[]>([
    { id: 1, firstName: "", lastName: "", hotelBookingNumber: "", address: "" },
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
        hotelBookingNumber: "",
        address: "",
      },
    ]);
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", people);
    // Here you would typically send the data to your backend
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-4xl mx-auto p-4 space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Booking Details</CardTitle>
        </CardHeader>
        <CardContent>
          {people.map((person, index) => (
            <div key={person.id} className="mb-6 p-4 border rounded-lg">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold">Person {index + 1}</h3>
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
                  <Label htmlFor={`firstName-${person.id}`}>First Name</Label>
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
                    Hotel Booking Number
                  </Label>
                  <Input
                    id={`hotelBooking-${person.id}`}
                    value={person.hotelBookingNumber}
                    onChange={(e) =>
                      updatePerson(
                        person.id,
                        "hotelBookingNumber",
                        e.target.value
                      )
                    }
                    required
                  />
                </div>
                <div className="md:col-span-2">
                  <Label htmlFor={`address-${person.id}`}>Address</Label>
                  <Input
                    id={`address-${person.id}`}
                    value={person.address}
                    onChange={(e) =>
                      updatePerson(person.id, "address", e.target.value)
                    }
                    required
                  />
                </div>
              </div>
            </div>
          ))}
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button type="button" variant="outline" onClick={addPerson}>
            <PlusCircle className="mr-2 h-4 w-4" />
            Add Another Person
          </Button>
          <Button type="submit">Submit Booking</Button>
        </CardFooter>
      </Card>
    </form>
  );
}
