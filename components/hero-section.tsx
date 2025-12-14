"use client"

import Link from "next/link"
import { ArrowRight, Shield, Cpu, Database, LineChart, Lock, Users, LucideIcon } from "lucide-react"
import { motion } from "framer-motion"
import { AnimatedBlobs } from "./animated-blobs"
import { products, IconName } from "@/lib/products"

const iconMap: Record<IconName, LucideIcon> = {
  Shield,
  Cpu,
  Database,
  LineChart,
  Lock,
  Users,
}

export function HeroSection() {
  return (
    <section className="pt-32 pb-20 relative overflow-hidden">
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
            <span className="bg-gradient-to-r from-blue-500 via-amber-500 to-emerald-500 bg-clip-text text-transparent">
              Intelligent Enterprise
            </span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Deep tech solutions for fraud prevention, industrial security, and enterprise intelligence.
          </p>
        </motion.div>

        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mb-10"
        >
          <span className="text-sm font-semibold text-amber-500 uppercase tracking-wider">Our Solutions</span>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-2">
            Explore Our Products
          </h2>
        </motion.div>

        {/* Products Grid */}
        <div id="products" className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {products.map((product, index) => {
            const Icon = iconMap[product.iconName]
            return (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link href={`/products/${product.slug}`}>
                  <div className="group relative bg-card rounded-2xl border border-border p-6 h-full hover:border-amber-300 hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden">
                    {/* Hover gradient overlay */}
                    <div 
                      className={`absolute inset-0 bg-gradient-to-br ${product.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                    />
                    
                    <div className="relative z-10">
                      {/* Icon */}
                      <div 
                        className="w-14 h-14 rounded-xl flex items-center justify-center mb-5 transition-transform group-hover:scale-110"
                        style={{ backgroundColor: `${product.color}20` }}
                      >
                        <Icon 
                          className="w-7 h-7 transition-colors" 
                          style={{ color: product.color }}
                        />
                      </div>

                      {/* Tagline */}
                      <span 
                        className="text-[10px] font-bold tracking-[0.15em] uppercase mb-2 block"
                        style={{ color: product.color }}
                      >
                        {product.tagline}
                      </span>

                      {/* Name */}
                      <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-amber-600 transition-colors">
                        {product.name}
                      </h3>

                      {/* Description */}
                      <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                        {product.shortDescription}
                      </p>

                      {/* Arrow */}
                      <div className="flex items-center gap-2 text-sm font-medium text-amber-500 group-hover:text-amber-600 transition-colors">
                        Learn more
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
