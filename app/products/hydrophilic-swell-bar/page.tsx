import Image from "next/image"
import Link from "next/link"
import { Download, FileText, Send } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function HydrophilicSwellBarPage() {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="relative bg-header py-20 text-white">
        <div className="absolute inset-0 opacity-100">
          <Image
            src="/images/contact5.png"
            alt="Construction site with cranes"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="mx-auto max-w-4xl">
            <h1 className="mb-6 text-4xl font-bold md:text-5xl">Flexverse Hydrophilic Swell Bar</h1>
            <p className="text-lg text-white/90 md:text-xl">
              Advanced water stop solution for concrete construction joints and penetrations
            </p>
          </div>
        </div>
        {/* <div className="absolute bottom-0 left-0 right-0 h-16 bg-white clip-path-bottom"></div> */}
      </section>

      {/* Product Description */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <h2 className="mb-6 text-3xl font-bold text-primary">Product Description</h2>
              <div className="space-y-4  text-foreground/90">
                <p className="font-normal">
                The Flexverse® hydrophilic swell bar is a water stop that can be used to stop water ingress through cast-in-place concrete construction joints and penetrations in concrete. The profile has a sophisticated hydrophilic structure, which has been engineered to swell on contact with water and exert pressure against the ingress inside the structure. This forms an effective sealing system that can bar water entering even through the most microscopic cracks and penetrations. Flexverse® hydrophilic swell bars are crafted to have a robust build, and possess a unique reversible chemistry that ensure our swell bars can endure repeated cycles of wet-dry expansion and contraction in the long-run, while retaining their properties.
                </p>
               
              </div>

              <div className="mt-10">
                <h3 className="mb-4 text-2xl font-bold text-primary">Key Features</h3>
                <ul className="space-y-2 list-disc pl-5 text-foreground/90">
                  <li>Sophisticated hydrophilic structure engineered for optimal performance</li>
                  <li>Effective sealing against water ingress through microscopic cracks</li>
                  <li>Reversible chemistry allows for repeated wet-dry expansion cycles</li>
                  <li>Maintains properties over long-term use</li>
                  <li>Easy to install in concrete construction joints</li>
                  <li>Available in multiple colors for different applications</li>
                </ul>
              </div>

              <div className="mt-10">
                <h3 className="mb-4 text-2xl font-bold text-primary">Applications</h3>
                <ul className="space-y-2 list-disc pl-5 text-foreground/90">
                  <li>Underground structures and basements</li>
                  <li>Water treatment plants</li>
                  <li>Tunnels and subway systems</li>
                  <li>Dams and reservoirs</li>
                  <li>Swimming pools and water features</li>
                  <li>Concrete pipe connections</li>
                  <li>Precast concrete elements</li>
                </ul>
              </div>
            </div>

            <div>
            <Card className="overflow-hidden">
  <CardContent className="p-6">
    <h3 className="mb-6 text-xl font-bold text-primary">FLEXVERSE® Resources</h3>
    <div className="space-y-4">
      <a href="/files/catalogue.pdf" download="Flexverse_Catalogue.pdf">
        <Button variant="outline" className="w-full justify-start gap-2">
          <Download className="h-4 w-4" />
          <span>Download Catalogue</span>
        </Button>
      </a>
      <br />
      <br />
      <a href="/files/tech.pdf" download="Technical_Data_Sheet.pdf">
        <Button variant="outline" className="w-full justify-start gap-2">
          <FileText className="h-4 w-4" />
          <span>Technical Data Sheet</span>
        </Button>
      </a>
   
    </div>
  </CardContent>
</Card>

              <div className="mt-8">
                <h3 className="mb-4 text-xl font-bold text-primary">Need Help?</h3>
                <p className="mb-4 text-foreground/90">
                  Contact our technical team for assistance with product selection or installation guidance.
                </p>
                <Button asChild className="w-full">
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
{/* Product Gallery */}
<section className="bg-secondary/5 py-16">
  <div className="container mx-auto px-4">
    <h2 className="mb-8 text-3xl font-bold text-primary text-center">Product Gallery</h2>
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {[
        { color: "Red", description: "For standard construction joints", image: "/images/2.png" },
        { color: "Black", description: "For high-pressure applications", image: "/images/3.png" },
        { color: "Yellow", description: "For chemical resistance applications", image: "/images/4.png" },
        { color: "Blue", description: "For potable water applications", image: "/images/5.png" },
      ].map((item, index) => (
        <div key={index} className="overflow-hidden rounded-lg bg-white shadow-md">
          <div className="relative h-64">
            <Image
              src={item.image}
              alt={`${item.color} Hydrophilic Swell Bar`}
              fill
              className="object-cover"
            />
          </div>
          <div className="p-4">
            <h3 className="text-lg font-semibold">{item.color} Swell Bar</h3>
            <p className="text-foreground/80">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* Installation Guide */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold text-primary">Installation Guide</h2>
            <p className="mb-8 text-lg text-foreground/90">
              Follow these steps to ensure proper installation of Flexverse® Hydrophilic Swell Bar
            </p>
          </div>

          <div className="mx-auto max-w-4xl">
            <div className="grid gap-8 md:grid-cols-2">
              <div className="rounded-lg bg-white p-6 shadow-md">
                <h3 className="mb-4 text-xl font-semibold">Surface Preparation</h3>
                <ol className="list-decimal pl-5 space-y-2 text-foreground/90">
                  <li>Clean the concrete surface thoroughly</li>
                  <li>Remove any dust, debris, or loose particles</li>
                  <li>Ensure the surface is dry before installation</li>
                  <li>Smooth out any rough areas</li>
                </ol>
              </div>

              <div className="rounded-lg bg-white p-6 shadow-md">
                <h3 className="mb-4 text-xl font-semibold">Placement</h3>
                <ol className="list-decimal pl-5 space-y-2 text-foreground/90">
                  <li>Position the swell bar in the center of the joint</li>
                  <li>Maintain minimum 50mm concrete cover</li>
                  <li>Secure with adhesive or nails as needed</li>
                  <li>Ensure continuous contact with the concrete surface</li>
                </ol>
              </div>

              <div className="rounded-lg bg-white p-6 shadow-md">
                <h3 className="mb-4 text-xl font-semibold">Joints and Overlaps</h3>
                <ol className="list-decimal pl-5 space-y-2 text-foreground/90">
                  <li>Cut ends square for butt joints</li>
                  <li>Place ends side by side with tight contact</li>
                  <li>For overlaps, use minimum 50mm overlap length</li>
                  <li>Secure overlaps with adhesive if necessary</li>
                </ol>
              </div>

              <div className="rounded-lg bg-white p-6 shadow-md">
                <h3 className="mb-4 text-xl font-semibold">Concrete Pouring</h3>
                <ol className="list-decimal pl-5 space-y-2 text-foreground/90">
                  <li>Pour concrete carefully to avoid displacing the swell bar</li>
                  <li>Ensure proper compaction around the swell bar</li>
                  <li>Allow concrete to cure as per specifications</li>
                  <li>Inspect joints after curing if possible</li>
                </ol>
              </div>
            </div>

            <div className="mt-8 text-center">
              <p className="text-foreground/90 italic">
                For detailed installation instructions, please refer to our technical data sheet or contact our support
                team.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
    
      {/* CTA Section */}
      <section className="gradient-bg py-16 text-header">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold">Ready to Order?</h2>
            <p className="mb-8 text-lg text-header/90">
              Contact our sales team for pricing, availability, and technical support
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90" asChild>
                <Link href="/contact">Request a Quote</Link>
              </Button>
              {/* <Button size="lg" variant="outline" className="text-header border-white hover:bg-white/10" asChild>
                <Link href="/contact">Technical Support</Link>
              </Button> */}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

