
import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-footer text-white w-full">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {/* Company Info */}
          <div>
            <Image
              src="/Untitled.png"
              alt="Flexverse Logo"
              width={150}
              height={30}
              className="mb-4 h-25 w-30"
            />
            <div className="flex space-x-4">
            <Link 
                href="https://www.linkedin.com/company/flexverse-polymers-private-limited/" 
                className="rounded-full bg-white/10 p-2 text-white hover:bg-primary transition"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-xl font-bold text-primary">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-white/90 hover:text-primary">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-white/90 hover:text-primary">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/products/hydrophilic-swell-bar" className="text-white/90 hover:text-primary">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/clients" className="text-white/90 hover:text-primary">
                  Our Clients
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white/90 hover:text-primary">
                  Contact Us
                </Link>
              </li>
              {/* <li>
                <Link href="/privacy-policy" className="text-white/90 hover:text-primary">
                  Privacy Policy
                </Link>
              </li> */}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-4 text-xl font-bold text-primary">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="mt-1 h-5 w-5 text-primary" />
                <span className="text-white/90">
                Inizio, 201, Cardinal Gracious Road, Chakala.<br />
                Andheri East, Mumbai 400049
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary" />
                <a href="tel:+919322288578" className="text-gray-10">
                  +91 9322288578
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary" />
                <a href="mailto:info@flexverse.in" className="text-gray-10">
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
  )
}