"use client"

import { useRef } from "react"
import Image from "next/image"

interface ClientCarouselProps {
  clients: Array<{
    name: string
    logo: string
  }>
}

export default function ClientCarousel({ clients }: ClientCarouselProps) {
  const carouselRef = useRef<HTMLDivElement>(null)

  // Duplicate the clients array to create a seamless loop effect
  const duplicatedClients = [...clients, ...clients]

  return (
    <div className="w-full overflow-hidden">
      <div className="relative">
        <div className="client-carousel-track flex animate-scroll">
          {duplicatedClients.map((client, index) => (
            <div
              key={`${client.name}-${index}`}
              className="client-carousel-item mx-4 flex h-32 w-48 shrink-0 items-center justify-center rounded-lg bg-white p-4 shadow-md"
            >
              <div className="relative h-24 w-full">
                <Image src={client.logo || "/placeholder.svg"} alt={client.name} fill className="object-contain" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

