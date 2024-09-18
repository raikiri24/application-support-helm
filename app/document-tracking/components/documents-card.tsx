import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function DocumentCard() {
  return (
    <Card className="w-[12rem]">
      <CardHeader>
        <CardTitle>Document</CardTitle>
      </CardHeader>
      <CardContent>Lorem ipsum dolor</CardContent>
    </Card>
  );
}
