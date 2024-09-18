import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function WebBundyCard() {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Web Bundy</CardTitle>
      </CardHeader>
      <CardContent>{Date()}</CardContent>
      <CardFooter className="flex justify-between">
        <Button className=" text-xs">Time In</Button>
        <Button className="text-xs">Time Out</Button>
      </CardFooter>
    </Card>
  );
}
