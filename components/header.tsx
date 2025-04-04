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
  { label: "About Us", href: "/about" },
  {
    label: "Products",
    href: "/products",
    children: [
      { label: "HYDROPHILIC SWELL BAR", href: "/products/hydrophilic-swell-bar" },
    ],
  },
  { label: "Clients", href: "/clients" },
  { label: "Contact Us", href: "/contact" },
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
      "fixed top-0 z-50 w-full transition-all duration-300",
      scrolled ? "bg-white dark:bg-gray-900/90 shadow-md" : "bg-transparent"
    )}
  >
    <div className="bg-white mx-auto flex h-20 md:h-24 items-center justify-between px-4 md:px-6">
      
      <Link href="/" className="hidden md:flex items-center ml-6 md:ml-14 space-x-3">
        {/* Logo */}
        <Image
          src="/images/053.jpg"
          alt="Flexverse Logo"
          width={220}
          height={90}
          className="h-12 md:h-16 w-auto max-w-[220px]"
        />
  
        {/* Text beside Logo */}
        <span className="text-[15px] md:text-[18px] font-['Teko'] text-primary leading-tight">
          FLEXVERSE <br />
          POLYMERS <br />
          PVT. LTD.
        </span>
      </Link>
  
      {/* Desktop Navigation */} 
      <nav className="hidden md:block font-['Teko']">
        <ul className="flex items-center space-x-5 lg:space-x-8">
          {navItems.map((item) => (
            <li key={item.label} className="relative">
              {item.children ? (
                <div>
                  <button
                    onClick={() => toggleDropdown(item.label)}
                    className="flex items-center px-5 py-3 text-lg lg:text-xl font-semibold text-gray-800 dark:text-white hover:text-primary"
                  >
                    {item.label}
                    <ChevronDown
                      className={`ml-1 h-6 w-6 transition-transform ${
                        activeDropdown === item.label ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {activeDropdown === item.label && (
                    <div className="absolute left-0 top-full mt-2 w-64 rounded-md bg-white dark:bg-gray-800 p-3 shadow-lg">
                      {item.children.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          className="block rounded-md px-5 py-3 text-lg text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                          onClick={() => setActiveDropdown(null)}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  href={item.href}
                  className="block px-5 py-3 text-lg lg:text-xl font-semibold text-gray-800 dark:text-white hover:text-primary"
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
        <Button
          size="lg"
          className="bg-primary text-white font-['Teko'] hover:opacity-90 font-semibold text-lg lg:text-xl px-6 py-3"
          asChild
        >
          <Link href="/contact">Request a Quote</Link>
        </Button>
      </div>
  
      {/* ✅ Mobile Navigation & Logo - Only visible on small screens */}
      <div className="md:hidden flex font-['Teko'] items-center justify-between w-full px-4">
        
        {/* ✅ Mobile Logo - Only visible on small screens */}
        <Link href="/" className="flex md:hidden items-center space-x-2">
          <Image
            src="/images/053.jpg"
            alt="Flexverse Logo"
            width={180}
            height={70}
            className="h-12 w-auto"
          /> 
          <span className="text-[18px] font-['Teko'] md:text-[20px] text-primary leading-tight">
            FLEXVERSE <br />
            POLYMERS <br />
            PVT. LTD.
          </span>
        </Link>
  
        {/* Mobile Menu */}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon">
              <Menu className="h-8 w-8 text-gray-800 dark:text-white" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[350px] font-['Teko'] bg-white dark:bg-gray-900">
            <div className="mt-6 flex flex-col space-y-3">
              {navItems.map((item) => (
                <div key={item.label}>
                  {item.children ? (
                    <div className="mb-2">
                      <button
                        onClick={() => toggleDropdown(item.label)}
                        className="flex w-full items-center justify-between py-4 text-lg font-semibold text-gray-800 dark:text-white"
                      >
                        {item.label}
                        <ChevronDown
                          className={`h-7 w-7 transition-transform ${
                            activeDropdown === item.label ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      {activeDropdown === item.label && (
                        <div className="ml-4 mt-2 space-y-2 border-l-2 border-primary pl-4">
                          {item.children.map((child) => (
                            <Link
                              key={child.label}
                              href={child.href}
                              className="block py-3 text-lg font-semibold text-gray-800 dark:text-white hover:text-primary"
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className="block py-4 text-lg font-semibold text-gray-800 dark:text-white hover:text-primary"
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
              <Button className="mt-4 w-full bg-primary text-white hover:opacity-90 font-semibold text-lg py-4" asChild>
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
