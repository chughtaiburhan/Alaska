"use client";
import { type VariantProps } from "class-variance-authority";
import { Menu } from "lucide-react";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import {
  Navbar as NavbarComponent,
  NavbarLeft,
  NavbarRight,
  NavbarCenter,
} from "@/components/ui/navbar";
import Navigation from "@/components/ui/navigation";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import { motion } from "framer-motion";

interface NavbarLink {
  text: string;
  href: string;
}

interface NavbarActionProps {
  text: string;
  href: string;
  variant?: VariantProps<typeof Button>["variant"];
  icon?: ReactNode;
  iconRight?: ReactNode;
  isButton?: boolean;
}

interface NavbarProps {
  logo?: ReactNode;
  name?: string;
  homeUrl?: string;
  mobileLinks?: NavbarLink[];
  actions?: NavbarActionProps[];
  showNavigation?: boolean;
  customNavigation?: ReactNode;
  className?: string;
}

export default function Navbar({
  name = "Alaska",
  homeUrl = "#",
  mobileLinks = [
    { text: "Home", href: homeUrl },
    { text: "Components", href: homeUrl },
    { text: "Documentation", href: homeUrl },
  ],
  actions = [
    {
      text: "Book Now",
      href: homeUrl,
      isButton: true,
      variant: "default",
    },
  ],
  showNavigation = true,
  customNavigation,
  className,
}: NavbarProps) {
  // Motion variants
  const navItem = {
    hidden: { opacity: 0, y: -20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  const navContainer = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  return (
    <header className={cn("sticky top-0 z-50 -mb-4 px-4", className)}>
      {/* Navbar blur background */}
      <div className="fade-bottom bg-background/10 absolute left-0 h-20 w-full backdrop-blur-lg" />
      <div className="relative container mx-auto">
        <NavbarComponent>
          <NavbarLeft>
            <motion.div
              variants={navContainer}
              initial="hidden"
              animate="show"
              className="flex items-center gap-2 text-xl font-bold"
            >
              <motion.div variants={navItem}>
                <Link href={homeUrl}>{name}</Link>
              </motion.div>
            </motion.div>
          </NavbarLeft>

          {showNavigation && (
            <NavbarCenter>
              <motion.div
                variants={navContainer}
                initial="hidden"
                animate="show"
                className="hidden md:flex gap-6"
              >
                {customNavigation || <Navigation />}
              </motion.div>
            </NavbarCenter>
          )}

          <NavbarRight>
            <motion.div
              variants={navContainer}
              initial="hidden"
              animate="show"
              className="flex items-center gap-4"
            >
              {actions.map((action, index) =>
                action.isButton ? (
                  <motion.div key={index} variants={navItem}>
                    <Button
                      variant={action.variant || "default"}
                      className="bg-[#f96c31] cursor-pointer text-white shadow-md hover:shadow-lg transition-all"
                      asChild
                    >
                      <a href={action.href}>
                        {action.icon}
                        {action.text}
                        {action.iconRight}
                      </a>
                    </Button>
                  </motion.div>
                ) : (
                  <motion.a
                    key={index}
                    href={action.href}
                    variants={navItem}
                    className="hidden md:block text-sm hover:text-[#f96c31] transition-colors"
                  >
                    {action.text}
                  </motion.a>
                ),
              )}

              {/* Mobile Menu */}
              <Sheet>
                <SheetTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="shrink-0 md:hidden"
                  >
                    <Menu className="size-5" />
                    <span className="sr-only">Toggle navigation menu</span>
                  </Button>
                </SheetTrigger>

                <SheetContent side="right" className="p-6">
                  <motion.div
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: 100, opacity: 0 }}
                    transition={{ duration: 0.4 }}
                  >
                    <SheetTitle>Navigation Menu</SheetTitle>
                    <SheetDescription>
                      Access site navigation and links
                    </SheetDescription>
                    <nav className="grid gap-6 text-lg font-medium mt-4">
                      <Link
                        href={homeUrl}
                        className="flex items-center gap-2 text-xl font-bold"
                      >
                        <span>{name}</span>
                      </Link>
                      {mobileLinks.map((link, index) => (
                        <Link
                          key={index}
                          href={link.href}
                          className="text-muted-foreground hover:text-foreground transition-colors"
                        >
                          {link.text}
                        </Link>
                      ))}
                    </nav>
                  </motion.div>
                </SheetContent>
              </Sheet>
            </motion.div>
          </NavbarRight>
        </NavbarComponent>
      </div>
    </header>
  );
}
