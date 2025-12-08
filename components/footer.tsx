"use client"
import Link from "next/link"
import Image from "next/image"
import { Linkedin, Twitter, Github, Instagram, MapPin, Mail, Phone } from "lucide-react"
import { motion, useScroll, useSpring, useTransform } from "framer-motion"
import { useRef } from "react"
import { FooterSpiral } from "./animated-blobs"

export function Footer() {
  const pageRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: pageRef,
    offset: ["0 1", "0.5 1"],
  })
  
  const springY = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 50,
  })
  
  const tY = useTransform(springY, [0, 1], ["-300%", "0%"])
  const tY1 = useTransform(springY, [0, 1], ["-350%", "0%"])
  const tY2 = useTransform(springY, [0, 1], ["-400%", "0%"])
  const tY3 = useTransform(springY, [0, 1], ["-450%", "0%"])
  const tY4 = useTransform(springY, [0, 1], ["-500%", "0%"])
  const tY5 = useTransform(springY, [0, 1], ["-550%", "0%"])
  const tY6 = useTransform(springY, [0, 1], ["-600%", "0%"])

  const productLinks = [
    { label: "Fraud Detection AI", href: "#products" },
    { label: "Industrial Fault Detection", href: "#products" },
    { label: "Confidential Clean Rooms", href: "#products" },
    { label: "Data & Analytics", href: "#products" },
    { label: "Cybersecurity Solutions", href: "#products" },
  ]

  const companyLinks = [
    { label: "About us", href: "#about" },
    { label: "Awards & events", href: "#" },
    { label: "Our team", href: "#" },
    { label: "Careers", href: "#" },
  ]

  const resourceLinks = [
    { label: "Research", href: "#" },
    { label: "Documentation", href: "#" },
    { label: "FAQ", href: "#" },
  ]

  const socialLinks = [
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "https://www.linkedin.com/company/yellowsense-technologies/", label: "LinkedIn" },
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Twitter, href: "#", label: "X-Twitter" },
  ]

  return (
    <footer 
      ref={pageRef}
      className="bg-footer-bg text-footer-foreground relative overflow-hidden"
    >
      {/* Animated Spiral Background */}
      <FooterSpiral />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Main Footer Content */}
        <div className="py-16 grid lg:grid-cols-2 gap-12">
          {/* Left Side - Brand & Contact */}
          <div className="space-y-8">
            {/* Animated Logo */}
            <motion.div className="flex items-center gap-3">
              <motion.div 
                style={{ scale: springY }} 
                className="w-12 h-12 rounded-xl overflow-hidden"
              >
                <Image
                  src="/assets/logo.jpeg"
                  alt="Yellowsense Technologies"
                  width={48}
                  height={48}
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <div className="text-2xl font-bold flex overflow-hidden">
                <motion.span style={{ y: tY, scaleY: springY }} className="text-footer-foreground">Y</motion.span>
                <motion.span style={{ y: tY1, scaleY: springY }} className="text-footer-foreground">e</motion.span>
                <motion.span style={{ y: tY2, scaleY: springY }} className="text-footer-foreground">l</motion.span>
                <motion.span style={{ y: tY3, scaleY: springY }} className="text-footer-foreground">l</motion.span>
                <motion.span style={{ y: tY4, scaleY: springY }} className="text-footer-foreground">o</motion.span>
                <motion.span style={{ y: tY5, scaleY: springY }} className="text-footer-foreground">w</motion.span>
                <motion.span style={{ y: tY6, scaleY: springY }} className="text-footer-foreground">sense</motion.span>
                <motion.span style={{ y: tY, scaleY: springY }} className="text-footer-foreground ml-2">T</motion.span>
                <motion.span style={{ y: tY1, scaleY: springY }} className="text-footer-foreground">e</motion.span>
                <motion.span style={{ y: tY2, scaleY: springY }} className="text-footer-foreground">c</motion.span>
                <motion.span style={{ y: tY3, scaleY: springY }} className="text-footer-foreground">h</motion.span>
                <motion.span style={{ y: tY4, scaleY: springY }} className="text-footer-foreground">n</motion.span>
                <motion.span style={{ y: tY5, scaleY: springY }} className="text-footer-foreground">o</motion.span>
                <motion.span style={{ y: tY6, scaleY: springY }} className="text-footer-foreground">l</motion.span>
                <motion.span style={{ y: tY, scaleY: springY }} className="text-footer-foreground">o</motion.span>
                <motion.span style={{ y: tY1, scaleY: springY }} className="text-footer-foreground">g</motion.span>
                <motion.span style={{ y: tY2, scaleY: springY }} className="text-footer-foreground">i</motion.span>
                <motion.span style={{ y: tY3, scaleY: springY }} className="text-footer-foreground">e</motion.span>
                <motion.span style={{ y: tY4, scaleY: springY }} className="text-footer-foreground">s</motion.span>
              </div>
            </motion.div>

            {/* Contact Info */}
            <div className="space-y-3">
              <a
                href="mailto:hr@yellowsense.in"
                className="flex items-center gap-3 text-footer-foreground/70 hover:text-yellow-300 transition-colors"
              >
                <Mail className="w-4 h-4" />
                hr@yellowsense.in
              </a>
              <a
                href="tel:+919869397868"
                className="flex items-center gap-3 text-footer-foreground/70 hover:text-yellow-300 transition-colors"
              >
                <Phone className="w-4 h-4" />
                +91 98693 97868
              </a>
              <div className="flex items-center gap-3 text-footer-foreground/70">
                <MapPin className="w-4 h-4" />
                Bengaluru, Karnataka, India
              </div>
            </div>

            {/* Social Links */}
            <div>
              <div className="text-lg font-semibold mb-4">Follow for updates</div>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="w-10 h-10 rounded-full bg-footer-foreground/10 hover:bg-yellow-400/20 hover:border-yellow-400/50 border border-transparent flex items-center justify-center transition-all"
                    aria-label={social.label}
                  >
                    <social.icon className="w-4 h-4 text-footer-foreground/70 hover:text-yellow-300" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side - Links Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {/* Products */}
            <div>
              <h4 className="font-semibold text-footer-foreground mb-4 text-sm uppercase tracking-wider">
                Products
              </h4>
              <ul className="space-y-2">
                {productLinks.map((link, index) => (
                  <li key={index}>
                    <Link 
                      href={link.href} 
                      className="text-footer-foreground/60 hover:text-yellow-300 transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="font-semibold text-footer-foreground mb-4 text-sm uppercase tracking-wider">
                Company
              </h4>
              <ul className="space-y-2">
                {companyLinks.map((link, index) => (
                  <li key={index}>
                    <Link 
                      href={link.href} 
                      className="text-footer-foreground/60 hover:text-yellow-300 transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="font-semibold text-footer-foreground mb-4 text-sm uppercase tracking-wider">
                Resources
              </h4>
              <ul className="space-y-2">
                {resourceLinks.map((link, index) => (
                  <li key={index}>
                    <Link 
                      href={link.href} 
                      className="text-footer-foreground/60 hover:text-yellow-300 transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-footer-foreground/10 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-4 text-footer-foreground/40 text-xs">
            <Link href="#" className="hover:text-footer-foreground/60 transition-colors">
              Terms & Conditions
            </Link>
            <span>|</span>
            <Link href="#" className="hover:text-footer-foreground/60 transition-colors">
              Privacy Policy
            </Link>
          </div>
          <p className="text-footer-foreground/30 text-xs">
            © {new Date().getFullYear()} Yellowsense Technologies. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
