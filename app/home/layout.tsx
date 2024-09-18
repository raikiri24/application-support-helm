"use client";
import Footer from "@/components/footer";
import NavigationHeader from "@/components/navigation-header";
import NavigationSubHeader from "@/components/navigation-subheader";
import store from "@/lib/_redux/store";
import React from "react";
import { Provider } from "react-redux";
const FaqsLayout = ({ children }: React.PropsWithChildren) => {
  return (
    <Provider store={store}>
      <NavigationHeader />
      <NavigationSubHeader />
      <div className="px-10"> {children}</div>
      <Footer />
    </Provider>
  );
};

export default FaqsLayout;
