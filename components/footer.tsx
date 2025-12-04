import Link from "next/link"
import Image from "next/image"
import { Linkedin, Twitter, Github, Instagram } from "lucide-react"
import { FloatingDock } from "@/components/ui/floating-dock"

export function Footer() {
  const footerLinks = {
    navigation: [
      { label: "Home", href: "/" },
      { label: "About Us", href: "#about" },
      { label: "Products", href: "#products" },
      { label: "Contact", href: "#contact" },
    ],
    services: [
      { label: "Booking Maid/Nanny", href: "#" },
      { label: "Confidential Clean Rooms", href: "#" },
      { label: "Melody", href: "#" },
      { label: "NetworkX", href: "#" },
      { label: "Cybersecurity", href: "#" },
      { label: "Data & Analytics", href: "#" },
      { label: "Cloud Solutions", href: "#" },
    ],
    legal: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
      { label: "Cookie Policy", href: "#" },
    ],
  }

  const socialLinks = [
    { title: "LinkedIn", icon: <Linkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />, href: "#" },
    { title: "Twitter", icon: <Twitter className="h-full w-full text-neutral-500 dark:text-neutral-300" />, href: "#" },
    { title: "GitHub", icon: <Github className="h-full w-full text-neutral-500 dark:text-neutral-300" />, href: "#" },
    { title: "Instagram", icon: <Instagram className="h-full w-full text-neutral-500 dark:text-neutral-300" />, href: "#" },
  ]

  return (
    <footer className="bg-footer-bg text-footer-foreground">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <Image
                src="/assets/logo.jpeg"
                alt="YellowSense Technologies Logo"
                width={40}
                height={40}
                className="rounded-lg"
              />
              <span className="font-bold text-xl text-footer-foreground">YellowSense Technologies</span>
            </Link>
            <p className="text-footer-foreground/70 leading-relaxed mb-6">
              Empowering businesses with innovative technology solutions that drive growth and digital transformation.
            </p>
            <div className="flex justify-start">
              <FloatingDock items={socialLinks} />
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold text-footer-foreground mb-4">Navigation</h4>
            <ul className="space-y-3">
              {footerLinks.navigation.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="text-footer-foreground/70 hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-footer-foreground mb-4">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="text-footer-foreground/70 hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-footer-foreground mb-4">Contact</h4>
            <ul className="space-y-3 text-footer-foreground/70">
              <li>
                <a href="mailto:hr@yellowsense.in" className="hover:text-primary transition-colors">
                  hr@yellowsense.in
                </a>
              </li>
              <li>
                <a href="tel:+919869397868" className="hover:text-primary transition-colors">
                  +91 98693 97868
                </a>
              </li>
              <li>123 Innovation Drive</li>
              <li>Tech Valley, CA 94000</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-footer-foreground/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-footer-foreground/60 text-sm">© 2025 YellowSense Technologies. All rights reserved.</p>
          <div className="flex gap-6">
            {footerLinks.legal.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="text-footer-foreground/60 text-sm hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
