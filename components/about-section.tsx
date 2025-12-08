"use client"

import { Shield, Zap, Globe, Award, Users, Target, Lightbulb, TrendingUp } from "lucide-react"
import { motion, useAnimationControls } from "framer-motion"
import { useEffect, useRef, useState } from "react"

export function AboutSection() {
  const stats = [
    { value: "50+", label: "Enterprise Clients" },
    { value: "99.9%", label: "Detection Accuracy" },
    { value: "100M+", label: "Media Analyzed" },
    { value: "24/7", label: "Real-time Monitoring" },
  ]

  const values = [
    {
      icon: Shield,
      title: "Trust & Security",
      description: "Building trustworthy AI systems that protect against digital threats and fraud.",
      color: "#fcd34d",
    },
    {
      icon: Zap,
      title: "Innovation First",
      description: "Pushing the boundaries of what's possible with cutting-edge deep learning.",
      color: "#fbbf24",
    },
    {
      icon: Globe,
      title: "Global Impact",
      description: "Protecting organizations worldwide from synthetic media and digital fraud.",
      color: "#f59e0b",
    },
    {
      icon: Award,
      title: "Research Excellence",
      description: "World-class research team publishing at top AI conferences globally.",
      color: "#d97706",
    },
    {
      icon: Users,
      title: "Customer Focus",
      description: "Dedicated to understanding and solving our clients' unique challenges.",
      color: "#fcd34d",
    },
    {
      icon: Target,
      title: "Precision",
      description: "Delivering accurate, reliable solutions that you can depend on.",
      color: "#fbbf24",
    },
    {
      icon: Lightbulb,
      title: "Creativity",
      description: "Finding innovative approaches to complex industrial problems.",
      color: "#f59e0b",
    },
    {
      icon: TrendingUp,
      title: "Growth",
      description: "Continuously evolving and improving our technology and services.",
      color: "#d97706",
    },
  ]

  return (
    <section id="about" className="py-20 lg:py-32 overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Main About Card */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-card rounded-3xl border border-border shadow-sm overflow-hidden mb-20"
        >
          <div className="grid lg:grid-cols-2">
            {/* Content */}
            <div className="p-8 lg:p-16 flex flex-col justify-center">
              <span className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">
                About Us
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Pioneering the Future of
                <span className="text-yellow-400"> Industrial Security</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Yellowsense Technologies is a forward-focused deep tech company delivering 
                intelligent solutions for industrial security and efficiency. We combine advanced 
                AI with robust cybersecurity to protect and optimize your operations.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our mission is to solve complex industrial challenges through technology that 
                prevents fraud and detects faults before they impact operations, helping 
                businesses operate securely and efficiently.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="bg-gradient-to-br from-primary/5 to-transparent p-8 lg:p-16">
              <div className="grid grid-cols-2 gap-6 h-full">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-card rounded-2xl p-6 flex flex-col justify-center items-center text-center shadow-sm border border-border/50"
                  >
                    <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">
                      {stat.value}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Section Header */}
        <div className="text-center mb-12">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-semibold text-yellow-500 uppercase tracking-wider"
          >
            Our Values
          </motion.span>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-2xl md:text-3xl font-bold text-foreground mt-4"
          >
            What Drives Us Forward
          </motion.h3>
        </div>

        {/* Dia-style Infinite Scroll Cards */}
        <div className="relative">
          {/* Gradient Fade Left */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          
          {/* Gradient Fade Right */}
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

          {/* Marquee Container */}
          <div className="overflow-hidden py-4">
            <motion.div 
              className="flex gap-6"
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                x: {
                  duration: 30,
                  repeat: Infinity,
                  ease: "linear",
                },
              }}
            >
              {/* First set of cards */}
              {values.map((value, index) => (
                <ValueCard key={index} value={value} index={index} />
              ))}
              {/* Duplicate for seamless loop */}
              {values.map((value, index) => (
                <ValueCard key={`dup-${index}`} value={value} index={index} />
              ))}
            </motion.div>
          </div>
        </div>

        {/* Reverse Scroll Row */}
        <div className="relative mt-6">
          {/* Gradient Fade Left */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          
          {/* Gradient Fade Right */}
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

          {/* Marquee Container - Reverse */}
          <div className="overflow-hidden py-4">
            <motion.div 
              className="flex gap-6"
              animate={{ x: ["-50%", "0%"] }}
              transition={{
                x: {
                  duration: 35,
                  repeat: Infinity,
                  ease: "linear",
                },
              }}
            >
              {/* First set of cards - reversed order */}
              {[...values].reverse().map((value, index) => (
                <ValueCard key={`rev-${index}`} value={value} index={index} />
              ))}
              {/* Duplicate for seamless loop */}
              {[...values].reverse().map((value, index) => (
                <ValueCard key={`rev-dup-${index}`} value={value} index={index} />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

interface ValueCardProps {
  value: {
    icon: React.ComponentType<{ className?: string }>
    title: string
    description: string
    color: string
  }
  index: number
}

function ValueCard({ value, index }: ValueCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="flex-shrink-0 w-[300px] group"
    >
      <motion.div
        animate={{
          y: isHovered ? -8 : 0,
          scale: isHovered ? 1.02 : 1,
          rotateX: isHovered ? 5 : 0,
          rotateY: isHovered ? -5 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 20,
        }}
        className="relative bg-card/80 backdrop-blur-sm border border-border/50 rounded-2xl p-6 h-full shadow-sm hover:shadow-xl hover:border-yellow-400/30 transition-all duration-300"
        style={{
          transformStyle: "preserve-3d",
          perspective: "1000px",
        }}
      >
        {/* Glow Effect on Hover */}
        <motion.div
          animate={{
            opacity: isHovered ? 0.15 : 0,
          }}
          className="absolute inset-0 rounded-2xl"
          style={{
            background: `radial-gradient(circle at 50% 50%, ${value.color} 0%, transparent 70%)`,
          }}
        />

        {/* Icon */}
        <motion.div 
          className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 relative z-10"
          style={{ backgroundColor: `${value.color}20` }}
          animate={{
            scale: isHovered ? 1.1 : 1,
            rotate: isHovered ? 5 : 0,
          }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 15,
          }}
        >
          <value.icon 
            className="w-6 h-6 transition-colors duration-300"
            style={{ color: value.color }}
          />
        </motion.div>

        {/* Content */}
        <h3 className="text-lg font-semibold text-foreground mb-2 relative z-10 group-hover:text-yellow-500 transition-colors duration-300">
          {value.title}
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed relative z-10">
          {value.description}
        </p>

        {/* Decorative Corner */}
        <motion.div
          animate={{
            opacity: isHovered ? 1 : 0,
            scale: isHovered ? 1 : 0.8,
          }}
          className="absolute top-4 right-4 w-2 h-2 rounded-full"
          style={{ backgroundColor: value.color }}
        />
      </motion.div>
    </motion.div>
  )
}
