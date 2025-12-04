"use client";
import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import { Button } from "@/components/ui/button"
import { ArrowRight, Users, Shield, BarChart3, Cloud, Lock, Music, Network } from "lucide-react"

export function ProductsSection() {
  const products = [
    {
      category: "Household Services",
      title: "Booking Maid/Nanny",
      src: "/modern-technology-office-workspace-with-yellow-acc.jpg",
      content: <DummyContent title="Booking Maid/Nanny" description="Connect with trusted and verified maids and nannies for your household needs. Our platform ensures safe, reliable, and professional home help services with instant booking and flexible scheduling." features={["Instant Booking", "Verified Professionals", "Flexible Scheduling"]} url="https://yellowsense.in" />,
    },
    {
      category: "Data Governance",
      title: "Confidential Clean Rooms (CCR)",
      src: "/modern-technology-office-workspace-with-yellow-acc.jpg",
      content: <DummyContent title="Confidential Clean Rooms (CCR)" description="Empowering the next billion users through innovative data governance and predictive analytics solutions using AI/ML based Confidential Clean Rooms for secure, compliant lending." features={["Automated Compliance Solutions", "Flow-Based Lending", "Inclusive Credit Ecosystem"]} url="https://ccr.yellowsense.in/" />,
    },
    {
      category: "AI & Media",
      title: "Melody",
      src: "/modern-technology-office-workspace-with-yellow-acc.jpg",
      content: <DummyContent title="Melody" description="Advanced AI-powered solutions for content creation, media processing, and digital experiences. Revolutionizing how businesses and creators work with multimedia content." features={["AI Content Creation", "Media Processing", "Digital Innovation"]} url="https://melody.yellowsense.in" />,
    },
    {
      category: "Blockchain",
      title: "NetworkX",
      src: "/modern-technology-office-workspace-with-yellow-acc.jpg",
      content: <DummyContent title="NetworkX" description="Blockchain-based decentralized e-commerce platform with AI personalization engine. Delivering personalized recommendations and exclusive offers through Hyperledger Fabric chain-code technology." features={["AI Personalization Engine", "Blockchain Security", "Decentralized E-commerce"]} url="https://networkx.yellowsense.in" />,
    },
    {
      category: "Security",
      title: "Cybersecurity Solutions",
      src: "/modern-technology-office-workspace-with-yellow-acc.jpg",
      content: <DummyContent title="Cybersecurity Solutions" description="We keep your business safe by actively identifying and neutralizing cyber threats through a proactive risk and threat-centric approach." features={["Threat Detection", "Security Audits", "Compliance Management"]} url="https://yellowsense.in" />,
    },
    {
      category: "Data & Analytics",
      title: "Data & Analytics",
      src: "/modern-technology-office-workspace-with-yellow-acc.jpg",
      content: <DummyContent title="Data & Analytics" description="We help you unlock the immense potential of data, AI and analytics, ensuring that your organisation is fit for the digital future." features={["Business Intelligence", "Predictive Analytics", "Data Visualization"]} url="https://yellowsense.in" />,
    },
    {
      category: "Cloud",
      title: "Cloud Infrastructure",
      src: "/modern-technology-office-workspace-with-yellow-acc.jpg",
      content: <DummyContent title="Cloud Infrastructure" description="Transform your IT infrastructure with our cloud solutions that offer scalability, security, and cost-efficiency for modern enterprises." features={["Cloud Migration", "DevOps Solutions", "Infrastructure Management"]} url="https://yellowsense.in" />,
    },
  ];

  const cards = products.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <section id="products" className="py-20 lg:py-32 w-full h-full">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-4">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">What We Do</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6 text-balance">
            Our Products & Services
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Discover our comprehensive suite of technology solutions designed to transform your business operations.
          </p>
        </div>
      </div>
      <Carousel items={cards} />
    </section>
  );
}

const DummyContent = ({ title, description, features, url }: { title: string, description: string, features: string[], url: string }) => {
  return (
    <>
      {[...new Array(1)].map((_, index) => (
        <div
          key={"dummy-content" + index}
          className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
        >
          <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
            <span className="font-bold text-neutral-700 dark:text-neutral-200">
              {title}
            </span>{" "}
            {description}
          </p>
          <div className="mt-8 flex flex-wrap gap-4 justify-center">
             {features.map((feature, idx) => (
                <span key={idx} className="bg-white dark:bg-neutral-700 text-neutral-700 dark:text-white px-4 py-2 rounded-full text-sm font-medium shadow-sm">
                  {feature}
                </span>
             ))}
          </div>
          <div className="mt-8 flex justify-center">
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2" onClick={() => window.open(url, '_blank')}>
              Visit Website
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
          <div className="mt-8 relative h-60 w-full rounded-xl overflow-hidden shadow-lg">
             <img
              src="/modern-technology-office-workspace-with-yellow-acc.jpg"
              alt="Product preview"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        </div>
      ))}
    </>
  );
};
