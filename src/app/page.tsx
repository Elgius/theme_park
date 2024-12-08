// import Image from "next/image";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-gradient-to-b from-blue-300 to-green-500">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div>We in business, auto-deploy mode on + tracking</div>
        <div>
          <Link href="/main">
            <Button>Version 5.0</Button>
          </Link>
        </div>
      </main>
    </div>
  );
}
