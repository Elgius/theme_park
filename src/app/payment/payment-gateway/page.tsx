"use client";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {Checkbox} from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";

import {
  Dialog,
  DialogPortal,
  DialogOverlay,
  DialogTrigger,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import {Loader} from "@/components/ui/loader";

import  {Input} from "@/components/ui/input";
import Link from "next/link";


export default function PaymentPage() {
  

  const today = new Date();


  const currentDate = today.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

 
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const today = new Date();
    const time = today.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true,
    });

    setCurrentTime(time);
  }, []);

  const [referenceNumber, setReferenceNumber] = useState('');

  useEffect(() => {
    
    const generateReferenceNumber = (): string => {
      const timestamp = Date.now(); 
      const randomNum = Math.floor(Math.random() * 10000); 
      return `${timestamp}-${randomNum}`; 
    };

    const generatedReference = generateReferenceNumber();
    setReferenceNumber(generatedReference);
  }, []);


  const [nameOnCard, setNameOnCard] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);

  const handleCheckboxChange = (checked: boolean) => {
    setIsCheckboxChecked(checked);
  };
  const isFormValid = nameOnCard && cardNumber && expiryDate && cvv && isCheckboxChecked;
  const [dialogOpen, setDialogOpen] = useState(false);
  const [loading, setLoading] = useState<boolean>(false); 
  
    
    const handlePayment = () => {
        if (!isFormValid || loading) return;
    
        setDialogOpen(true); 
        setLoading(true); 
        setTimeout(() => {
           
            setLoading(false); 
      }, 2000); 
    };

  


  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   console.log("Form submitted:", people);
  //    // Here you would typically send the data to your backend
   
  // };

  

    

  return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-[url('/assets/bml.png')]">
        <div className="bg-gray  shadow-2xl flex w-2/3 max-w-4xl">
        {/* Payment gateway simulation*/}
          <div className="w-full text-black bg-white ">
              <div className="ml-5">
                  <div className="text-slate-400 text-sm font-bold mt-5"> FUN ISLAND PVT LTD</div>
                  <div className="text-slate-400 text-sm font-bold mt-3"> SOME ADDRESS , MALE&apos;</div>
                {/* static price for now */}
                  <div className="text-slate-900 text-sm font-semibold mt-5"> MVR 1000</div>
                  <div> <Checkbox checked={isCheckboxChecked} onCheckedChange={handleCheckboxChange}/> I agree to the terms and conditions of FUN ISLAND PVT LTD</div>
                  <div className="mt-5 mr-5 "> <Separator/> </div>
                  <div className="flex justify-between items-center mr-5">  
                      <div className="text-slate-400 text-sm font-bold"> Total</div>
                      <div className="text-slate-900 text-sm font-semibold"> MVR 1000</div>
                  </div>
                  <div className="mt-5  mr-5"> <Separator/> </div>
                  <div className="mr-5 mt-5"> 
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button   disabled={!isCheckboxChecked} className="bg-red-600 hover:bg-red-700 w-full text-white font-bold">
                            Pay now  
                            </Button>
                        </DialogTrigger>
                        <DialogPortal>
                            <DialogOverlay />
                            <DialogContent>
                                <DialogHeader>
                                  <DialogTitle/>
                                </DialogHeader>
                                <DialogDescription>
                                <div className="text-slate-400 text-sm font-bold mt-5"> FUN ISLAND PVT LTD</div>
                                <div className="text-slate-400 text-sm font-bold mt-3"> SOME ADDRESS , MALE&apos;</div>
                                {/* static price for now */}
                                <div className="text-slate-900 text-sm font-semibold mt-5"> MVR 1000</div>
                                <Separator className="mt-5"/>
                                <Input 
                                      className="mt-3"  
                                      placeholder="Name on Card" 
                                      value={nameOnCard} 
                                      onChange={(e) => setNameOnCard(e.target.value)}/>
                                <Input 
                                      className="mt-3" 
                                      placeholder="Card Number"
                                      value={cardNumber} 
                                      onChange={(e) => setCardNumber(e.target.value)} />
                                <div className="grid grid-cols-2 mt-3 gap-2">
                                  <div>
                                    <Input 
                                          placeholder="MM/YY"
                                          value={expiryDate} 
                                          onChange={(e) => setExpiryDate(e.target.value)}/>
                                  </div>
                                  <div>
                                    <Input placeholder="CVV"
                                    value={cvv} 
                                    onChange={(e) => setCvv(e.target.value)}/>
                                  </div>
                                </div>
                                </DialogDescription>
                                <Separator className="mt-5"/>
                                <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
                                <DialogOverlay className="fixed inset-0 bg-black/50" />
                                <DialogContent className=" bg-white flex justify-center items-center">
                                <div className="grid grid-cols-1 justify-center items-center">
                                <div className="flex flex-col justify-center items-center text-center">
                                    {/* Display loader or success message */}
                                    {loading ? (
                                    <Loader /> // Show loader inside the dialog
                                    ) : (
                                    <div>Payment Successful!</div> // Display success message
                                    )}

                                    {/* Button below the text */}
                                    <div className="mt-5">
                                    <DialogClose>
                                        <Link href="/payment/payment-receipt">
                                        <Button className="w-full text-white font-bold mt-5">
                                            Close
                                        </Button>
                                        </Link>
                                    </DialogClose>
                                    </div>
                                </div>
                                </div>
                                </DialogContent>
                                <DialogFooter>
                                {/* Payment button */}
                                <DialogTrigger asChild>
                                    <Button
                                    onClick={handlePayment}
                                    disabled={!isFormValid || loading} // Disable button if form is invalid or loading
                                    className="bg-red-600 hover:bg-red-700 w-full text-white font-bold"
                                    >
                                    {loading ? "Processing..." : "Pay Now"}
                                    </Button>
                                </DialogTrigger>
                                </DialogFooter>
                            </Dialog>
                                
                            </DialogContent>
                        </DialogPortal>
                      </Dialog>
                </div>
                <div className="grid grid-cols-2 ">
                  <div className="text-slate-400 font-bold text-sm mb-5 mt-5">
                      <div className="mt-2"> From </div>
                      <div className="mt-2"> Sent on </div>
                      <div className="mt-2"> Reference </div>
                  </div>
                  <div className="text-slate-700 font-bold text-sm mb-5 mt-5">  
                      <div className="mt-2">
                      FunIsland Pvt Ltd
                      </div>
                      <div className="mt-2">
                      {currentDate}, {currentTime}
                      </div>
                      <div className="mt-2">
                        {referenceNumber}
                      </div>
                  </div>
                </div>
              </div>

            </div>
        </div>
      </div>
  );
}



