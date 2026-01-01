"use client"

import Link from "next/link"
import { ArrowRight, Shield, Cpu, Database, Volume2, Key, FileText, FileStack, ShieldCheck, Fingerprint, LucideIcon } from "lucide-react"
import { motion } from "framer-motion"
import { AnimatedBlobs } from "./animated-blobs"
import { products, IconName } from "@/lib/products"
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card"
import { Cover } from "@/components/ui/cover"

const iconMap: Record<IconName, LucideIcon> = {
  Shield,
  Cpu,
  Database,
  Volume2,
  Key,
  FileText,
  FileStack,
  ShieldCheck,
  Fingerprint,
}

export function HeroSection() {
  return (
    <section className="pt-32 lg:pt-40 pb-8 relative overflow-hidden">
      {/* Animated Blobs Background */}
      <AnimatedBlobs position="left" />
      <AnimatedBlobs position="right" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Top Tagline */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-200 rounded-full mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            <span className="text-xs font-medium text-blue-600 uppercase tracking-wider">Enterprise AI Solutions</span>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Securing the Future of{" "}
            <Cover className="text-black">Intelligent Enterprise</Cover>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Deep tech solutions for fraud prevention, industrial security, and enterprise intelligence.
          </p>
        </motion.div>

        {/* Company Tagline & Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-8 mb-16 max-w-4xl mx-auto shadow-sm"
        >
          <h2 className="text-xl md:text-2xl font-bold text-foreground mb-4 text-center">
            Where <span className="text-primary">Deep Tech</span> Meets Real-World Impact
          </h2>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed text-center mb-8">
            Yellowsense Technologies is a Bengaluru-based deep tech company building AI-driven solutions 
            for industries that demand precision, security, and reliability. From detecting industrial faults 
            before they cause downtime, to stopping financial fraud in real-time, to safeguarding enterprises 
            from cyber threats — we combine cutting-edge machine learning with domain expertise to solve 
            problems that matter.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <span className="px-4 py-1.5 bg-secondary/50 rounded-full text-sm font-medium text-foreground border border-border">
              Industrial AI
            </span>
            <span className="px-4 py-1.5 bg-secondary/50 rounded-full text-sm font-medium text-foreground border border-border">
              Fraud Prevention
            </span>
            <span className="px-4 py-1.5 bg-secondary/50 rounded-full text-sm font-medium text-foreground border border-border">
              Cybersecurity
            </span>
            <span className="px-4 py-1.5 bg-secondary/50 rounded-full text-sm font-medium text-foreground border border-border">
              Voice AI
            </span>
          </div>
        </motion.div>

        {/* Our Solutions Section */}
        <div className="max-w-3xl mx-auto text-center mb-12 pt-20 lg:pt-32">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-semibold text-amber-500 uppercase tracking-wider"
          >
            Our Solutions
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6"
          >
            Deep Tech & Cybersecurity
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-muted-foreground leading-relaxed"
          >
            Comprehensive solutions for fraud prevention, industrial fault detection, and enterprise security.
          </motion.p>
        </div>

        {/* Products Grid with 3D Cards */}
        <div id="products" className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto items-stretch">
          {products.map((product, index) => {
            const Icon = iconMap[product.iconName]
            return (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="h-full"
              >
                <Link href={`/products/${product.slug}`} className="h-full block">
                  <CardContainer containerClassName="py-0 h-full" className="w-full h-full">
                    <CardBody className="bg-card relative group/card border border-border rounded-2xl p-6 h-full w-full flex flex-col hover:shadow-2xl hover:border-primary/50 transition-shadow duration-300">
                      {/* Hover gradient overlay */}
                      <div 
                        className={`absolute inset-0 bg-gradient-to-br ${product.gradient} opacity-0 group-hover/card:opacity-5 transition-opacity duration-300 rounded-2xl`}
                      />
                      
                      {/* Icon */}
                      <CardItem
                        translateZ={50}
                        className="w-14 h-14 rounded-xl flex items-center justify-center mb-5"
                        style={{ backgroundColor: `${product.color}20` }}
                      >
                        <Icon 
                          className="w-7 h-7" 
                          style={{ color: product.color }}
                        />
                      </CardItem>

                      {/* Tagline */}
                      <CardItem
                        translateZ={40}
                        className="text-[10px] font-bold tracking-[0.15em] uppercase mb-2 block"
                        style={{ color: product.color }}
                      >
                        {product.tagline}
                      </CardItem>

                      {/* Name */}
                      <CardItem
                        translateZ={30}
                        className="text-xl font-bold text-foreground mb-3"
                      >
                        {product.name}
                      </CardItem>

                      {/* Description */}
                      <CardItem
                        translateZ={20}
                        className="text-sm text-muted-foreground leading-relaxed mb-4 flex-grow"
                      >
                        {product.shortDescription}
                      </CardItem>

                      {/* Arrow */}
                      <CardItem
                        translateZ={60}
                        className="flex items-center gap-2 text-sm font-medium text-primary group-hover/card:text-primary/80 transition-colors mt-auto"
                      >
                        Learn more
                        <ArrowRight className="w-4 h-4 group-hover/card:translate-x-1 transition-transform" />
                      </CardItem>
                    </CardBody>
                  </CardContainer>
                </Link>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
