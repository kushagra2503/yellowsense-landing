"use client"

import { Shield, Zap, Globe, Award } from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"

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
    },
    {
      icon: Zap,
      title: "Innovation First",
      description: "Pushing the boundaries of what's possible with cutting-edge deep learning.",
    },
    {
      icon: Globe,
      title: "Global Impact",
      description: "Protecting organizations worldwide from synthetic media and digital fraud.",
    },
    {
      icon: Award,
      title: "Research Excellence",
      description: "World-class research team publishing at top AI conferences globally.",
    },
  ]

  return (
    <section id="about" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Main About Card */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-card rounded-3xl border border-border shadow-sm overflow-hidden mb-16"
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

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-card border border-border rounded-2xl p-6 hover:shadow-lg transition-all"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                <value.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{value.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
