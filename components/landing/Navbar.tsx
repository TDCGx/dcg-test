"use client";

import React from "react";
import Link from "next/link"
import { cn } from "@/lib/utils"
import Image from "next/image";

//ui components
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/NavigationMenu"; 

//style component
import "./landing.styles.css";


const Navbar = () => {

  return (
    <div className="login-navbar-container">
      <NavigationMenu>
        <NavigationMenuList>
          
          <div className="login-navbar-logo">
            <NavigationMenuItem>
              <Link href="https://www.dcg.earth/" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  <Image
                    src="/shared/dcgx-logo.png"
                    width={26}  
                    height={29}
                    alt="DCGx Platform Logo"
                    className=""
                  />
                </NavigationMenuLink>
              </Link> 
            </NavigationMenuItem>
          </div>    

          <div className="login-navbar-items">
            <NavigationMenuItem>
              <Link href="https://www.dcg.earth/" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Home
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="https://www.dcg.earth/contact" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Contact
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </div>

        </NavigationMenuList>
      </NavigationMenu>
    </div>
  )
}

const ListItem = React.forwardRef<
  React.ComponentRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "flex select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"; 


export default Navbar;

