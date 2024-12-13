import Link from "next/link";
import { Button } from "@/components/ui/button";
import { AlertCircle } from "lucide-react";

export default function ErrorPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full text-center">
        <AlertCircle className="mx-auto h-16 w-16 text-red-500 mb-4" />
        <h1 className="text-2xl font-bold text-gray-800 mb-4">
          Oops! Something went wrong
        </h1>
        <p className="text-gray-600 mb-6">
          We&apos;re sorry, but it seems there was an error processing your
          request. Our team has been notified and is working on resolving the
          issue.
        </p>
        <Link href="/main" passHref>
          <Button className="w-full">Return to Home</Button>
        </Link>
      </div>
    </div>
  );
}
