import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import moment from "moment";

export function WebBundyCard() {
  return (
    <Card className="row-span-5 col-start-7 w-full">
      <CardHeader>
        <CardTitle>Web Bundy</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm">Time In: {moment().format("LTS")}</p>
        <p className="text-sm">Time Out: Pending</p>
      </CardContent>
      <CardFooter className="flex justify-between gap-4">
        <Button className=" text-xs">Time In</Button>
        <Button className="text-xs">Time Out</Button>
      </CardFooter>
    </Card>
  );
}
