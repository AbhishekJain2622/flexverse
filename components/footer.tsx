import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Footer() {
  return (
    <footer className="bg-footer text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div>
            <Image
              src="/Untitled.png"
              alt="Flexverse Logo"
              width={150}
              height={40}
              className="mb-4 h-25 w-19"
            />
           
            <div className="flex space-x-4">
              <Link href="#" className="rounded-full bg-white/10 p-2 text-white hover:bg-white/20">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="https://www.linkedin.com/company/flexverse-polymers-private-limited/" className="rounded-full bg-white/10 p-2 text-white hover:bg-white/20">
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
                <Link href="/products" className="text-white/90 hover:text-primary">
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
           
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-4 text-xl font-bold text-primary">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="mt-1 h-5 w-5 text-primary" />
                <span className="text-white/90">
                  123 Business Park, Sector 5<br />
                  New Delhi, India - 110001
                </span>
              </li>
              <li className="flex items-center gap-3">
  <Phone className="h-5 w-5 text-primary" />
  <a href="tel:+919322288578" className="text-white/90 hover:underline">
  +91 9322288578
  </a>
</li>
<li className="flex items-center gap-3">
  <Mail className="h-5 w-5 text-primary" />
  <a href="mailto:info@flexverse.in" className="text-white/90 hover:underline">
    info@flexverse.in
  </a>
</li>

            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="mb-4 text-xl font-bold text-primary">Newsletter</h3>
            <p className="mb-4 text-white/90">Subscribe to our newsletter to receive updates and news.</p>
            <div className="flex flex-col space-y-3">
              <Input
                type="email"
                placeholder="Your Email"
                className="border-white/20 bg-white/10 text-white placeholder:text-white/50"
              />
              <Button className="w-full gradient-bg text-header hover:opacity-90 font-bold">Subscribe</Button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 border-t border-white/20 pt-6 text-center">
          <p className="text-white/70">Copyright © {new Date().getFullYear()} Flexverse. All rights reserved. Powered by <a href="https://codestudios.in/">CodeStudios</a> </p>
        </div>
      </div>
    </footer>
  )
}

