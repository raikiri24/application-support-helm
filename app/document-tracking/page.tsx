import React from "react";
import { Button } from "@/components/ui/button";
import { CircleArrowOutUpRight, Filter } from "lucide-react";
import Link from "next/link";
import { DocumentCard } from "./components/documents-card";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const DocumentTrackingPage = () => {
  return (
    <div className="py-4 px-40">
      <div className="grid grid-cols-5 grid-rows-10 gap-4">
        <div className="col-span-5 rounded-md p-4">
          <h1 className=" text-2xl font-bold">Text</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi velit
            quod fugiat molestias consequatur nesciunt error saepe ea tempora!
            Fugit illum tempore ratione quod ab fugiat quis iusto.
          </p>
        </div>
        <div className="gap-4 col-span-3 col-start-2 row-start-2  rounded-md flex justify-end items-center">
          <Button>Add Document</Button>
          <Button>
            <Filter width={16} height={16} />
          </Button>
        </div>
        <Card className="w-full row-span-2 col-start-5 row-start-2  rounded-md">
          <CardHeader>
            <CardTitle>
              <div className=" flex justify-between items-center ">
                <h1 className=" text-2xl  font-bold">Drafts</h1>

                <Link href="/">
                  <CircleArrowOutUpRight />
                </Link>
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent></CardContent>
        </Card>
        <Card className="row-span-7 col-start-5 row-start-4  rounded-md ">
          <CardHeader>
            <CardTitle>
              <div className=" flex justify-between items-center ">
                <h1 className=" text-2xl  font-bold">Reminders</h1>

                <Link href="/">
                  <CircleArrowOutUpRight />
                </Link>
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent></CardContent>
        </Card>

        <div className="col-span-4 row-span-8 col-start-1 row-start-3  rounded-md ">
          <div className="flex justify-between items-end">
            <h1 className="font-bold text-xl">Document List</h1>
          </div>
          <div className="py-10 flex flex-wrap gap-4 justify-between">
            <DocumentCard />
            <DocumentCard />
            <DocumentCard />
            <DocumentCard />
            <DocumentCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DocumentTrackingPage;
