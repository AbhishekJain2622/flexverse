import { Award, Leaf, LightbulbIcon, Shield, Users } from "lucide-react"

export default function ValuesSection() {
  const values = [
    {
      title: "Innovation",
      description: "We continuously seek new ideas and approaches to solve complex problems.",
      icon: <LightbulbIcon className="h-6 w-6" />,
    },
    {
      title: "Quality",
      description: "We are committed to delivering products and services of the highest standard.",
      icon: <Award className="h-6 w-6" />,
    },
    {
      title: "Integrity",
      description: "We conduct our business with honesty, transparency, and ethical practices.",
      icon: <Shield className="h-6 w-6" />,
    },
    {
      title: "Customer Focus",
      description: "We prioritize our customers' needs and strive to exceed their expectations.",
      icon: <Users className="h-6 w-6" />,
    },
    {
      title: "Teamwork",
      description: "We believe in collaboration and the power of working together toward common goals.",
      icon: <Users className="h-6 w-6" />,
    },
    {
      title: "Sustainability",
      description: "We are committed to environmentally responsible business practices.",
      icon: <Leaf className="h-6 w-6" />,
    },
  ]

  return (
    <section className="bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-primary md:text-4xl font-teko">Our Core Values</h2>
          <p className="mx-auto max-w-3xl text-lg font-roboto text-gray-600">
            Our values guide every decision we make and define who we are as a company
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {values.map((value, index) => (
            <div key={index} className="rounded-lg bg-white p-6 shadow-md transition-all duration-300 hover:shadow-lg">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
                {value.icon}
              </div>
              <h3 className="mb-2 text-xl font-semibold font-heading font-teko">{value.title}</h3>
              <p className="text-gray-600 font-sans font-roboto">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

