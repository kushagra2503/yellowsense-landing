"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Shield, Cpu, LineChart, Database, Lock } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { AnimatedBlobs } from "./animated-blobs"

const products = [
  {
    id: "fraud-detection",
    tagline: "DETECT FRAUD IN REAL-TIME",
    name: "Fraud Detection",
    description: "AI-powered transaction monitoring and behavioral analysis to prevent financial fraud before it happens.",
    icon: Shield,
    color: "#fcd34d",
  },
  {
    id: "fault-detection",
    tagline: "PREDICT FAILURES BEFORE THEY OCCUR",
    name: "Industrial Fault Detection",
    description: "Advanced sensing solutions for real-time fault detection and predictive maintenance in industrial systems.",
    icon: Cpu,
    color: "#fbbf24",
  },
  {
    id: "clean-rooms",
    tagline: "SECURE DATA ENVIRONMENTS",
    name: "Confidential Clean Rooms",
    description: "Secure, compliant data environments for sensitive data processing with advanced privacy controls.",
    icon: Database,
    color: "#fcd34d",
  },
  {
    id: "analytics",
    tagline: "UNCOVER HIDDEN INSIGHTS",
    name: "Data Analytics",
    description: "Big data fusion and analytics platform for comprehensive threat intelligence and business insights.",
    icon: LineChart,
    color: "#fde047",
  },
  {
    id: "cybersecurity",
    tagline: "PROTECT YOUR DIGITAL ASSETS",
    name: "Cybersecurity",
    description: "Proactive threat detection and security audits to safeguard your critical infrastructure.",
    icon: Lock,
    color: "#fbbf24",
  },
]

export function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % products.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const currentProduct = products[currentIndex]

  return (
    <section className="min-h-screen pt-24 pb-12 flex items-center relative overflow-hidden">
      {/* Animated Blobs Background */}
      <AnimatedBlobs position="left" />
      <AnimatedBlobs position="right" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="bg-card/80 backdrop-blur-sm rounded-3xl shadow-sm border border-border/50 overflow-hidden">
          <div className="grid lg:grid-cols-2 min-h-[600px]">
            {/* Left Content */}
            <div className="p-8 lg:p-16 flex flex-col justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentProduct.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  <span className="inline-block text-xs font-semibold tracking-[0.2em] text-muted-foreground uppercase mb-6 px-4 py-2 bg-secondary rounded-full">
                    {currentProduct.tagline}
                  </span>

                  <div className="flex items-center gap-3 mb-6">
                    <div 
                      className="w-10 h-10 rounded-xl flex items-center justify-center"
                      style={{ backgroundColor: `${currentProduct.color}20` }}
                    >
                      <currentProduct.icon 
                        className="w-5 h-5" 
                        style={{ color: currentProduct.color }}
                      />
                    </div>
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
                      {currentProduct.name}
                    </h1>
                  </div>

                  <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-lg leading-relaxed">
                    {currentProduct.description}
                  </p>

                  <Button 
                    size="lg" 
                    className="rounded-full px-8 gap-2 bg-gradient-to-r from-yellow-300 to-amber-400 text-gray-800 hover:from-yellow-400 hover:to-amber-500 transition-all"
                  >
                    Explore more
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </motion.div>
              </AnimatePresence>

              {/* Dots Navigation */}
              <div className="flex gap-2 mt-12">
                {products.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setCurrentIndex(index)
                      setIsAutoPlaying(false)
                    }}
                    className={`h-2 rounded-full transition-all ${
                      index === currentIndex 
                        ? "w-8 bg-yellow-400" 
                        : "w-2 bg-border hover:bg-muted-foreground"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Right Illustration */}
            <div className="relative bg-gradient-to-br from-secondary/50 to-background p-8 lg:p-16 flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentProduct.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                  className="relative w-full max-w-md aspect-square"
                >
                  {/* Abstract illustration */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div 
                      className="w-64 h-64 rounded-3xl rotate-12 opacity-20"
                      style={{ backgroundColor: currentProduct.color }}
                    />
                    <div 
                      className="absolute w-48 h-48 rounded-2xl -rotate-6 opacity-30"
                      style={{ backgroundColor: currentProduct.color }}
                    />
                    <div 
                      className="absolute w-32 h-32 rounded-xl rotate-45 opacity-40 flex items-center justify-center bg-card shadow-lg"
                    >
                      <currentProduct.icon 
                        className="w-12 h-12 -rotate-45" 
                        style={{ color: currentProduct.color }}
                      />
                    </div>
                  </div>

                  {/* Floating elements */}
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-10 right-10 w-16 h-16 bg-card rounded-xl shadow-lg flex items-center justify-center"
                  >
                    <Shield className="w-8 h-8 text-yellow-400" />
                  </motion.div>

                  <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                    className="absolute bottom-20 left-10 w-12 h-12 bg-card rounded-lg shadow-lg flex items-center justify-center"
                  >
                    <Cpu className="w-6 h-6 text-amber-400" />
                  </motion.div>

                  <motion.div
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="absolute top-1/3 left-5 w-10 h-10 bg-card rounded-lg shadow-lg flex items-center justify-center"
                  >
                    <Lock className="w-5 h-5 text-amber-400" />
                  </motion.div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
