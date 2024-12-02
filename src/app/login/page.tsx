import { LoginForm } from "@/components/login-form";

export default function Page() {
  return (
    <div className="flex h-screen w-full items-center justify-center px-4 bg-gradient-to-b from-blue-400 via-red-500 to-yellow-600">
      <LoginForm />
    </div>
  );
}
