/* eslint-disable @next/next/no-img-element */
"use client";

import {
  BarChart4,
  CodeXml,
  Download,
  Hourglass,
  Infinity,
  Linkedin,
  NotebookText,
  Plus,
  Receipt,
  Rocket,
  Twitter,
  User,
  Users,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import DemoPreview from "./components/demoPreview";

const Home = () => {
  return (
    <div className="bg-[#f7f7f7] flex justify-center items-center overflow-x-hidden min-h-screen">
      <div className="border-l border-r max-w-4xl w-full mx-auto border-dashed h-full flex justify-center flex-col border-gray-300">
        <div className="justify-center items-center h-full flex flex-col my-10">
          <div className="border-t border-dashed border-gray-300 w-full mx-auto py-10 flex justify-center items-center relative">
            <Plus className="text-orange-500 group-hover:text-orange-500 w-7 h-7 absolute top-0 -translate-x-1/2 -translate-y-1/2 left-0" />
            <Image
              src="/android-chrome-512x512.png"
              width={100}
              height={100}
              className="rounded-lg"
              alt="logo"
            />
          </div>
          <div className="relative group">
            <h1 className="font-semibold text-3xl md:text-7xl text-center w-full border-t border-b py-6 border-dashed text-balance px-4 text-black border-gray-300">
              <span className="">Invoices BP </span>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
