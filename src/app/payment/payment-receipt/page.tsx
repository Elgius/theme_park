import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import BookingNumber from "./booking-number";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function PaymentSuccessPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b bg-red-500 flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center text-green-700">
            Payment Successful
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-center mb-4">
            Thank you for your payment. Your booking has been confirmed.
          </p>
          <BookingNumber />
          <div className="flex items-center justify-center flex-col gap-7">
            <Link href="/main">
              <Button>Go to main page</Button>
            </Link>
            <Link href="/bookingChecker">
              <Button>Go to booking checking page</Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
