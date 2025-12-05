import { Target, Lightbulb, Users } from "lucide-react"

export function AboutSection() {
  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description:
        "To simplify complex challenges through intuitive technology that empowers organizations and enriches everyday life.",
    },
    {
      icon: Lightbulb,
      title: "Our Approach",
      description:
        "We blend deep technical expertise with human-centered design to help businesses operate smarter and families care better.",
    },
    {
      icon: Users,
      title: "Our Solutions",
      description:
        "Delivering intelligent solutions across enterprise technology, AI, and modern nanny-care services with forward-focused innovation.",
    },
  ]

  return (
    <section id="about" className="py-20 lg:py-32 bg-secondary/50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">About Us</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6 text-balance">
            Forward-Focused Innovation
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Yellowsense Technologies is a forward-focused innovation company delivering intelligent solutions across enterprise technology, AI, and modern nanny-care services. We blend deep technical expertise with human-centered design to help businesses operate smarter and families care better. Our mission is to simplify complex challenges through intuitive technology that empowers organizations and enriches everyday life.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div key={index} className="bg-card border border-border rounded-2xl p-8 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <value.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">{value.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
