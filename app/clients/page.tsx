import Image from "next/image"
import ClientCarousel from "@/components/client-carousel"

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

export default function ClientsPage() {
  return (
    <main className="pt-20">
 {/* Hero Section */}
<section 
  className="relative bg-cover bg-center py-20 text-white" 
  style={{ backgroundImage: "url('/images/client.png')" }}
>
  <div className="container mx-auto px-4 relative z-10">
    <div className="mx-auto max-w-3xl text-center">
      <h1 className="mb-6 text-xl font-bold md:text-6xl font-teko  md:text-7xl">Our Clients</h1>
      <p className=" text-white font-roboto md:text-2xl">
        We're proud to work with leading organizations across various industries
      </p>
    </div>
  </div>

</section>

      {/* Clients Carousel
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-primary">Trusted by Industry Leaders</h2>
            <p className="mx-auto max-w-3xl text-lg text-foreground/90">
              Our solutions are trusted by some of the most respected companies and organizations in the industry
            </p>
          </div>

          <ClientCarousel clients={clients} />
        </div>
      </section> */}

      {/* Clients Grid */}
      <section className="py-16 bg-secondary/5">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-[40px] font-bold text-primary font-teko">Our Valued Partners</h2>
            <p className="mx-auto max-w-5xl text-lg font-roboto text-foreground/90">
              We're proud to collaborate with these industry-leading organizations
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {clients.map((client, index) => (
              <div
                key={index}
                className="flex items-center justify-center rounded-lg bg-white p-6 shadow-md transition-all hover:shadow-lg"
              >
                <div className="relative h-24 font-teko w-full">
                  <Image src={client.logo || "/placeholder.svg"} alt={client.name} fill className="object-contain" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-primary">Client Testimonials</h2>
            <p className="mx-auto max-w-3xl text-lg text-foreground/90">
              Hear what our clients have to say about their experience working with us
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                quote:
                  "Flexverse's hydrophilic swell bars have been instrumental in ensuring water-tight construction joints in our projects. Their technical support team is always available to provide guidance.",
                name: "Rajesh Kumar",
                position: "Chief Engineer",
                company: "Infrastructure Development Corp",
              },
              {
                quote:
                  "We've been using Flexverse products for over 5 years now. Their quality is consistent and the performance is exceptional, especially in challenging environmental conditions.",
                name: "Priya Sharma",
                position: "Project Director",
                company: "Metro Rail Corporation",
              },
              {
                quote:
                  "The technical expertise and innovative solutions provided by Flexverse have helped us solve complex waterproofing challenges in our high-rise developments.",
                name: "Amit Patel",
                position: "Construction Manager",
                company: "Premier Developers Ltd",
              },
            ].map((testimonial, index) => (
              <div key={index} className="rounded-lg bg-white p-8 shadow-md">
                <div className="mb-4 text-4xl text-primary">"</div>
                <p className="mb-6 text-foreground/90 italic">{testimonial.quote}</p>
                <div className="flex items-center">
                  <div className="h-12 w-12 rounded-full bg-secondary/20"></div>
                  <div className="ml-4">
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-foreground/70">
                      {testimonial.position}, {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="gradient-bg py-16 text-white">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-[40px] font-bold font-teko">Join Our Growing List of Satisfied Clients</h2>
            <p className="mb-8 text-[18px] text-white/90 font-roboto">
              Contact us today to discuss how our solutions can benefit your next project
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-md bg-white px-6 py-3 font-medium text-primary hover:bg-white/90 transition-colors relative overflow-hidden group animate-pulse"
              >
                <span className="relative z-10 font-teko">Contact Us</span>
                <span className="absolute inset-0 bg-white/30 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
              </a>
              {/* <a
                href="/products"
                className="inline-flex items-center justify-center rounded-md border border-white px-6 py-3 font-medium text-white hover:bg-white/10 transition-colors"
              >
                Explore Our Products
              </a> */}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

