import Image from "next/image"
import { CheckCircle2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import ValuesSection from "./values-section"

export default function AboutPage() {
  return (
    <main className="pt-20">
      {/* Hero Section */}
   

<section 
className="relative bg-primary py-20 text-white bg-cover bg-center bg-no-repeat" 
style={{ backgroundImage: "url('/images/about5.png')" }}
>
<div className="container mx-auto px-4 text-center">
  <h1 className="mb-6 text-4xl font-bold md:text-5xl">About Flexverse</h1>
  <p className="text-lg text-white/90 md:text-xl max-w-3xl mx-auto">
    Learn about our journey, our values, and the team that makes Flexverse a leader in innovative solutions.
  </p>
</div>
</section>
      {/* Company History */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          {/* <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-primary md:text-4xl">Our Journey</h2>
            <p className="mx-auto max-w-3xl text-lg text-gray-600">
              From humble beginnings to industry leadership, our journey has been defined by innovation, perseverance,
              and a commitment to excellence.
            </p>
          </div> */}
<div className="relative">
  {/* Timeline Line */}
  <div className="absolute left-1/2 top-0 h-full w-1 -translate-x-1/2 bg-gray-200 hidden md:block"></div>

  {/* Timeline Items */}
  <div className="relative z-10 space-y-12">
    
    {/* Timeline Item 1 */}
    <div className="flex flex-col items-center md:flex-row md:items-start">
      <div className="w-full md:w-1/2 px-4 text-center md:text-right md:pr-12">
        <h3 className="mb-2 text-xl font-semibold">ABOUT COMPANY</h3>
        <p className="text-gray-600 font-normal">
          Welcome to Flexverse Polymers— your trusted partner in providing innovative solutions for the construction and infrastructure sectors. Founded in 2022, Flexverse Polymers is the result of over three decades of industry expertise, built upon the legacy of our sister companies:<a href="https://www.hitechrubber.in/bridge_bearings.html" className="text-primary "> Hitech Rubber Industries </a>, Mumbai (established in 1995), and Kanta Enterprises, Bengaluru (established in 1987). Together, our companies have been at the forefront of construction, infrastructure, and waterproofing industries, delivering exceptional products and services across a diverse range of prestigious projects in India and around the world.
        </p>
      </div>
      <div className="relative flex items-center justify-center w-full md:w-1/2 px-4">
        <div className="absolute left-1/2 -top-4 hidden md:flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full bg-primary text-white"></div>
        <Image
          src="/images/about2.jpg"
          alt="Flexverse Founding"
          width={500}
          height={300}
          className="rounded-lg shadow-md w-full max-w-[500px]"
        />
      </div>
    </div>

    {/* Timeline Item 2 */}
    <div className="flex flex-col items-center md:flex-row md:items-start">
      <div className="w-full md:w-1/2 order-2 md:order-1 px-4">
        <h3 className="mb-2 text-xl font-semibold text-center md:text-left">OUR COMMITMENT TO QUALITY</h3>
        <p className="text-gray-600 text-center font-normal md:text-left">
          At Flexverse Polymers, we understand that choosing the right products and solutions is crucial to the success of any construction project. That’s why we are committed to delivering premium products and services that meet the unique needs of our clients, every step of the way. Whether you’re working on large-scale infrastructure projects or specialized construction requirements, quality is at the core of our approach. We rigorously test all of our products at our in-house labs and NABL-approved facilities, to ensure they meet and exceed both national and international standards. This means that you can trust our products are built to stand the test of time, even in the toughest conditions.
        </p>
      </div>
      <div className="relative flex items-center justify-center w-full md:w-1/2 px-4">
        <div className="absolute left-1/2 -top-4 hidden md:flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full bg-primary text-white"></div>
        <Image
          src="/images/about3.jpg"
          alt="Flexverse Expansion"
          width={500}
          height={300}
          className="rounded-lg shadow-md w-full max-w-[500px]"
        />
      </div>
    </div>

  </div>
</div>

        </div>
      </section>

   

      {/* Team Section */}
      <section className="py-20">
  <div className="container mx-auto px-4 max-w-5xl">
    <div className="mb-12 text-center">
      <h2 className="mb-4 text-3xl font-bold text-primary md:text-4xl">Our Leadership Team</h2>
      <p className="mx-auto max-w-3xl text-lg text-gray-600">
        Meet the talented individuals who drive our vision and lead our company to success.
      </p>
    </div>

    <div className="grid gap-8 grid-cols-1 md:grid-cols-3">
      {[
        {
          name: "Anju Mahnot",
          position: "Director",
          // bio: "John has over 20 years of experience in the industry and leads our company vision.",
          image: "/images/leader1.jpg",
        },
        {
          name: "Sushil Mahnot",
          position: "Managing Director",
          // bio: "Sarah oversees all technical aspects and drives our innovation strategy.",
          image: "/images/leader2.jpg",
        },
        {
          name: "Trisha Mahnot",
          position: "President",
          // bio: "Michael manages our day-to-day operations and ensures smooth business processes.",
          image: "/images/leader3.jpg",
        }
      ].map((member, index) => (
        <div
          key={index}
          className="overflow-hidden rounded-lg bg-white shadow-lg transition-all duration-300 hover:shadow-xl"
        >
          <div className="relative h-80 w-full">
            <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover rounded-t-lg" />
          </div>
          <div className="p-8 text-center">
            <h3 className="mb-2 text-2xl font-bold">{member.name}</h3>
            <p className="mb-4 text-lg font-medium text-primary">{member.position}</p>
            <p className="text-gray-600 text-base">{member.bio}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>


      {/* Why Choose Us */}
      {/* <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center gap-16 lg:flex-row">
            <div className="lg:w-1/2">
              <h2 className="mb-6 text-3xl font-bold text-primary md:text-4xl">Why Choose Flexverse?</h2>
              <p className="mb-8 text-lg text-gray-600">
                At Flexverse, we pride ourselves on delivering exceptional value to our clients through our commitment
                to quality, innovation, and customer satisfaction.
              </p>

              <div className="space-y-6">
                {[
                  {
                    title: "Cutting-Edge Technology",
                    description: "We leverage the latest technologies to deliver modern, efficient solutions.",
                  },
                  {
                    title: "Expert Team",
                    description: "Our team consists of industry professionals with extensive experience.",
                  },
                  {
                    title: "Customer-Centric Approach",
                    description: "We prioritize understanding and addressing our customers' unique needs.",
                  },
                  {
                    title: "Quality Assurance",
                    description: "Our rigorous quality control processes ensure reliable, high-performance products.",
                  },
                ].map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <CheckCircle2 className="h-6 w-6 shrink-0 text-primary" />
                    <div>
                      <h3 className="text-lg font-semibold">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Button className="mt-8 bg-primary hover:bg-primary/90">Contact Us Today</Button>
            </div>

            <div className="lg:w-1/2">
              <Image
                src="/placeholder.svg?height=600&width=700"
                alt="Why Choose Flexverse"
                width={700}
                height={600}
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section> */}
    </main>
  )
}








