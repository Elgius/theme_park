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
import { login, signup } from "@/app/login/actions";

export function LoginForm() {
  return (
    <Card className="mx-auto max-w-sm shadow-inner hover:shadow-2xl">
      <CardHeader>
        <CardTitle className="text-3xl flex justify-center mb-2">
          Login
        </CardTitle>
        <div className="border-2 w-full border-gray  mb-2"></div>
        <CardDescription className="py-3">
          Enter your email below to login to your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid gap-5">
            <div className="grid gap-3">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="m@example.com"
                required
              />
            </div>
            <div className="grid gap-3">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
              </div>
              <Input id="password" name="password" type="password" required />
              <div className="flex justify-center">
                <Link href="#" className="text-sm underline">
                  Forgot your password?
                </Link>
              </div>
            </div>
            <Button formAction={login} className="w-full">
              Login
            </Button>
          </div>
          <div className="mt-4 text-center text-sm">
            Don&apos;t have an account?{" "}
            <div>
              <Link href="#" className="underline">
                <Button formAction={signup}>Sign up</Button>
              </Link>
            </div>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
