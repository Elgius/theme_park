"use client";

// pre-zod

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function PersonalDetailsPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    contactNumber: "",
    billingCountry: "India",
    billingAddressLine1: "",
    billingAddressLine2: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
    // router.push('')
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <Button variant="ghost" className="mb-4" onClick={() => router.back()}>
        <ChevronLeft className="mr-2 h-4 w-4" /> Back
      </Button>
      <h1 className="text-3xl font-bold mb-6">Personal Details</h1>
      <div className="grid md:grid-cols-3 gap-6">
        <form onSubmit={handleSubmit} className="md:col-span-2 space-y-4">
          <div className="grid gap-4">
            <div>
              <Label htmlFor="firstName">First name*</Label>
              <Input
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <Label htmlFor="lastName">Last name*</Label>
              <Input
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <Label htmlFor="email">Email*</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <Label htmlFor="contactNumber">Contact Number*</Label>
              <Input
                id="contactNumber"
                name="contactNumber"
                type="tel"
                value={formData.contactNumber}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4">Billing Details</h2>
            <div className="grid gap-4">
              <div>
                <Label htmlFor="island">Billing Address Island*</Label>
                <Input id="island" />
              </div>
              <div>
                <Label htmlFor="billingAddressLine1">
                  Billing Address Line 1*
                </Label>
                <Input
                  id="billingAddressLine1"
                  name="billingAddressLine1"
                  value={formData.billingAddressLine1}
                  onChange={handleInputChange}
                  placeholder="Name of house"
                  required
                />
              </div>
              <div>
                <Label htmlFor="billingAddressLine2">
                  Billing Address Line 2
                </Label>
                <Input
                  id="billingAddressLine2"
                  name="billingAddressLine2"
                  placeholder="name of street"
                  value={formData.billingAddressLine2}
                  onChange={handleInputChange}
                />
              </div>
            </div>
          </div>
          <Button type="submit" className="w-full">
            Continue to Payment
          </Button>
        </form>
        <div>
          {/* this is sample data */}
          <Card>
            <CardHeader>
              <CardTitle>Ticket Summary</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Date</span>
                  <span>Nov, 30 16:40</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Attendees</span>
                  <span className="flex items-center">
                    3{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="ml-1 w-4 h-4"
                    >
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                  </span>
                </div>
                <div className="border-t pt-2">
                  <div className="flex justify-between">
                    <span>Jingle Fest - Adult/Child (+16) - Santa No Gift</span>
                    <span>1</span>
                  </div>
                  <div className="text-right">€18.00</div>
                </div>
                <div className="border-t pt-2">
                  <div className="flex justify-between">
                    <span>Jingle Fest - Child 5-12 - Santa Visit</span>
                    <span>1</span>
                  </div>
                  <div className="text-right">€34.00</div>
                </div>
                <div className="border-t pt-2">
                  <div className="flex justify-between">
                    <span>Jingle Fest - Carer With Santa - No Gift</span>
                    <span>1</span>
                  </div>
                  <div className="text-right">€0.00</div>
                </div>
                <div className="border-t pt-2 font-bold">
                  <div className="flex justify-between">
                    <span>Total Price</span>
                    <span>€52.00</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="mt-4">
            <CardHeader>
              <CardTitle>Have a gift card?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm mb-2">
                Enter your gift card number here to redeem the amount off your
                tickets
              </p>
              <div className="flex space-x-2">
                <Input placeholder="Gift card number" />
                <Button>Apply</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
