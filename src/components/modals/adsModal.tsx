import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import {
  Modal,
  ModalTrigger,
  ModalBody,
  ModalContent,
  ModalFooter,
} from "../ui/animated-modal";
import { Button } from "../ui/button";
import Image from "next/image";

export default function AdsModal() {
  const images = [
    "https://images.unsplash.com/photo-1517322048670-4fba75cbbb62?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1573790387438-4da905039392?q=80&w=3425&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1555400038-63f5ba517a47?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1554931670-4ebfabf6e7a9?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1546484475-7f7bd55792da?q=80&w=2581&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];

  const link1 = `/billing`;
  return (
    <Modal>
      <ModalTrigger className="bg-purple-300 text-black  flex justify-center group/modal-btn w-[15rem] rounded-full">
        <span className="group-hover/modal-btn:translate-x-40 text-center transition duration-500">
          Continue
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
          <div className="py-10 grid grid-cols-2 gap-6 max-w-sm mx-auto">
            <div className="flex flex-col items-center justify-center bg-red-50 p-4 rounded-lg shadow hover:shadow-md transition duration-300 cursor-pointer">
              <div className="text-2xl text-blue-500">
                🌊 {/* Replace with a relevant Water sports icon */}
              </div>
              <div className="text-lg font-medium text-gray-700 mt-2">Water Sports</div>
            </div>
            <div className="flex flex-col items-center justify-center bg-red-50 p-4 rounded-lg shadow hover:shadow-md transition duration-300 cursor-pointer">
              <div className="text-2xl text-blue-500">
                🍖 {/* Replace with a relevant BBQ icon */}
              </div>
              <div className="text-lg font-medium text-gray-700 mt-2">BBQ Party</div>
            </div>
            <div className="flex flex-col items-center justify-center bg-red-50 p-4 rounded-lg shadow hover:shadow-md transition duration-300 cursor-pointer">
              <div className="text-2xl text-blue-500">
                🤝 {/* Replace with a relevant Welcome Crew icon */}
              </div>
              <div className="text-lg font-medium text-gray-700 mt-2">Welcoming Crew</div>
            </div>
            <div className="flex flex-col items-center justify-center bg-red-50 p-4 rounded-lg shadow hover:shadow-md transition duration-300 cursor-pointer">
              <div className="text-2xl text-blue-500">
                🍽️ {/* Replace with a relevant Buffet icon */}
              </div>
              <div className="text-lg font-medium text-gray-700 mt-2">All Day Buffet</div>
            </div>
            <div className="flex flex-col items-center justify-center bg-red-50 p-4 rounded-lg shadow hover:shadow-md transition duration-300 cursor-pointer">
              <div className="text-2xl text-blue-500">
                🎭 {/* Replace with a relevant Cultural Exhibition icon */}
              </div>
              <div className="text-lg font-medium text-gray-700 mt-2">Cultural Exhibition</div>
            </div>
          </div>

        </ModalContent>
        <ModalFooter className="gap-4 justify-center">
          <Link href={link1}>
            <Button className="bg-black text-white dark:bg-white dark:text-black text-sm px-6 py-2 rounded-lg">
              Book Now
            </Button>
          </Link>
        </ModalFooter>
      </ModalBody>
    </Modal>
  );
}
