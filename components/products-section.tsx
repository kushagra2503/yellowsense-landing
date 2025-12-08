"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button"
import { ArrowRight, Shield, Database, LineChart, Cpu, Lock, ChevronRight } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion";

const products = [
  {
    id: "fraud-detection",
    name: "Fraud Detection AI",
    tagline: "Real-time transaction monitoring and prevention",
    description: "Advanced AI-powered fraud detection system that monitors transactions in real-time, analyzes behavioral patterns, and prevents financial fraud before it impacts your business.",
    icon: Shield,
    color: "#fcd34d",
    features: ["Transaction Monitoring", "Behavioral Analysis", "Risk Scoring", "Real-time Alerts"]
  },
  {
    id: "fault-detection",
    name: "Industrial Fault Detection",
    tagline: "Predictive maintenance and anomaly detection",
    description: "AI-driven industrial IoT platform for real-time fault detection, predictive maintenance, and process optimization to reduce downtime and improve efficiency.",
    icon: Cpu,
    color: "#fbbf24",
    features: ["Anomaly Detection", "Predictive Maintenance", "IoT Integration", "Process Optimization"]
  },
  {
    id: "clean-rooms",
    name: "Confidential Clean Rooms",
    tagline: "Secure data processing environments",
    description: "Enterprise-grade secure data environments for sensitive data processing, analytics, and collaboration with built-in privacy controls and compliance features.",
    icon: Database,
    color: "#fcd34d",
    features: ["Data Privacy", "Regulatory Compliance", "Secure Enclaves", "Access Controls"]
  },
  {
    id: "analytics",
    name: "Data & Analytics",
    tagline: "Business intelligence and insights",
    description: "Comprehensive data analytics platform that transforms raw data into actionable insights, enabling data-driven decision making across your organization.",
    icon: LineChart,
    color: "#fde047",
    features: ["Business Intelligence", "Predictive Analytics", "Data Visualization", "Custom Reports"]
  },
  {
    id: "cybersecurity",
    name: "Cybersecurity Solutions",
    tagline: "Proactive threat detection and defense",
    description: "End-to-end cybersecurity solutions including threat intelligence, vulnerability assessment, and security audits to protect your digital infrastructure.",
    icon: Lock,
    color: "#fbbf24",
    features: ["Threat Detection", "Security Audits", "Vulnerability Assessment", "Incident Response"]
  },
];

export function ProductsSection() {
  const [activeProduct, setActiveProduct] = useState(products[0]);

  return (
    <section id="products" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-semibold text-yellow-500 uppercase tracking-wider"
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

        {/* Products Grid */}
        <div className="grid lg:grid-cols-12 gap-8">
          {/* Product Navigation */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-4 space-y-2"
          >
            {products.map((product) => (
              <button
                key={product.id}
                onClick={() => setActiveProduct(product)}
                className={`w-full text-left p-4 rounded-2xl transition-all group ${
                  activeProduct.id === product.id
                    ? "bg-card shadow-lg border border-border"
                    : "hover:bg-card/50"
                }`}
              >
                <div className="flex items-center gap-4">
                  <div 
                    className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors ${
                      activeProduct.id === product.id ? "" : "bg-secondary"
                    }`}
                    style={{ 
                      backgroundColor: activeProduct.id === product.id ? `${product.color}20` : undefined
                    }}
                  >
                    <product.icon 
                      className="w-6 h-6 transition-colors"
                      style={{ 
                        color: activeProduct.id === product.id ? product.color : "#6e6e73"
                      }}
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className={`font-semibold transition-colors ${
                      activeProduct.id === product.id ? "text-foreground" : "text-muted-foreground"
                    }`}>
                      {product.name}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-1">
                      {product.tagline}
                    </p>
                  </div>
                  <ChevronRight 
                    className={`w-5 h-5 transition-all ${
                      activeProduct.id === product.id 
                        ? "text-yellow-400 translate-x-1" 
                        : "text-muted-foreground/50 group-hover:translate-x-1"
                    }`}
                  />
                </div>
              </button>
            ))}
          </motion.div>

          {/* Product Detail */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="lg:col-span-8"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeProduct.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="bg-card rounded-3xl border border-border shadow-lg overflow-hidden"
              >
                {/* Product Header */}
                <div 
                  className="p-8 lg:p-12"
                  style={{ background: `linear-gradient(135deg, ${activeProduct.color}10 0%, transparent 100%)` }}
                >
                  <div className="flex items-start gap-4 mb-6">
                    <div 
                      className="w-16 h-16 rounded-2xl flex items-center justify-center"
                      style={{ backgroundColor: `${activeProduct.color}20` }}
                    >
                      <activeProduct.icon 
                        className="w-8 h-8" 
                        style={{ color: activeProduct.color }}
                      />
                    </div>
                    <div>
                      <h3 className="text-2xl lg:text-3xl font-bold text-foreground">
                        {activeProduct.name}
                      </h3>
                      <p className="text-muted-foreground">
                        {activeProduct.tagline}
                      </p>
                    </div>
                  </div>

                  <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                    {activeProduct.description}
                  </p>

                  {/* Features */}
                  <div className="grid sm:grid-cols-2 gap-4 mb-8">
                    {activeProduct.features.map((feature, index) => (
                      <div 
                        key={index}
                        className="flex items-center gap-3 p-3 bg-background/50 rounded-xl"
                      >
                        <div 
                          className="w-2 h-2 rounded-full"
                          style={{ backgroundColor: activeProduct.color }}
                        />
                        <span className="text-sm font-medium text-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-4">
                    <Button 
                      size="lg"
                      className="rounded-full px-8 gap-2 text-white"
                      style={{ backgroundColor: activeProduct.color }}
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                    <Button 
                      size="lg"
                      variant="outline"
                      className="rounded-full px-8"
                    >
                      Request Demo
                    </Button>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
