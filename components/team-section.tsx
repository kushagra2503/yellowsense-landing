"use client"

import { motion } from "framer-motion"
import { Linkedin } from "lucide-react"
import Image from "next/image"

const teamMembers = [
  {
    name: "Prakhar Goyal",
    designation: "CEO & Founder",
    description: "Visionary leader driving innovation in enterprise AI and security solutions.",
    linkedin: "https://www.linkedin.com/in/prakhar-goyal-1744021b/",
    image: "/profile/ceo.jpeg",
  },
  {
    name: "Komal Goyal",
    designation: "COO",
    description: "Operations leader overseeing business strategy, team coordination, and delivery excellence.",
    linkedin: "https://www.linkedin.com/in/komal-goyal-51b09555/",
    image: "/profile/coo.jpeg",
  },
  {
    name: "Animesh Sharma",
    designation: "Backend Engineer",
    description: "Backend engineer specializing in scalable APIs, database architecture, and system performance.",
    linkedin: "https://www.linkedin.com/in/animesh-sharma-144732250/",
    image: "/profile/animesh.png",
  },
  {
    name: "Kushagra",
    designation: "Frontend Engineer",
    description: "Frontend engineer crafting intuitive user interfaces and exceptional user experiences.",
    linkedin: "https://www.linkedin.com/in/kushagra2503/",
    image: "/profile/kush.jpeg",
  },
  {
    name: "Abhimanyu Malik",
    designation: "Backend Engineer",
    description: "Backend engineer specializing in server-side architecture, API development, and cloud infrastructure.",
    linkedin: "https://www.linkedin.com/in/abhimanyu-malik-19190622a/",
    image: "/profile/abhi.jpeg",
  },
  {
    name: "Talha Nagima",
    designation: "Backend Engineer",
    description: "Backend engineer focused on database design, system optimization, and robust security implementations.",
    linkedin: "https://www.linkedin.com/in/talhanagina306/",
    image: "/profile/talha.jpeg",
  },
  {
    name:"Binita Mahto",
    designation: "Frontend Engineer",
    description: "Frontend engineer crafting intuitive user interfaces and exceptional user experiences.",
    linkedin: "https://www.linkedin.com/in/binita-mahto-19190622a/",
    image: "/profile/binita.jpeg",
  }
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
              <div className="bg-card rounded-2xl border border-border p-6 shadow-sm hover:shadow-md hover:border-amber-200 transition-all duration-300 h-full flex flex-col items-center text-center">
                {/* Image */}
                {member.image ? (
                  <div className="w-24 h-24 rounded-full overflow-hidden mb-4 border-2 border-amber-100 group-hover:border-amber-300 transition-colors">
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={96}
                      height={96}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ) : (
                  <div className="w-24 h-24 rounded-full overflow-hidden mb-4 border-2 border-amber-100 bg-secondary flex items-center justify-center text-2xl font-bold text-muted-foreground">
                    {member.name.charAt(0)}
                  </div>
                )}

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
