"use client";
import React from "react";
import { WebBundyCard } from "./components/web-bundy-card";
import { AnnoucementCard } from "./components/annoucement-card";
import Link from "next/link";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";
import moment from "moment";

const HomePage = () => {
  return (
    <div className="flex py-4">
      <Toaster />
      <div className="flex justify-evenly w-full gap-4">
        <div className=" w-full ">
          <div className="flex flex-col gap-4">
            <AnnoucementCard />
          </div>
        </div>
        <div className=" w-[600rem]">
          <div className="grid grid-cols-7 grid-rows-8 gap-1">
            <Link
              href="/document-tracking"
              className="text-white col-span-2 row-span-8 bg-no-repeat bg-cover bg-center h-[40rem] w-full rounded-md shadow-md flex flex-col justify-end font-bold p-4 bg-gradient-to-r from-fuchsia-500 to-pink-500 "
            >
              Document Tracking
            </Link>

            <Link
              onClick={() => {
                toast("Page is still in development", {
                  description: `${moment().format("LLL")}`,
                  action: {
                    label: "Okay",
                    onClick: () => console.log("Okay"),
                  },
                });
                console.log("Test");
              }}
              href="#"
              className="text-white col-span-3 row-span-4 col-start-3  bg-gradient-to-r from-fuchsia-500 to-pink-500 h-full rounded-md shadow-md flex flex-col justify-end font-bold p-4"
            >
              ProcureNet
            </Link>
            <Link
              onClick={() => {
                toast("Page is still in development", {
                  description: `${moment().format("LLL")}`,
                  action: {
                    label: "Okay",
                    onClick: () => console.log("Okay"),
                  },
                });
                console.log("Test");
              }}
              href="#"
              className="text-white col-span-3 row-span-4 col-start-3 row-start-5 bg-gradient-to-r from-fuchsia-500 to-pink-500 h-full rounded-md shadow-md flex flex-col justify-end font-bold p-4"
            >
              Integrations
            </Link>
            <Link
              onClick={() => {
                toast("Page is still in development", {
                  description: `${moment().format("LLL")}`,
                  action: {
                    label: "Okay",
                    onClick: () => console.log("Okay"),
                  },
                });
                console.log("Test");
              }}
              href="#"
              className="text-white col-span-2 row-span-2 col-start-6 row-start-1 bg-gradient-to-r from-fuchsia-500 to-pink-500 sh-full rounded-md shadow-md flex flex-col justify-end font-bold p-4"
            >
              Weekly Reports
            </Link>
            <Link
              onClick={() => {
                toast("Page is still in development", {
                  description: `${moment().format("LLL")}`,
                  action: {
                    label: "Okay",
                    onClick: () => console.log("Okay"),
                  },
                });
                console.log("Test");
              }}
              href="#"
              className="text-white col-span-2 row-span-4 col-start-6 row-start-3 bg-gradient-to-r from-fuchsia-500 to-pink-500 h-full rounded-md shadow-md flex flex-col justify-end font-bold p-4"
            >
              Meetings
            </Link>
            <Link
              onClick={() => {
                toast("Page is still in development", {
                  description: `${moment().format("LLL")}`,
                  action: {
                    label: "Okay",
                    onClick: () => console.log("Okay"),
                  },
                });
                console.log("Test");
              }}
              href="#"
              className="text-white col-span-2 row-span-2 col-start-6 row-start-7 bg-gradient-to-r from-fuchsia-500 to-pink-500 h-full rounded-md shadow-md flex flex-col justify-end font-bold p-4"
            >
              Employee Roster
            </Link>
          </div>
        </div>
        <div className=" w-full ">
          <div className="flex flex-col gap-4">
            <div className="row-span-4 col-start-8 row-start-1 ">
              <WebBundyCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
