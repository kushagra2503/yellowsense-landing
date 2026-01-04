"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, ChevronDown } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  const navLinks = [
    { href: "/", label: "Home" },
    { 
      href: "/#products", 
      label: "Products",
      dropdown: [
        { label: "Fraud Detection", desc: "Real-time transaction monitoring", href: "/products/fraud-detection" },
        { label: "Industrial Fault Detection", desc: "AI-powered anomaly detection", href: "/products/fault-detection" },
        { label: "Confidential Clean Rooms", desc: "Secure data environments", href: "/products/clean-rooms" },
        { label: "TTS Model", desc: "Natural voice synthesis AI", href: "/products/sys-pin-tts" },
        { label: "Encryption & Security Platform", desc: "Advanced data protection", href: "/products/encryption-platform" },
        { label: "Document Processing", desc: "Intelligent document automation", href: "/products/document-processing" },
        { label: "eTappal Automation", desc: "Smart government workflows", href: "/products/etappal-automation" },
        { label: "Compliance Monitoring System", desc: "Automated regulatory compliance", href: "/products/compliance-monitoring" },
        { label: "Contactless Fingerprint", desc: "Biometric security", href: "/products/fingerprint-authentication" },
        { label: "Naval Innovation", desc: "Maritime intelligence", href: "/products/naval-innovation" },
      ]
    },
    { href: "/#about", label: "About Us" },
    { href: "/#team", label: "Team" },
    { href: "/#contact", label: "Contact" },
  ]

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/30"
    >
      <nav className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Image
                src="/assets/logo.jpeg"
                alt="Yellowsense Technologies"
                width={40}
                height={40}
                className="rounded-lg"
              />
            </motion.div>
            <span className="font-bold text-lg text-foreground">
              Yellowsense Technologies
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <div 
                key={link.label} 
                className="relative"
                onMouseEnter={() => setActiveDropdown(link.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={link.href}
                  className="flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors px-4 py-2 rounded-full hover:bg-secondary"
                >
                  {link.label}
                  {link.dropdown && (
                    <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === link.label ? 'rotate-180' : ''}`} />
                  )}
                </Link>
                
                {link.dropdown && (
                  <AnimatePresence>
                    {activeDropdown === link.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.15 }}
                        className="absolute top-full left-0 w-72 bg-card border border-border rounded-2xl shadow-xl p-2 mt-2"
                      >
                        {link.dropdown.map((item) => (
                          <Link
                            key={item.label}
                            href={item.href}
                            className="block p-3 rounded-xl hover:bg-secondary transition-colors"
                          >
                            <div className="font-medium text-foreground text-sm">{item.label}</div>
                            {'desc' in item && (
                              <div className="text-xs text-muted-foreground mt-0.5">{item.desc}</div>
                            )}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </div>

          <div className="hidden lg:block">
            <Link href="#contact">
              <Button className="rounded-full px-6 bg-gradient-to-r from-yellow-300 to-amber-400 text-gray-800 hover:from-yellow-400 hover:to-amber-500 font-medium transition-all">
                Get in touch
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden p-2 rounded-full hover:bg-secondary transition-colors" 
            onClick={() => setIsOpen(!isOpen)} 
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden overflow-hidden"
            >
              <div className="flex flex-col gap-2 py-6 border-t border-border">
                {navLinks.map((link) => (
                  <div key={link.label}>
                    <Link
                      href={link.href}
                      className="flex items-center justify-between text-lg font-medium text-foreground py-3 px-4 rounded-xl hover:bg-secondary transition-colors"
                      onClick={() => !link.dropdown && setIsOpen(false)}
                    >
                      {link.label}
                      {link.dropdown && <ChevronDown className="w-5 h-5" />}
                    </Link>
                    {link.dropdown && (
                      <div className="pl-4 mt-1 space-y-1 border-l-2 border-border ml-4">
                        {link.dropdown.map((item) => (
                          <Link
                            key={item.label}
                            href={item.href}
                            className="block text-sm text-muted-foreground hover:text-foreground py-2 px-4 rounded-lg hover:bg-secondary transition-colors"
                            onClick={() => setIsOpen(false)}
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <div className="pt-4 px-4">
                  <Link href="#contact" onClick={() => setIsOpen(false)}>
                    <Button className="w-full rounded-full bg-gradient-to-r from-yellow-300 to-amber-400 text-gray-800 hover:from-yellow-400 hover:to-amber-500">
                      Get in touch
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  )
}
