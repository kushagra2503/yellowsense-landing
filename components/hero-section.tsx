"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Zap } from "lucide-react"
import { MacbookScroll } from "@/components/ui/macbook-scroll"

export function HeroSection() {
  const scrollToProducts = () => {
    const productsSection = document.getElementById('products');
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="pt-32 pb-20 lg:pt-40 lg:pb-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6 text-balance">
            Where Deep Tech Meets <span className="text-primary">Human Innovation</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed text-pretty">
            We are a collective of passionate technologists bound together by our deep tech knowledge and a passion for
            using technology to drive business transformation.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2" onClick={scrollToProducts}>
              Explore Our Products
              <ArrowRight className="w-4 h-4" />
            </Button>
            <Button size="lg" variant="outline" className="border-foreground/20 hover:bg-secondary bg-transparent">
              Learn More
            </Button>
          </div>
        </div>

        {/* Hero Image */}
        <div className="mt-8 lg:mt-12 relative w-full overflow-hidden -mb-32 lg:-mb-40">
          <MacbookScroll
            src="/modern-technology-office-workspace-with-yellow-acc.jpg"
            showGradient={true}
            title={
              <span className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-900 to-neutral-500 dark:from-white dark:to-neutral-500">
                Built for Modern Needs
              </span>
            }
          />
          <div className="absolute bottom-40 left-1/2 -translate-x-1/2 bg-card border border-border rounded-xl px-6 py-4 shadow-lg z-20">
            <div className="flex items-center gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">500+</div>
                <div className="text-sm text-muted-foreground">Clients</div>
              </div>
              <div className="w-px h-10 bg-border" />
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">10+</div>
                <div className="text-sm text-muted-foreground">Years</div>
              </div>
              <div className="w-px h-10 bg-border" />
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">99%</div>
                <div className="text-sm text-muted-foreground">Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
