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

export default function Page() {
  return (
    <>
      <main className="p-23 flex justify-center items-center min-h-screen overflow-hidden flex-col gap-10">
        {/* normal pass */}
        <div className=" mt-10 flex md:flex-row lg:flex-row gap-10 flex-col ">
          <Card className="bg-red-50 w-[350px] hover:shadow-xl ">
            <CardHeader className="text-center text-2xl font-bold">
              Event Pass
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
              {/* <div>
                <h1 className=" text-xl font-bold">
                  Get your tickets to your liking
                </h1>
              </div> */}
              <br></br>

              <CardContent className="flex items-center justify-center">
                <div className="text-sm text-slate-500 font-semibold text-justify">
                  {" "}
                  Get your tickets for any event(s) of your choosing! We offer a
                  wide range of activities for you to select from.
                </div>
              </CardContent>
            </CardContent>
            <CardFooter className="flex items-center justify-center">
              <AdsModal />
            </CardFooter>
          </Card>
          {/* Premium pass */}
          <Card className="bg-red-50 w-[350px] hover:shadow-lg">
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
              {/* <div>
                <h1 className=" text-xl font-bold">
                  Get your tickets to your liking
                </h1>
              </div> */}
              <br></br>

              <CardContent className="flex items-center justify-center">
                <div className="text-sm text-slate-500 font-semibold text-justify">
                  {" "}
                  With our premium pass, gain access to all of our daily events.
                </div>
              </CardContent>
              <br></br>
            </CardContent>
            <CardFooter className="flex items-center justify-center">
              <AdsModal />
            </CardFooter>
          </Card>
          {/* Special pass */}
          <Card className="bg-red-50 w-[350px] hover:shadow-lg">
            <CardHeader className="text-center text-2xl font-bold">
              Special Pass
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
              <br />
              <CardContent className="flex items-center justify-center">
                <div className="text-sm text-slate-500 font-semibold text-justify">
                  {" "}
                  Celebrate birthday&apos;s, anniversaries, and other special
                  occasions with us, at a discounted rate!
                </div>
              </CardContent>
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
