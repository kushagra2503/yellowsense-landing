"use client";
import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function ProductsSection() {
  const categories = [
    {
      category: "For Businesses",
      title: "Enterprise Solutions",
      src: "/modern-technology-office-workspace-with-yellow-acc.jpg",
      content: <CategoryContent
        title="Enterprise Solutions"
        description="Empowering industry leaders with cutting-edge technology. From secure data environments to blockchain e-commerce and AI media solutions."
        products={[
          {
            title: "Confidential Clean Rooms (CCR)",
            desc: "Secure, compliant data governance & predictive analytics for lending.",
            url: "https://ccr.yellowsense.in/",
            features: ["Data Privacy", "Compliance", "AI/ML"]
          },
          {
            title: "Melody",
            desc: "AI-powered content creation & media processing solutions.",
            url: "https://melody.yellowsense.in",
            features: ["Generative AI", "Media Processing", "Digital"]
          },
          {
            title: "NetworkX",
            desc: "Blockchain-based decentralized e-commerce & personalization.",
            url: "https://networkx.yellowsense.in",
            features: ["Blockchain", "DeFi", "Personalization"]
          },
          {
            title: "Cybersecurity",
            desc: "Proactive threat detection and security audits.",
            url: "https://yellowsense.in",
            features: ["Threat Detection", "Audits"]
          },
          {
            title: "Data & Analytics",
            desc: "Unlock business potential with advanced analytics.",
            url: "https://yellowsense.in",
            features: ["BI", "Predictive Analytics"]
          },
          {
            title: "Cloud Infrastructure",
            desc: "Scalable, secure, and cost-efficient cloud solutions.",
            url: "https://yellowsense.in",
            features: ["Migration", "DevOps"]
          }
        ]}
      />,
    },
    {
      category: "For Home",
      title: "Household Services",
      src: "/assets/nanny.png",
      content: <CategoryContent
        title="Household Services"
        description="Transform your daily life with our comprehensive household solutions. From childcare and home cleaning to women's wellness products, we connect you with verified professionals and sustainable marketplaces that prioritize safety, quality, and peace of mind."
        products={[
          {
            title: "Nanny & Maid Booking",
            desc: "Connect with trusted, verified maids and nannies. Instant booking and flexible scheduling for your household needs.",
            url: "https://yellowsense.in",
            features: ["Instant Booking", "Verified Staff", "Secure"]
          },
          {
            title: "EmpowerHer Platform",
            desc: "Empowering women through sustainable menstrual health. A marketplace where women can sell and buy reusable products, creating income opportunities and promoting eco-friendly wellness solutions.",
            url: "https://yellowsense.in",
            features: ["Economic Empowerment", "Sustainable Products", "Women's Wellness"]
          }
        ]}
      />,
    },
  ];

  const cards = categories.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <section id="products" className="py-20 lg:py-32 w-full h-full bg-neutral-50 dark:bg-neutral-950">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">Our Offerings</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6 text-balance animate-fade-in-up">
            Choose Your Category
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed animate-fade-in-up delay-100">
            Whether you are an enterprise looking for tech solutions or a family seeking household help, we have you covered.
          </p>
        </div>
      </div>
      <div className="animate-fade-in-up delay-200">
        <Carousel items={cards} />
      </div>
    </section>
  );
}

const CategoryContent = ({ title, description, products }: { title: string, description: string, products: any[] }) => {
  return (
    <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-6 md:p-10 rounded-3xl mb-4">
      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-xl font-sans max-w-3xl mx-auto mb-10">
        <span className="font-bold text-neutral-700 dark:text-neutral-200">
          {title}
        </span>{" "}
        {description}
      </p>
      
      <div className="grid md:grid-cols-2 gap-6">
        {products.map((product, index) => (
          <div key={index} className="bg-white dark:bg-neutral-900 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-xl font-bold text-neutral-800 dark:text-white mb-2">{product.title}</h3>
            <p className="text-neutral-600 dark:text-neutral-400 text-sm mb-4 leading-relaxed">
              {product.desc}
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              {product.features.map((feature: string, idx: number) => (
                <span key={idx} className="bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300 px-2 py-1 rounded-md text-xs font-medium">
                  {feature}
                </span>
              ))}
            </div>
            <Button 
              size="sm" 
              className="w-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors group"
              onClick={() => window.open(product.url, '_blank')}
            >
              Learn More
              <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};
