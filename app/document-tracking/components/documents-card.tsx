import * as React from "react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

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
