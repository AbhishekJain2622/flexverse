import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Define products with SEO-friendly slugs
const products = [
  {
    title: "Hydrophilic Swell Bar",
    slug: "hydrophilic-swell-bar",
    category: "waterproofing",
    categoryName: "Waterproofing",
    description: "Advanced water stop solution for concrete construction joints and penetrations.",
    image: "/images/1.png",
    featured: true,
  },
  {
    title: "PVC Waterstop",
    slug: "pvc-waterstop",
    category: "waterproofing",
    categoryName: "Waterproofing",
    description: "Flexible PVC waterstops for movement and construction joints.",
    image: "/placeholder.svg?height=400&width=600&text=PVC+Waterstop",
  },
  {
    title: "Injection Hose System",
    slug: "injection-hose-system",
    category: "waterproofing",
    categoryName: "Waterproofing",
    description: "Re-injectable hose system for sealing construction joints.",
    image: "/placeholder.svg?height=400&width=600&text=Injection+Hose",
  },
  {
    title: "Bentonite Waterstop",
    slug: "bentonite-waterstop",
    category: "waterproofing",
    categoryName: "Waterproofing",
    description: "Sodium bentonite-based waterstop for construction joints.",
    image: "/placeholder.svg?height=400&width=600&text=Bentonite+Waterstop",
  },
  {
    title: "Expansion Joint System",
    slug: "expansion-joint-system",
    category: "joints",
    categoryName: "Joint Systems",
    description: "Comprehensive solutions for building and structural expansion joints.",
    image: "/placeholder.svg?height=400&width=600&text=Expansion+Joints",
  },
  {
    title: "Rubber Profiles",
    slug: "rubber-profiles",
    category: "rubber",
    categoryName: "Rubber Products",
    description: "Custom rubber profiles for various industrial applications.",
    image: "/placeholder.svg?height=400&width=600&text=Rubber+Profiles",
  },
]

export default function ProductsPage() {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="relative bg-header py-20 text-white">
        <div className="absolute inset-0 opacity-30">
          <Image
            src="/placeholder.svg?height=1080&width=1920"
            alt="Flexverse Products"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold md:text-5xl">Our Products</h1>
            <p className="text-lg text-white/90 md:text-xl">
              Discover our comprehensive range of innovative solutions designed to meet your specific needs
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-white clip-path-bottom"></div>
      </section>

      {/* Featured Product */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-8 text-3xl font-bold text-primary text-center">Featured Product</h2>
          <div className="mx-auto max-w-5xl">
            <div className="overflow-hidden rounded-lg bg-white shadow-lg">
              <div className="grid md:grid-cols-2">
                <div className="relative h-64 md:h-auto">
                  <Image
                    src="/placeholder.svg?height=600&width=800&text=Hydrophilic+Swell+Bar"
                    alt="Hydrophilic Swell Bar"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-8">
                  <div className="mb-2 inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                    Featured
                  </div>
                  <h3 className="mb-3 text-2xl font-bold">Hydrophilic Swell Bar</h3>
                  <p className="mb-6 text-foreground/80">
                    The Flexverse® hydrophilic swell bar is a water stop that can be used to stop water ingress through
                    cast-in-place concrete construction joints and penetrations in concrete. The profile has a
                    sophisticated hydrophilic structure, which has been engineered to swell on contact with water.
                  </p>
                  <Button className="gradient-bg text-header hover:opacity-90" asChild>
                    <Link href="/products/hydrophilic-swell-bar">Learn More</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Tabs */}
      <section className="py-16 bg-secondary/5">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="all" className="mx-auto max-w-4xl">
            <div className="mb-12 text-center">
              <TabsList className="inline-flex">
                <TabsTrigger value="all">All Products</TabsTrigger>
                <TabsTrigger value="waterproofing">Waterproofing</TabsTrigger>
                <TabsTrigger value="joints">Joint Systems</TabsTrigger>
                <TabsTrigger value="rubber">Rubber Products</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="all" className="mt-0">
              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {products.map((product, index) => (
                  <ProductCard key={index} product={product} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="waterproofing" className="mt-0">
              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {products
                  .filter((p) => p.category === "waterproofing")
                  .map((product, index) => (
                    <ProductCard key={index} product={product} />
                  ))}
              </div>
            </TabsContent>

            <TabsContent value="joints" className="mt-0">
              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {products
                  .filter((p) => p.category === "joints")
                  .map((product, index) => (
                    <ProductCard key={index} product={product} />
                  ))}
              </div>
            </TabsContent>

            <TabsContent value="rubber" className="mt-0">
              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {products
                  .filter((p) => p.category === "rubber")
                  .map((product, index) => (
                    <ProductCard key={index} product={product} />
                  ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-primary md:text-4xl">Why Choose Our Products</h2>
            <p className="mx-auto max-w-3xl text-lg text-foreground/90">
              Our products are designed with these powerful features to provide the best experience and results
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Premium Quality",
                description: "All our products are manufactured to the highest industry standards.",
                icon: "award",
              },
              {
                title: "Durability",
                description: "Designed to withstand harsh conditions and provide long-term performance.",
                icon: "shield",
              },
              {
                title: "Technical Support",
                description: "Expert technical assistance available throughout your project lifecycle.",
                icon: "headphones",
              },
              {
                title: "Custom Solutions",
                description: "Tailored products to meet your specific project requirements.",
                icon: "settings",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="rounded-lg bg-white p-6 shadow-md transition-all duration-300 hover:shadow-lg"
              >
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
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
                    className="lucide h-6 w-6"
                  >
                    {feature.icon === "award" && (
                      <>
                        <circle cx="12" cy="8" r="7"></circle>
                        <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
                      </>
                    )}
                    {feature.icon === "shield" && <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path>}
                    {feature.icon === "headphones" && (
                      <>
                        <path d="M3 18v-6a9 9 0 0 1 18 0v6"></path>
                        <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path>
                      </>
                    )}
                    {feature.icon === "settings" && (
                      <>
                        <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path>
                        <circle cx="12" cy="12" r="3"></circle>
                      </>
                    )}
                  </svg>
                </div>
                <h3 className="mb-2 text-xl font-semibold">{feature.title}</h3>
                <p className="text-foreground/80">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="gradient-bg py-20 text-header">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-3xl font-bold md:text-4xl">Ready to Transform Your Project?</h2>
            <p className="mb-8 text-lg text-header/90">
              Take the first step towards optimizing your operations with our innovative solutions. Contact us today for
              a personalized consultation.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-white/90 relative overflow-hidden group animate-pulse"
                asChild
              >
                <Link href="/contact" className="flex items-center gap-2">
                  <span className="relative z-10">Request a Demo</span>
                  <span className="absolute inset-0 bg-white/30 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="text-header border-header hover:bg-white/10" asChild>
                <Link href="/contact">Contact Sales</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

function ProductCard({
  product,
}: {
  product: {
    title: string
    slug: string
    category: string
    categoryName: string
    description: string
    image: string
    featured?: boolean
  }
}) {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg">
      <div className="relative h-56">
        <Image src={product.image || "/placeholder.svg"} alt={product.title} fill className="object-cover" />
        <div className="absolute right-3 top-3 rounded bg-primary px-2 py-1 text-xs font-medium text-header">
          {product.categoryName}
        </div>
      </div>
      <CardContent className="p-6">
        <h3 className="mb-2 text-xl font-semibold">{product.title}</h3>
        <p className="mb-4 text-foreground/80">{product.description}</p>
        <Button variant="link" className="p-0 text-primary" asChild>
          <Link href={`/products/${product.slug}`} className="flex items-center gap-2">
            Learn More <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  )
}

