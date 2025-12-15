"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export function ClientsSection() {
  const logos = [
    "/assets/img-1.webp",
    "/assets/img-2.webp",
    "/assets/img-3.webp",
    "/assets/img-4.webp",
    "/assets/img-5.webp",
    "/assets/img-6.webp",
  ]

  return (
    <section className="pt-8 pb-16 overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
            Trusted by Industry Leaders
          </span>
        </motion.div>

        {/* Infinite scroll logos */}
        <div className="relative">
          <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
            <motion.div
              animate={{ x: ["0%", "-50%"] }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="flex gap-16 shrink-0"
            >
              {[...logos, ...logos].map((src, index) => (
                <div 
                  key={index}
                  className="flex items-center justify-center h-16 w-32 grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all"
                >
                  <img
                    src={src}
                    alt={`Partner ${index + 1}`}
                    className="h-12 w-auto object-contain"
                  />
                </div>
              ))}
            </motion.div>
            <motion.div
              animate={{ x: ["0%", "-50%"] }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="flex gap-16 shrink-0"
            >
              {[...logos, ...logos].map((src, index) => (
                <div 
                  key={index}
                  className="flex items-center justify-center h-16 w-32 grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all"
                >
                  <img
                    src={src}
                    alt={`Partner ${index + 1}`}
                    className="h-12 w-auto object-contain"
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

