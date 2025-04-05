"use client"

import type React from "react"

import { useState } from "react"
import { Mail, MapPin, Phone } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/components/ui/use-toast"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    inquiry: "general",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleRadioChange = (value: string) => {
    setFormData((prev) => ({ ...prev, inquiry: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    toast({
      title: "Message Sent",
      description: "Thank you for contacting us. We'll get back to you shortly.",
    })
    // In a real application, you would send the form data to your backend
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
      inquiry: "general",
    })
  }

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section
  className="relative bg-primary py-20 text-white bg-cover bg-center bg-no-repeat"
  style={{ backgroundImage: "url('/images/Untitled.png')" }} // Replace with your actual image path
>
  <div className="container mx-auto px-4">
    <div className="mx-auto max-w-3xl text-center">
      <h1 className="mb-6 text-5xl font-bold md:text-6xl font-['teko','Sans-Serif']">Contact Us</h1>
      <p className="text-[30px] text-white/90 md:text-[25px] font-['roboto','Sans-Serif']">
        Have questions or want to learn more about our products? Get in touch with our team.
      </p>
    </div>
  </div>

</section>



      {/* Contact Form & Info Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-10 lg:grid-cols-2">
            {/* Contact Form */}
            <div>
              <h2 className="mb-6 text-3xl font-bold text-primary md:text-4xl font-['teko','Sans-Serif']">Send Us a Message</h2>
              <Card>
                <CardContent className="p-6">
                  <form onSubmit={handleSubmit} className="space-y-6 text-[30px] font-['roboto','Sans-Serif']">
                    <div className="grid gap-6 md:grid-cols-2 ">
                      <div className="space-y-2">
                        <Label htmlFor="name">Your Name</Label>
                        <Input
                          id="name"
                          name="name"
                          placeholder="John Doe"
                          required
                          value={formData.name}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="johndoe@example.com"
                          required
                          value={formData.email}
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    <div className="grid gap-6 md:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          name="phone"
                          placeholder="+91 1234567890"
                          value={formData.phone}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="subject">Subject</Label>
                        <Input
                          id="subject"
                          name="subject"
                          placeholder="Product Inquiry"
                          required
                          value={formData.subject}
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label>Type of Inquiry</Label>
                      <RadioGroup
                        value={formData.inquiry}
                        onValueChange={handleRadioChange}
                        className="flex flex-wrap gap-4"
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="general" id="general" />
                          <Label htmlFor="general">General Inquiry</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="product" id="product" />
                          <Label htmlFor="product">Product Information</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="support" id="support" />
                          <Label htmlFor="support">Technical Support</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="other" id="other" />
                          <Label htmlFor="other">Other</Label>
                        </div>
                      </RadioGroup>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Your Message</Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Please describe your inquiry in detail..."
                        className="min-h-32"
                        required
                        value={formData.message}
                        onChange={handleChange}
                      />
                    </div>

                    <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="mb-6 text-3xl font-bold text-primary md:text-4xl font-['teko','Sans-Serif']">Get in Touch</h2>

              <div className="mb-8 space-y-6 font-['roboto','Sans-Serif']">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="mb-2 text-[25px] font-semibold">Our Location</h3>
                    <p className="text-gray-400 text-[20px]">Inizio, 201, Cardinal Gracious Road, Chakala.</p>
                    <p className="text-gray-400 text-[20px]">Andheri East, Mumbai 400049</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="mb-2 text-[25px] font-semibold">Phone Number</h3>
                    <a href="tel:+919322288578" className="text-gray-400 text-[20px]">
                  +91 9322288578
                </a>
                    {/* <p className="text-gray-600">+91 9876543210</p> */}
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="mb-2 text-[25px] font-semibold">Email Address</h3>
                    <a href="mailto:info@flexverse.in" className="text-gray-400 text-[20px]">
                  info@flexverse.in
                </a>
                    {/* <p className="text-gray-600">support@flexverse.in</p> */}
                  </div>
                </div>
              </div>

              <div className="rounded-lg overflow-hidden h-80 bg-gray-200">
  <iframe
    className="w-full h-full md:h-[350px]"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15058.186515453583!2d72.8491434!3d19.1140828!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c83139b896df%3A0x5013c75ebae5a4f1!2sInizio!5e0!3m2!1sen!2sin!4v1711212345678"
    allowFullScreen
    loading="lazy"
  ></iframe>
</div>


             
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-4xl font-bold text-primary md:text-5xl font-['teko','Sans-Serif']">Frequently Asked Questions</h2>
            <p className="mx-auto max-w-4xl md:text-2xl text-gray-600 font-['roboto','Sans-Serif']">
              Find answers to common questions about our products and services
            </p>
          </div>

          <div className="mx-auto grid max-w-4xl gap-6">
            {[
              {
                question: "What industries do you serve?",
                answer:
                  "Flexverse serves a wide range of industries including manufacturing, healthcare, finance, retail, and technology. Our solutions are designed to be adaptable to various business contexts and requirements.",
              },
              {
                question: "Do you provide customized solutions?",
                answer:
                  "Yes, we offer customized solutions tailored to your specific business needs. Our team works closely with you to understand your requirements and develop a solution that addresses your unique challenges.",
              },
              {
                question: "What kind of support do you offer?",
                answer:
                  "We provide comprehensive support including technical assistance, training, and maintenance. Our support team is available via phone, email, and chat to address any issues or questions you may have.",
              },
              {
                question: "What is your typical implementation timeline?",
                answer:
                  "The implementation timeline varies depending on the complexity of the solution and specific requirements. For standard implementations, it typically takes 4-6 weeks, while more complex projects may take 2-3 months.",
              },
              {
                question: "Do you offer training for your products?",
                answer:
                  "Yes, we provide comprehensive training programs for all our products. These include online tutorials, documentation, and personalized training sessions to ensure your team can effectively use our solutions.",
              },
            ].map((faq, index) => (
              <div key={index} className="rounded-lg bg-white p-6 shadow-md">
                <h3 className="mb-3 text-[30px] font-semibold font-['teko','Sans-Serif']">{faq.question}</h3>
                <p className="text-gray-600 text-[18px] font-['roboto','Sans-Serif']">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

