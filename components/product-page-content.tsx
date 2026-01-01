"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowLeft, Check, ArrowRight, Shield, Cpu, Database, Volume2, Key, FileText, FileStack, ShieldCheck, Fingerprint, LucideIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Product, IconName } from "@/lib/products"

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

interface ProductPageContentProps {
  product: Product
}

export function ProductPageContent({ product }: ProductPageContentProps) {
  const Icon = iconMap[product.iconName]

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        {/* Background gradient */}
        <div 
          className={`absolute inset-0 bg-gradient-to-br ${product.gradient} opacity-5`}
        />
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          {/* Back button */}
          <Link 
            href="/#products" 
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Products
          </Link>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div 
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
                style={{ backgroundColor: `${product.color}20` }}
              >
                <Icon className="w-4 h-4" style={{ color: product.color }} />
                <span 
                  className="text-xs font-semibold uppercase tracking-wider"
                  style={{ color: product.color }}
                >
                  {product.tagline}
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                {product.name}
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
                {product.description}
              </p>

              <div className="flex flex-wrap gap-4">
                {product.demoUrl ? (
                  <Link href={product.demoUrl} target="_blank" rel="noopener noreferrer">
                    <Button 
                      size="lg"
                      className={`rounded-full px-8 gap-2 bg-gradient-to-r ${product.gradient} text-white hover:opacity-90 transition-opacity`}
                    >
                      See Demo
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </Link>
                ) : (
                  <Button 
                    size="lg"
                    className={`rounded-full px-8 gap-2 bg-gradient-to-r ${product.gradient} text-white hover:opacity-90 transition-opacity`}
                  >
                    Request Demo
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                )}
              </div>
            </motion.div>

            {/* Right - Video or Illustration */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              {product.hasVideo && product.videoSrc ? (
                <div className="rounded-2xl overflow-hidden shadow-2xl border border-border/30">
                  <video
                    src={product.videoSrc}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-auto object-contain bg-white"
                  />
                </div>
              ) : (
                <div 
                  className="aspect-video rounded-2xl flex items-center justify-center"
                  style={{ backgroundColor: `${product.color}10` }}
                >
                  <div 
                    className="w-32 h-32 rounded-2xl flex items-center justify-center"
                    style={{ backgroundColor: `${product.color}20` }}
                  >
                    <Icon className="w-16 h-16" style={{ color: product.color }} />
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Key Features
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Everything you need to secure and optimize your operations
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {product.features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card rounded-xl p-6 border border-border hover:border-amber-200 hover:shadow-md transition-all"
              >
                <div 
                  className="w-10 h-10 rounded-lg flex items-center justify-center mb-4"
                  style={{ backgroundColor: `${product.color}20` }}
                >
                  <Check className="w-5 h-5" style={{ color: product.color }} />
                </div>
                <h3 className="font-semibold text-foreground">{feature}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose {product.name}?
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {product.benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div 
                  className="text-4xl md:text-5xl font-bold mb-2"
                  style={{ color: product.color }}
                >
                  {benefit.title}
                </div>
                <p className="text-muted-foreground">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-gray-800">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-gray-300 mb-8 max-w-xl mx-auto">
              Transform your operations with {product.name}. Contact our team for a personalized demo.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {product.demoUrl ? (
                <Link href={product.demoUrl} target="_blank" rel="noopener noreferrer">
                  <Button 
                    size="lg"
                    className={`rounded-full px-8 gap-2 bg-gradient-to-r ${product.gradient} text-white hover:opacity-90`}
                  >
                    See Demo
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
              ) : (
                <Button 
                  size="lg"
                  className={`rounded-full px-8 gap-2 bg-gradient-to-r ${product.gradient} text-white hover:opacity-90`}
                >
                  Schedule Demo
                  <ArrowRight className="w-4 h-4" />
                </Button>
              )}
              <Link href="/#contact">
                <Button 
                  size="lg" 
                  variant="outline"
                  className="rounded-full px-8 bg-transparent border-white/50 text-white hover:bg-white/10"
                >
                  Contact Us
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
