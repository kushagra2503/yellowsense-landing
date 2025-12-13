"use client"

import { motion } from "framer-motion"
import { Linkedin } from "lucide-react"

const teamMembers = [
  {
    name: "Prakhar Goyal",
    designation: "CEO & Founder",
    description: "Visionary leader driving innovation in enterprise AI and security solutions.",
    linkedin: "https://linkedin.com/in/",
  },
  {
    name: "Komal Goyal",
    designation: "COO",
    description: "Operations leader overseeing business strategy, team coordination, and delivery excellence.",
    linkedin: "https://linkedin.com/in/",
  },
  {
    name: "Animesh Sharma",
    designation: "Backend Engineer",
    description: "Backend engineer specializing in scalable APIs, database architecture, and system performance.",
    linkedin: "https://linkedin.com/in/",
  },
  {
    name: "Kushagra",
    designation: "Frontend Engineer",
    description: "Frontend engineer crafting intuitive user interfaces and exceptional user experiences.",
    linkedin: "https://linkedin.com/in/",
  },
  {
    name: "Abhimanyu Malik",
    designation: "Backend Engineer",
    description: "Backend engineer specializing in server-side architecture, API development, and cloud infrastructure.",
    linkedin: "https://linkedin.com/in/",
  },
  {
    name: "Talha Nagima",
    designation: "Backend Engineer",
    description: "Backend engineer focused on database design, system optimization, and robust security implementations.",
    linkedin: "https://linkedin.com/in/",
  },
]

export function TeamSection() {
  return (
    <section id="team" className="py-20 lg:py-32 bg-gradient-to-b from-background to-amber-50/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-semibold text-amber-500 uppercase tracking-wider"
          >
            Our Team
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6 text-balance"
          >
            Meet the Minds Behind Yellowsense
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-muted-foreground leading-relaxed"
          >
            Our diverse team of experts brings together deep technical knowledge and industry experience 
            to build cutting-edge solutions for enterprise security.
          </motion.p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-card rounded-2xl border border-border p-6 shadow-sm hover:shadow-md hover:border-amber-200 transition-all duration-300 h-full flex flex-col">
                {/* Name */}
                <h3 className="text-xl font-semibold text-foreground mb-1">
                  {member.name}
                </h3>
                
                {/* Designation */}
                <p className="text-sm font-medium text-amber-500 mb-4">
                  {member.designation}
                </p>
                
                {/* Description */}
                <p className="text-sm text-muted-foreground leading-relaxed flex-grow">
                  {member.description}
                </p>
                
                {/* LinkedIn link */}
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-4 text-sm font-medium text-blue-500 hover:text-blue-600 transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                  LinkedIn
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
