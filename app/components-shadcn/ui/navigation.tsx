"use client";

import Link from "next/link"; 

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "./navigation-menu";

interface MenuItem {
  title: string;
  href: string;
  isLink?: boolean;
}

interface NavigationProps {
  menuItems?: MenuItem[];
}

export default function Navigation({
  menuItems = [
    { title: "About Us", href: "/about", isLink: true },
    { title: "Fishing Tips", href: "/fishing-tips", isLink: true },
    { title: "Kenai River", href: "/kenai-river", isLink: true },
    { title: "Gallery", href: "/gallery", isLink: true },
  ],
}: NavigationProps) {
  return (
    <NavigationMenu className="hidden md:flex w-full justify-center">
      <div className="w-full max-w-7xl mx-auto flex justify-center">
        <NavigationMenuList className="flex gap-8">
          {menuItems.map((item, index) => (
            <NavigationMenuItem key={index}>
              <NavigationMenuLink className={navigationMenuTriggerStyle()} asChild>
                <Link href={item.href}>{item.title}</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </div>
    </NavigationMenu>
  );
}
