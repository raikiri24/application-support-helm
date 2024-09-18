"use client";
import SharedLayoutFaqs from "@/components/modules/faqs/SharedLayoutFaqs";
import React from "react";
const FaqsLayout = ({ children }: React.PropsWithChildren) => {
  return <SharedLayoutFaqs>{children}</SharedLayoutFaqs>;
};

export default FaqsLayout;
