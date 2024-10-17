"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalTrigger,
} from "@/components/ui/animated-modal";
import { motion } from "framer-motion";

export default function Page() {
  const bookingLink = "/date";
  const images = [
    "https://images.unsplash.com/photo-1517322048670-4fba75cbbb62?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1573790387438-4da905039392?q=80&w=3425&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1555400038-63f5ba517a47?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1554931670-4ebfabf6e7a9?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1546484475-7f7bd55792da?q=80&w=2581&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];

  return (
    <>
      <main className="p-23 flex justify-center items-center min-h-screen overflow-hidden bg-green-400 flex-col gap-10">
        {/* normal pass */}
        <div className="mt-10 flex md:flex-row lg:flex-row gap-10 flex-col">
          <Card className="w-[350px] hover:shadow-xl">
            <div className="flex items-center justify-center mt-4">
              <div className="bg-green-400 rounded-3xl text-green-400">
                placeholder
              </div>
            </div>

            <CardHeader className="text-center text-2xl font-bold">
              Normal Pass
            </CardHeader>
            <CardContent className="flex items-center justify-center">
              <div className="w-[250px] p-4">
                <Image
                  src="https://images.unsplash.com/photo-1519818789158-ac1852595687?q=80&w=327&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Themepark"
                  width={200}
                  height={100}
                  className="rounded-lg shadow-lg"
                />
              </div>
            </CardContent>
            <CardFooter className="flex items-center justify-center">
              <Modal>
                <ModalTrigger className="bg-black dark:bg-white dark:text-black text-white flex justify-center group/modal-btn">
                  <span className="group-hover/modal-btn:translate-x-40 text-center transition duration-500">
                    Learn more
                  </span>
                  <div className="-translate-x-40 group-hover/modal-btn:translate-x-0 flex items-center justify-center absolute inset-0 transition duration-500 text-white z-20">
                    💦
                  </div>
                </ModalTrigger>
                <ModalBody>
                  <ModalContent>
                    <h4 className="text-lg md:text-2xl text-neutral-600 dark:text-neutral-100 font-bold text-center mb-8">
                      Normal Pass
                    </h4>
                    <div className="flex justify-center items-center">
                      {images.map((image, idx) => (
                        <motion.div
                          key={"images" + idx}
                          style={{
                            rotate: Math.random() * 20 - 10,
                          }}
                          whileHover={{
                            scale: 1.1,
                            rotate: 0,
                            zIndex: 100,
                          }}
                          whileTap={{
                            scale: 1.1,
                            rotate: 0,
                            zIndex: 100,
                          }}
                          className="rounded-xl -mr-4 mt-4 p-1 bg-white dark:bg-neutral-800 dark:border-neutral-700 border border-neutral-100 flex-shrink-0 overflow-hidden"
                        >
                          <Image
                            src={image}
                            alt="water images"
                            width="500"
                            height="500"
                            className="rounded-lg h-20 w-20 md:h-40 md:w-40 object-cover flex-shrink-0"
                          />
                        </motion.div>
                      ))}
                    </div>
                    <div className="py-10 flex flex-wrap gap-x-4 gap-y-6 items-start justify-start max-w-sm mx-auto">
                      <div className="flex  items-center justify-center">
                        Water sports
                      </div>
                      <div className="flex  items-center justify-center">
                        BBQ party
                      </div>
                      <div className="flex  items-center justify-center">
                        Welcoming Crew
                      </div>
                    </div>
                  </ModalContent>
                  <ModalFooter className="gap-4">
                    <Button className="bg-black text-white dark:bg-white dark:text-black text-sm px-2 py-1 rounded-md border border-black w-28">
                      Book Now
                    </Button>
                  </ModalFooter>
                </ModalBody>
              </Modal>
            </CardFooter>
          </Card>
          {/* Premium pass */}
          <Card className="w-[350px]">
            <div className="flex items-center justify-center mt-4">
              <div className="bg-green-400 rounded-3xl text-green-400">
                placeholder
              </div>
            </div>

            <CardHeader className="text-center text-2xl font-bold">
              Premium Pass
            </CardHeader>
            <CardContent className="flex items-center justify-center">
              <div className="w-[250px] p-4">
                <Image
                  src="https://images.unsplash.com/photo-1519818789158-ac1852595687?q=80&w=327&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Themepark"
                  width={200}
                  height={100}
                  className="rounded-lg shadow-lg"
                />
              </div>
            </CardContent>
            <CardFooter className="flex items-center justify-center">
              <Modal>
                <ModalTrigger className="bg-black dark:bg-white dark:text-black text-white flex justify-center group/modal-btn">
                  <span className="group-hover/modal-btn:translate-x-40 text-center transition duration-500">
                    Learn more
                  </span>
                  <div className="-translate-x-40 group-hover/modal-btn:translate-x-0 flex items-center justify-center absolute inset-0 transition duration-500 text-white z-20">
                    💦
                  </div>
                </ModalTrigger>
                <ModalBody>
                  <ModalContent>
                    <h4 className="text-lg md:text-2xl text-neutral-600 dark:text-neutral-100 font-bold text-center mb-8">
                      Premium pass
                    </h4>
                    <div className="flex justify-center items-center">
                      {images.map((image, idx) => (
                        <motion.div
                          key={"images" + idx}
                          style={{
                            rotate: Math.random() * 20 - 10,
                          }}
                          whileHover={{
                            scale: 1.1,
                            rotate: 0,
                            zIndex: 100,
                          }}
                          whileTap={{
                            scale: 1.1,
                            rotate: 0,
                            zIndex: 100,
                          }}
                          className="rounded-xl -mr-4 mt-4 p-1 bg-white dark:bg-neutral-800 dark:border-neutral-700 border border-neutral-100 flex-shrink-0 overflow-hidden"
                        >
                          <Image
                            src={image}
                            alt="water images"
                            width="500"
                            height="500"
                            className="rounded-lg h-20 w-20 md:h-40 md:w-40 object-cover flex-shrink-0"
                          />
                        </motion.div>
                      ))}
                    </div>
                    <div className="py-10 flex flex-wrap gap-x-4 gap-y-6 items-start justify-start max-w-sm mx-auto">
                      <div className="flex  items-center justify-center">
                        Water sports
                      </div>
                      <div className="flex  items-center justify-center">
                        BBQ party
                      </div>
                      <div className="flex  items-center justify-center">
                        Welcoming Crew
                      </div>
                    </div>
                  </ModalContent>
                  <ModalFooter className="gap-4">
                    <Button className="bg-black text-white dark:bg-white dark:text-black text-sm px-2 py-1 rounded-md border border-black w-28">
                      Book Now
                    </Button>
                  </ModalFooter>
                </ModalBody>
              </Modal>
            </CardFooter>
          </Card>
        </div>
        {/* Pass selector */}
        <div>
          <Card className="w-[350px] space-y-10 mb-10 shadow-xl ">
            <CardHeader className="text-center text-2xl font-bold">
              Choose A Pass
            </CardHeader>
            <CardContent className="flex items-center justify-center">
              <RadioGroup
                defaultValue="normal"
                className="flex items-center gap-10"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="normal" id="r1" />
                  <Label htmlFor="r1">Normal</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="premium" id="r2" />
                  <Label htmlFor="r2">Premium</Label>
                </div>
              </RadioGroup>
            </CardContent>
            <CardFooter className="flex items-center justify-center">
              <Link href={bookingLink}>
                <Button>Submit</Button>
              </Link>
            </CardFooter>
          </Card>
        </div>
      </main>
    </>
  );
}
