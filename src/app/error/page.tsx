import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { AlertCircle } from "lucide-react";
import Link from "next/link";

export default function ErrorPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Card className="w-[380px]">
        <CardHeader>
          <div className="flex items-center gap-2">
            <AlertCircle className="h-6 w-6 text-red-500" />
            <CardTitle>Authentication Error</CardTitle>
          </div>
          <CardDescription>There was a problem signing you in.</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-gray-600">
            We couldn&apos;t authenticate you. This could be due to an incorrect
            email/password combination or a temporary server issue.
          </p>
        </CardContent>
        <CardFooter className="flex flex-col gap-2">
          <Button asChild className="w-full">
            <Link href="/auth/signin">Try Again</Link>
          </Button>
          <Button variant="outline" asChild className="w-full">
            <Link href="/support">Contact Support</Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
