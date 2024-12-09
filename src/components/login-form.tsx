import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function LoginForm() {
  return (
    <Card className="mx-auto max-w-sm shadow-inner hover:shadow-2xl">
      <CardHeader>
        <CardTitle className="text-3xl flex justify-center mb-2">Login</CardTitle>
        <div className="border-2 w-full border-gray  mb-2"></div>
        <CardDescription className="py-3">
          Enter your email below to login to your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-5">
          <div className="grid gap-3">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="m@example.com"
              required
            />
          </div>
          <div className="grid gap-3">
            <div className="flex items-center">
              <Label htmlFor="password">Password</Label>
              
            </div>
            <Input id="password" type="password" required />
            <div className="flex justify-center">
            <Link href="#" className="text-sm underline">
                Forgot your password?
              </Link>
            {/* <span className="inline-block text-sm underline">
           
            </span> */}
            
            </div>
          </div>
          <Button type="submit" className="w-full">
            Login
          </Button>
        </div>
        <div className="mt-4 text-center text-sm">
          Don&apos;t have an account?{" "}
          <div>
          <Link href="#" className="underline">
            Sign up
          </Link>

          </div>
          
        </div>
      </CardContent>
    </Card>
  );
}
