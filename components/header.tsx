"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown, Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Products",
    href: "/products",
    children: [
      {
        label: "Hydrophilic Swell Bar",
        href: "/products/hydrophilic-swell-bar",
        description: "Water stop for concrete construction joints",
      },
      {
        label: "PVC Waterstop",
        href: "/products/pvc-waterstop",
        description: "Flexible PVC waterstops for joints",
      },
      {
        label: "All Products",
        href: "/products",
        description: "View our complete product range",
      },
    ],
  },
  { label: "Clients", href: "/clients" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDropdown = (label: string) => {
    setActiveDropdown(activeDropdown === label ? null : label);
  };

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full  transition-all duration-300",
        scrolled ? "bg-white dark:bg-gray-900/90 shadow-md" : "bg-transparent"
      )}
    >
      <div className=" bg-white  mx-auto flex h-20  items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="relative z-10 flex items-center">
          <Image
            src="/images/flexverse-logo.png"
            alt="Flexverse Logo"
            width={180}
            height={70}
            className="h-12 w-auto"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex items-center space-x-4">
            {navItems.map((item) => (
              <li key={item.label} className="relative">
                {item.children ? (
                  <div>
                    <button
                      onClick={() => toggleDropdown(item.label)}
                      className="flex items-center px-4 py-2 text-sm font-medium text-gray-800 dark:text-white hover:text-primary"
                    >
                      {item.label}
                      <ChevronDown
                        className={`ml-1 h-4 w-4 transition-transform ${
                          activeDropdown === item.label ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {activeDropdown === item.label && (
                      <div className="absolute left-0 top-full mt-1 w-64 rounded-md bg-white dark:bg-gray-800 p-2 shadow-lg">
                        {item.children.map((child) => (
                          <Link
                            key={child.label}
                            href={child.href}
                            className="block rounded-md px-4 py-2 text-sm text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                            onClick={() => setActiveDropdown(null)}
                          >
                            <div className="font-medium">{child.label}</div>
                            <div className="text-xs text-gray-600 dark:text-gray-300">{child.description}</div>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className="block px-4 py-2 text-sm font-medium text-gray-800 dark:text-white hover:text-primary"
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Contact Button */}
        <div className="hidden md:block">
          <Button size="sm" className="bg-primary text-white hover:opacity-90 font-bold" asChild>
            <Link href="/contact">Request a Quote</Link>
          </Button>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6 text-gray-800 dark:text-white" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[350px] bg-white dark:bg-gray-900">
              <div className="mt-6 flex flex-col space-y-3">
                {navItems.map((item) => (
                  <div key={item.label}>
                    {item.children ? (
                      <div className="mb-2">
                        <button
                          onClick={() => toggleDropdown(item.label)}
                          className="flex w-full items-center justify-between py-2 text-lg font-bold text-gray-800 dark:text-white"
                        >
                          {item.label}
                          <ChevronDown className={`h-5 w-5 transition-transform ${
                            activeDropdown === item.label ? "rotate-180" : ""
                          }`} />
                        </button>
                        {activeDropdown === item.label && (
                          <div className="ml-4 mt-2 space-y-2 border-l-2 border-primary pl-4">
                            {item.children.map((child) => (
                              <Link
                                key={child.label}
                                href={child.href}
                                className="block py-2 text-gray-800 dark:text-white hover:text-primary"
                              >
                                {child.label}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ) : (
                      <Link href={item.href} className="block py-2 text-lg font-bold text-gray-800 dark:text-white hover:text-primary">
                        {item.label}
                      </Link>
                    )}
                  </div>
                ))}
                <Button className="mt-4 w-full bg-primary text-white hover:opacity-90 font-bold" asChild>
                  <Link href="/contact">Request a Quote</Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
