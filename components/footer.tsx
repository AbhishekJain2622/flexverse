import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-footer text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div>
            <Image
              src="/Untitled.png"
              alt="Flexverse Logo"
              width={150}
              height={40}
              className="mb-4"
            />
            <p className="text-white/70 mb-4">
              Innovative polymer solutions for a sustainable future.
            </p>
            <div className="flex space-x-4">
              <Link 
                href="https://www.linkedin.com/company/flexverse-polymers-private-limited/" 
                className="rounded-full bg-white/10 p-2 text-white hover:bg-primary transition"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
              {/* <Link 
                href="#" 
                className="rounded-full bg-white/10 p-2 text-white hover:bg-primary transition"
              >
                <Instagram className="h-5 w-5" />
              </Link>
              <Link 
                href="#" 
                className="rounded-full bg-white/10 p-2 text-white hover:bg-primary transition"
              >
                <Facebook className="h-5 w-5" />
              </Link> */}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-xl font-bold text-primary">Quick Links</h3>
            <ul className="space-y-2 text-white/90">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About Us" },
                { href: "/products", label: "Products" },
                { href: "/clients", label: "Our Clients" },
                { href: "/contact", label: "Contact Us" }
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-primary transition">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-4 text-xl font-bold text-primary">Contact Us</h3>
            <ul className="space-y-4 text-white/90">
              <li className="flex items-start gap-3">
                <MapPin className="mt-1 h-5 w-5 text-primary" />
                <span>
                  Inizio, 201, Cardinal Gracious Road,<br />
                  Chakala, Andheri East, Mumbai 40004
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary" />
                <a href="tel:+919322288578" className="hover:text-primary transition">
                  +91 9322288578
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary" />
                <a href="mailto:info@flexverse.in" className="hover:text-primary transition">
                  info@flexverse.in
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 border-t border-white/20 pt-6 text-center">
          <p className="text-white/70">
            Copyright © {new Date().getFullYear()} Flexverse. All rights reserved. Powered by 
            <a href="https://codestudios.in/" className="hover:underline text-primary"> CodeStudios</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
