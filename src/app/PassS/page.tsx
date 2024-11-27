"use client";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

import Image from "next/image";
import React from "react";

import Ferris from "@/assets/Ferris.jpg";
import MerryGoROund from "@/assets/merryGoRound.jpg";
import AdsModal from "@/components/modals/adsModal";

//

export default function Page() {
  return (
    <>
      <main className="p-23 flex justify-center items-center min-h-screen overflow-hidden flex-col gap-10">
        {/* normal pass */}
        <div className="mt-10 flex md:flex-row lg:flex-row gap-10 flex-col ">
          <Card className="w-[350px] hover:shadow-xl bg-gray-300 ">
            <CardHeader className="text-center text-2xl font-bold">
              Normal Pass
            </CardHeader>
            <CardContent className="flex items-center justify-center flex-col">
              <div className="w-[250px] p-4">
                <Image
                  src={Ferris}
                  alt="Themepark"
                  width={200}
                  height={100}
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div>
                <h1 className=" text-xl font-bold">
                  Get your tickets to your liking
                </h1>
              </div>
            </CardContent>
            <CardFooter className="flex items-center justify-center">
              <AdsModal />
            </CardFooter>
          </Card>
          {/* Premium pass */}
          <Card className="w-[350px] hover:shadow-lg bg-gray-300">
            <CardHeader className="text-center text-2xl font-bold">
              Premium Pass
            </CardHeader>
            <CardContent className="flex flex-col items-center justify-center">
              <div className="w-[250px] p-4">
                <Image
                  src={MerryGoROund}
                  alt="Themepark"
                  width={200}
                  height={100}
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div>
                <h1 className=" text-xl font-bold">
                  Get your tickets to your liking
                </h1>
              </div>
            </CardContent>
            <CardFooter className="flex items-center justify-center">
              <AdsModal />
            </CardFooter>
          </Card>
        </div>
      </main>
    </>
  );
}
