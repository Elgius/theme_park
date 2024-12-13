"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,

  CardHeader,

} from "@/components/ui/card";

import {
  BookingForm,
  BookingFormHeader,
  BookingFormSidebar,
  BookingFormContent,
} from "@/components/booking-form";


import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import Link from "next/link";

import BmlLogo from "@/assets/bml-logo.svg";



// interface Person {
//   id: number;
//   firstName: string;
//   lastName: string;
//   nidPassport: string;
//   emailAddress: string;
//   age: string;
//   contact: string;
// }

interface PayerDetails {
  id: number;
  first_name: string;
  last_name: string;
  contact: string,
  email: string,
  billing_address: string,
  island: string;
}

export default function PaymentPage() {
  const links = [
    { href: "/calendar/", label: "Date" },
    { href: "/calendar/booking", label: "Guest Info" },
    { href: "/calendar/booking/hotelbooking", label: "Hotel" },
    { href: "/payment", label: "Payment" },
  ];

 

  // const [people] = useState<Person[]>([
  //   { id: 1, firstName: "", lastName: "", nidPassport: "", emailAddress: "" , age:"", contact: ""},
  // ]);

  const [payer, setPayerData] = useState<PayerDetails[]>([
    { 
      id: 1, 
      first_name: "", 
      last_name: "", 
      contact: "", 
      email: "", 
      billing_address: "", 
      island: ""
    },
  ]);

  const isFormValid = () => {
    const payerData = payer[0];
    return payerData.first_name && payerData.last_name && payerData.contact && payerData.email && selected;
  };


  

 

 


  // const addPayer = () => {
  //   const newId = payer.length > 0 ? Math.max(...payer.map(p => p.id)) + 1 : 1;  // Generate unique id based on max id
  //   setPayerData([
  //     ...payer,
  //     { id: newId, cardHolder: "", cardNumber: "", expiryDate: "", cvv: "" }
  //   ]);
  // };

  const updatePayer = (id: number, field: keyof PayerDetails, value: string) => {
    setPayerData(
      payer.map((payerDetails) =>
        payerDetails.id === id
          ? { ...payerDetails, [field]: value }
          : payerDetails
      )
    );
  };


 
  
  
  



  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", payer);
     // Here you would typically send the data to your backend
   
  };


  const [selected, setSelected] = useState(false);

  const handleClick = () => {
    setSelected((prev) => !prev); // Toggle the selection state
  };

  return (
  
      <BookingForm title="Theme Park Name" subtitle="Step 4 of 4" links={links}>
      <BookingFormHeader />
      <div className="grid md:grid-cols-5 ">
        <BookingFormSidebar className="md:col-span-1" />
        <BookingFormContent  >
         <form onSubmit={handleSubmit} className="md:col-span-3"> 

              <Card noOutline noShadow>
              <CardHeader>
              
              </CardHeader>

              <CardContent>
                {payer.map((payerDetails) => (
                  <div key={payerDetails.id} className="mb-6 p-4 border rounded-lg">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-lg font-semibold"> Payer Information</h3>
                    
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor={`first_name-${payerDetails.first_name}`}>First Name</Label>
                        <Input
                          id={`first_name-${payerDetails.first_name}`}
                          value={payerDetails.first_name}
                          onChange={(e) =>
                            updatePayer(payerDetails.id, "first_name", e.target.value)
                          }
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor={`last_name-${payerDetails.last_name}`}>Last Name</Label>
                        <Input
                          id={`last_name-${payerDetails.last_name}`}
                          value={payerDetails.last_name}
                          onChange={(e) =>
                            updatePayer(payerDetails.id, "last_name", e.target.value)
                          }
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor={`contact-${payerDetails.contact}`}>
                          Contact
                        </Label>
                        <Input
                          id={`contact-${payerDetails.contact}`}
                          value={payerDetails.contact}
                          onChange={(e) =>
                            updatePayer(payerDetails.id,
                              "contact",
                              e.target.value
                            )
                          }
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor={`email-${payerDetails.email}`}>
                          Email Address
                        </Label>
                        <Input
                          id={`email-${payerDetails.email}`}
                          value={payerDetails.email}
                          onChange={(e) =>
                            updatePayer(payerDetails.id,
                              "email",
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
              <div className="grid grid-cols-2 ml-9">
                <div>
                <div onClick={handleClick}
                    className={`flex items-center gap-1 transition-opacity duration-300 ease-in-out cursor-pointer   ${
                    selected ? "opacity-100 ring-2 ring-slate-400 " : "opacity-50"
                    }`}
                    >
                      {/* <div className="flex items-center space-x-4 ml-9 transition-opacity duration-300 ease-in-out opacity-50 hover:opacity-100 cursor-pointer"> */}
                  <div className="relative ">
                  <Image
                  src={BmlLogo}
                  alt="bml logo" 
                  width={40}
                  height={40}

                   />   
                   
                  </div>
                  <span className="font-bold"> Bank of Maldives</span>
                    
                </div>
                </div>
              </div>

              </Card> 
              
              <div className="flex justify-end mt-4 mr-9">
                <Link href="/payment/payment-gateway">
                <Button
                disabled={!isFormValid()}
                className=" bg-violet-300 hover:bg-violet-400 text-white font-semibold py-3 px-8 "
                type="submit"
              >
                Continue to Payment
              </Button>
              </Link>
              
            </div>

              </form>

              
        
        </BookingFormContent>

       

        
      </div>
      
    </BookingForm>
    



    
  );
}



