"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ChevronRight, Mail, MapPin, Phone } from "lucide-react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import ClientCarousel from "@/components/client-carousel"

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";

// Define products with SEO-friendly slugs
const products = [
  {
    title: "Hydrophilic Swell Bar",
    slug: "hydrophilic-swell-bar",
    description: "Flexverse® hydrophilic swell bars prevent water ingress in concrete by swelling on contaFlexverse® hydrophilic swell bars are advanced water stops designed to prevent water ingress through concrete joints and penetrations by swelling upon contact with water. Their durable, reversible chemistry ensures long-term performance through repeated wet-dry cycles.",
    image: "/images/1.png",
  },
  
]


// Client logos data
const clients = [
  { name: "Asian Paints", logo: "/client/01.png" },
  { name: "Jindal Steel & Power", logo: "/client/02.png" },
  { name: "Brigade", logo: "/client/03.png" },
  { name: "Reliance Industries", logo: "/client/04.png" },
  { name: "Adani Enterprise", logo: "/client/05.jpg" },
  { name: "Godrej", logo: "/client/06.png" },
  { name: "Lodha", logo: "/client/07.png" },
  { name: "Runwal", logo: "/client/08.png" },
  { name: "Larsen & Toubro", logo: "/client/09.jpg" },
  { name: "Afcons", logo: "/client/10.jpg" },
  { name: "Tata Projects", logo: "/client/11.jpg" },
  { name: "AM/NS India", logo: "/client/12.png" },
  { name: "Delhi Metro", logo: "/client/13.png" },
  { name: "Patna Metro", logo: "/client/14.png" },
  { name: "UPMRC", logo: "/client/15.png" },
  { name: "MMRC", logo:"/client/16.jpg" },
  { name: "Pune Metro", logo: "/client/17.png" },
  { name: "Meil", logo: "/client/18.png" },
  { name: "JCL Cements", logo: "/client/19.jpg"},
  { name: "Oberoi Realty", logo: "/client/20.jpg" },
  { name: "Navi Mumbai Metro", logo: "/client/21.jpeg"},
  { name: "Shapoorji Pallonji", logo: "/client/22.jpg" },
  { name: "Municipal Corporation", logo: "/client/23.png" },
  { name: "Navayuga", logo: "/client/24.jpg" },
  { name: "JCL Cements", logo: "/client/25.png"},
  { name: "Oberoi Realty", logo: "/client/26.jpg" },
  { name: "Navi Mumbai Metro", logo: "/client/27.png"},
  { name: "Shapoorji Pallonji", logo: "/client/28.jpg" },
  { name: "Municipal Corporation", logo: "/client/29.jpeg" },
  { name: "Navayuga", logo: "/client/30.jpeg" },
  { name: "Navayuga", logo: "/client/31.png" },
]
export default function Home() {
  const heroRef = useRef(null)
  const aboutRef = useRef(null)
  const productsRef = useRef(null)
  const clientsRef = useRef(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    // Hero animation
    gsap.fromTo(heroRef.current, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1, ease: "power3.out" })

    // About section animation
    gsap.fromTo(
      aboutRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: aboutRef.current,
          start: "top 80%",
        },
      },
    )

    // Products section animation
    gsap.fromTo(
      productsRef.current?.querySelectorAll(".product-card"),
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: productsRef.current,
          start: "top 75%",
        },
      },
    )

    // Clients section animation
    gsap.fromTo(
      clientsRef.current,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: clientsRef.current,
          start: "top 80%",
        },
      },
    )
  }, [])

  return (
    <main>
      {/* Hero Section */}
       {/* Hero Section */}
       <section className="relative h-[90vh] overflow-hidden bg-header" ref={heroRef}>
        <div className="absolute  inset-0 opacity-30">
          <Image
            src="/images/hero.jpg"
            alt="Flexverse Hero"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white">
          <h1 className="text-4xl font-bold leading-tight tracking-tight md:text-6xl">
            <span className="gradient-text">Innovative Solutions</span> for Modern Challenges
          </h1>
          <p className="mt-6 max-w-2xl px-4 text-lg leading-relaxed text-white/90 md:text-xl">
            Flexverse is your partner in creating flexible solutions for today's complex business environment
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Button
              size="lg"
              className="gradient-bg font-medium hover:opacity-90 text-header relative overflow-hidden group animate-highlight"
              asChild
            >
              <Link href="/products" className="flex items-center gap-2">
                <span className="relative z-10">Explore Our Products</span>
                <span className="absolute inset-0 bg-white/10 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
              </Link>
            </Button>
            <Button
              size="lg"
              className="gradient-bg font-medium hover:opacity-30 text-header relative overflow-hidden group animate-highlight"
              asChild
            >
              <Link href="/contact"className="flex items-center gap-2">
                <span className="relative z-10">Contact Us</span>
                <span className="absolute inset-0 bg-white/10 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
              </Link>
            </Button>
            {/* <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10" asChild>
              <Link href="/contact">Contact Us</Link>
            </Button> */}
          </div>
        </div>
        <div className="absolute bottom-8 left-0 right-0 flex justify-center">
          <div className="flex animate-bounce rounded-full bg-white/20 p-2">
            <ChevronRight className="h-6 w-6 rotate-90 text-white" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-background" ref={aboutRef}>
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center lg:flex-row lg:items-start lg:gap-16">
            <div className="mb-10 lg:mb-0 lg:w-1/2">
              <Image
                src="/images/about1.jpg"
                alt="About Flexverse"
                width={600}
                height={400}
                className="rounded-lg object-cover shadow-lg"
              />
            </div>
            <div className="lg:w-1/2">
              <h2 className="mb-6 text-3xl font-bold tracking-tight gradient-text md:text-4xl"> Welcome to Flexverse</h2>
              <p className="mb-4 text-[20px] leading-relaxed text-foreground/90 font-normal">
  Trusted Excellence in High-Quality Construction Products
</p>
<p className="mb-6 text-[17px] leading-relaxed text-foreground/90 font-normal">
  With over 30 years of expertise from Hitech Rubber Industries (Mumbai) and Kanta Enterprises (Bengaluru), Flexverse Polymers is your trusted partner for high-quality construction products. Driven by innovation and a commitment to excellence, we ensure our products meet the highest national and international standards, undergoing rigorous quality checks in NABL-approved labs. At Flexverse, we take pride in delivering exceptional customer service, offering reliable solutions that stand the test of time, even in the toughest conditions.
</p>

              <div className="grid gap-6 sm:grid-cols-2">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-target"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <circle cx="12" cy="12" r="6" />
                      <circle cx="12" cy="12" r="2" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Our Vision</h3>
                    <p className="text-foreground/80">To redefine industry standards</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-gem"
                    >
                      <path d="M6 3h12l4 6-10 13L2 9Z" />
                      <path d="M11 3 8 9l4 13 4-13-3-6" />
                      <path d="M2 9h20" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Our Values</h3>
                    <p className="text-foreground/80">Innovation, Quality, Integrity</p>
                  </div>
                </div>
              </div>
              <Button className="mt-6 gradient-bg text-header hover:opacity-90" asChild>
                <Link href="/about">Learn More Flexverse</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
{/* Products Section */}
<section className="bg-secondary/5 py-20" ref={productsRef}>
  <div className="container mx-auto px-6 md:px-12 lg:px-16">
    {/* Heading */}
    <div className="mb-12 text-center">
      <h2 className="mb-3 text-3xl font-bold tracking-tight gradient-text md:text-4xl">
        OUR PRODUCTS
      </h2>
      <p className="mx-auto max-w-2xl text-lg leading-relaxed text-foreground/90">
        Innovating for a Better Tomorrow
      </p>
    </div>

    {/* Product Display */}
    <div className="grid grid-cols-1 gap-12 lg:gap-16">
      {products.map((product, index) => (
        <div
          key={index}
          className={`flex flex-col-reverse ${
            index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
          } items-center gap-8`}
        >
          {/* Image Section */}
          <div className="w-full md:w-1/2 flex justify-center">
            <Image
              src={product.image || "/images/1.png"}
              alt={product.title}
              width={500}
              height={400}
              className="rounded-lg shadow-md"
            />
          </div>

          {/* Text Section */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h3 className="mb-2 text-2xl font-semibold text-primary">
              {product.title}
            </h3>
            <p className="text-primary-700  font-normal text-[18px] leading-relaxed">{product.description}</p>

            {/* Buttons */}
            <div className="mt-6 flex flex-col sm:flex-row justify-center md:justify-start gap-4">
              <Button
                size="lg"
                className="bg-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition"
              >
                CATALOGUE
              </Button>
              <Button
                size="lg"
                className="bg-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition"
              >
                KNOW MORE
              </Button>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>


      {/* Clients Section */}
      <section className="py-20 bg-background" ref={clientsRef}>
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-3 text-3xl font-bold tracking-tight gradient-text md:text-4xl">Our Clients</h2>
            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-foreground/90">
              We're proud to work with businesses across various industries
            </p>
          </div>

          <ClientCarousel clients={clients} />

          <div className="mt-8 text-center">
            <Button variant="link" className="text-primary" asChild>
              <Link href="/clients" className="flex items-center justify-center gap-2">
                View All Clients <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="gradient-bg py-20 text-header">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-3 text-3xl font-bold tracking-tight md:text-4xl">Get In Touch</h2>
            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-header/90">
              Have questions or want to learn more about our products? Contact us today!
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="flex flex-col items-center rounded-lg bg-white/10 p-6 text-center">
              <div className="mb-4 rounded-full bg-white/20 p-4">
                <Phone className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">Phone</h3>
              <a href="tel:+919322288578" className="hover:text-white transition">
                  +91 9322288578
                </a>
              {/* <p className="text-header/90">+91 9876543210</p> */}
            </div>
            <div className="flex flex-col items-center rounded-lg bg-white/10 p-6 text-center">
              <div className="mb-4 rounded-full bg-white/20 p-4">
                <Mail className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">Email</h3>
              <a href="mailto:info@flexverse.in" className="hover:text-white transition">
                  info@flexverse.in
                </a>
              {/* <p className="text-header/90">support@flexverse.in</p> */}
            </div>
            <div className="flex flex-col items-center rounded-lg bg-white/10 p-6 text-center">
              <div className="mb-4 rounded-full bg-white/20 p-4">
                <MapPin className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">Address</h3>
              <p className="text-header/90 hover:text-white">Inizio, 201, Cardinal Gracious Road, Chakala.Andheri East, Mumbai 400049</p>
              {/* <p className="text-header/90 hover:text-white"></p> */}
            </div>
          </div>
          <div className="mt-12 text-center">
            <Button size="lg" variant="outline" className="text-header border-header hover:bg-white/10" asChild>
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}

