import React from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import Link from "next/link";

const NavigationSubHeader = () => {
  return (
    <div className="w-full py-2 shadow-md" id="NavigationBarHeader">
      <NavigationMenu className="max-w-full justify-between px-10 ">
        <NavigationMenuList className="flex gap-4 ">
          <NavigationMenuItem>
            <Link href="/documentation" legacyBehavior passHref>
              Documentation
            </Link>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <Link href="/documentation" legacyBehavior passHref>
              Documentation
            </Link>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <Link href="/documentation" legacyBehavior passHref>
              Documentation
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

export default NavigationSubHeader;
