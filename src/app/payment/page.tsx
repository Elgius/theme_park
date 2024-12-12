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
  id: number;
  cardHolder: string;
  cardNumber: string;
  expiryDate: "",
  cvv: "",
}

export default function PaymentPage() {
  const links = [
    { href: "/calendar/", label: "Date" },
    { href: "/calendar/booking", label: "Guest Info" },
    { href: "/calendar/booking/hotelbooking", label: "Hotel" },
    { href: "/payment", label: "Payment" },
  ];

 

  const [people] = useState<Person[]>([
    { id: 1, firstName: "", lastName: "", nidPassport: "", emailAddress: "" , age:"", contact: ""},
  ]);

  const [payer, setPayerData] = useState<PayerDetails[]>([
    { id: 1, cardHolder: "", cardNumber: "", expiryDate: "", cvv: ""},
  ]);

 

 


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
    console.log("Form submitted:", people);
     // Here you would typically send the data to your backend
   
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
                        <Label htmlFor={`cardHolder-${payerDetails.cardHolder}`}>Card Holder Name</Label>
                        <Input
                          id={`cardHolder-${payerDetails.cardHolder}`}
                          value={payerDetails.cardHolder}
                          onChange={(e) =>
                            updatePayer(payerDetails.id, "cardHolder", e.target.value)
                          }
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor={`cardNumber-${payerDetails.cardNumber}`}>Card Number</Label>
                        <Input
                          id={`cardNumber-${payerDetails.cardNumber}`}
                          value={payerDetails.cardNumber}
                          onChange={(e) =>
                            updatePayer(payerDetails.id, "cardNumber", e.target.value)
                          }
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
                          onChange={(e) =>
                            updatePayer(payerDetails.id,
                              "expiryDate",
                              e.target.value
                            )
                          }
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
                          onChange={(e) =>
                            updatePayer(payerDetails.id,
                              "cvv",
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

              {/* <CardFooter className="flex justify-between">
                <Link href="/payment">
                
                <Button className="bg-violet-300 hover:bg-violet-400 text-white font-semibold py-3 px-8" type="submit">Submit Booking</Button>

                </Link>
              </CardFooter> */}
              </Card> 
              
              <div className="flex justify-end mt-4 mr-9">
              <Button
                className=" bg-violet-300 hover:bg-violet-400 text-white font-semibold py-3 px-8 "
                type="submit"
              >
                Continue to Payment
              </Button>
            </div>

              </form>

              
        
        </BookingFormContent>

       

        
      </div>
      
    </BookingForm>
    



    
  );
}



