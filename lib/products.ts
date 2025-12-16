export const products = [
  {
    id: "fraud-detection",
    slug: "fraud-detection",
    tagline: "DETECT FRAUD IN REAL-TIME",
    name: "Fraud Detection",
    shortDescription: "AI-powered transaction monitoring and behavioral analysis to prevent financial fraud before it happens.",
    description: "Our advanced Fraud Detection AI leverages machine learning and behavioral analytics to identify suspicious patterns in real-time. By analyzing transaction data, user behavior, and contextual signals, we help financial institutions and enterprises prevent fraud before it impacts their bottom line.",
    iconName: "Shield" as const,
    color: "#eab308", // Yellow-500
    gradient: "from-yellow-500 to-amber-600",
    hasVideo: true,
    videoSrc: "/video/Yellowsense-fraud-detection-animation.mp4",
    features: [
      "Real-time transaction monitoring",
      "Behavioral pattern analysis",
      "Machine learning risk scoring",
      "Automated alert generation",
      "Integration with existing systems",
      "Customizable fraud rules engine",
    ],
    benefits: [
      { title: "99.9% Accuracy", description: "Industry-leading fraud detection accuracy" },
      { title: "< 100ms Response", description: "Real-time detection with minimal latency" },
      { title: "50% Cost Reduction", description: "Reduce fraud investigation costs" },
    ],
  },
  {
    id: "fault-detection",
    slug: "fault-detection",
    tagline: "PREDICT FAILURES BEFORE THEY OCCUR",
    name: "Industrial Fault Detection",
    shortDescription: "Advanced sensing solutions for real-time fault detection and predictive maintenance in industrial systems.",
    description: "Our Industrial Fault Detection system uses IoT sensors and AI algorithms to monitor equipment health in real-time. By predicting failures before they occur, we help manufacturers reduce downtime, extend equipment life, and optimize maintenance schedules.",
    iconName: "Cpu" as const,
    color: "#f97316", // Orange-500
    gradient: "from-orange-500 to-red-600",
    hasVideo: true,
    videoSrc: "/video/sensor-final-1764092032100.mp4",
    features: [
      "IoT sensor integration",
      "Predictive maintenance algorithms",
      "Equipment health monitoring",
      "Anomaly detection",
      "Maintenance scheduling optimization",
      "Historical data analysis",
    ],
    benefits: [
      { title: "40% Less Downtime", description: "Predict and prevent equipment failures" },
      { title: "30% Cost Savings", description: "Optimize maintenance operations" },
      { title: "2x Equipment Life", description: "Extend asset lifespan with proactive care" },
    ],
  },
  {
    id: "clean-rooms",
    slug: "clean-rooms",
    tagline: "SECURE DATA ENVIRONMENTS",
    name: "Confidential Clean Rooms",
    shortDescription: "Secure, compliant data environments for sensitive data processing with advanced privacy controls.",
    description: "Our Confidential Clean Rooms provide isolated, secure environments for processing sensitive data. With advanced encryption, access controls, and compliance features, organizations can collaborate on data while maintaining privacy and regulatory compliance.",
    iconName: "Database" as const,
    color: "#10b981", // Emerald-500
    gradient: "from-emerald-500 to-teal-600",
    hasVideo: false,
    features: [
      "End-to-end encryption",
      "Granular access controls",
      "Audit trail logging",
      "Compliance certifications",
      "Secure data sharing",
      "Privacy-preserving analytics",
    ],
    benefits: [
      { title: "100% Compliant", description: "Meet GDPR, HIPAA, and SOC2 requirements" },
      { title: "Zero Trust", description: "No data exposure during processing" },
      { title: "Secure Collaboration", description: "Share insights without sharing data" },
    ],
  },
  {
    id: "sys-pin-tts",
    slug: "sys-pin-tts",
    tagline: "NATURAL VOICE SYNTHESIS",
    name: "TTS Model",
    shortDescription: "Advanced text-to-speech AI model delivering natural, human-like voice synthesis for enterprise applications.",
    description: "Our Sys Pin TTS Model leverages cutting-edge deep learning to generate high-quality, natural-sounding speech from text. Built with state-of-the-art neural networks, it supports multiple languages, voices, and emotional tones, making it ideal for voice assistants, accessibility tools, content creation, and automated communication systems.",
    iconName: "Volume2" as const,
    color: "#3b82f6", // Blue-500
    gradient: "from-blue-500 to-indigo-600",
    hasVideo: true,
    videoSrc: "/video/tts-web.mp4",
    features: [
      "Neural voice synthesis",
      "Multi-language support",
      "Emotional tone control",
      "Real-time generation",
      "API integration",
      "Custom voice training",
    ],
    benefits: [
      { title: "Natural Speech", description: "Human-like voice quality and intonation" },
      { title: "Low Latency", description: "Real-time text-to-speech conversion" },
      { title: "Scalable", description: "Enterprise-ready for high-volume applications" },
    ],
  },
  {
    id: "cybersecurity",
    slug: "cybersecurity",
    tagline: "PROTECT YOUR DIGITAL ASSETS",
    name: "Cybersecurity",
    shortDescription: "Proactive threat detection and security audits to safeguard your critical infrastructure.",
    description: "Our Cybersecurity solutions provide comprehensive protection against digital threats. From vulnerability assessments to continuous monitoring, we help organizations identify and mitigate risks before they become breaches.",
    iconName: "Lock" as const,
    color: "#ef4444", // Red-500
    gradient: "from-red-500 to-rose-600",
    hasVideo: false,
    features: [
      "Vulnerability assessment",
      "Penetration testing",
      "24/7 threat monitoring",
      "Incident response",
      "Security awareness training",
      "Compliance auditing",
    ],
    benefits: [
      { title: "24/7 Protection", description: "Round-the-clock security monitoring" },
      { title: "Proactive Defense", description: "Stop threats before they strike" },
      { title: "Risk Mitigation", description: "Identify and fix vulnerabilities" },
    ],
  },
  {
    id: "encryption-platform",
    slug: "encryption-platform",
    tagline: "ADVANCED DATA PROTECTION",
    name: "Encryption & Security Platform",
    shortDescription: "Enterprise-grade encryption solutions with advanced cryptographic protocols for secure data storage, transmission, and access control.",
    description: "Our Encryption & Security Platform provides robust cryptographic solutions for enterprises requiring the highest levels of data protection. Built with state-of-the-art encryption algorithms and key management systems, it ensures end-to-end security for sensitive data across storage, transmission, and processing workflows. The platform supports multiple encryption standards, secure key exchange protocols, and granular access controls for comprehensive data security.",
    iconName: "Key" as const,
    color: "#8b5cf6", // Violet-500
    gradient: "from-violet-500 to-purple-600",
    hasVideo: true,
    videoSrc: "/video/he-web.mp4",
    features: [
      "Advanced cryptographic algorithms",
      "Secure key management",
      "End-to-end encryption",
      "Multi-layer data protection",
      "Compliance-ready architecture",
      "Granular access controls",
    ],
    benefits: [
      { title: "Military-Grade", description: "Industry-leading encryption standards" },
      { title: "Zero Trust", description: "Comprehensive data protection at every layer" },
      { title: "Compliance Ready", description: "Meet regulatory requirements effortlessly" },
    ],
  },
]

export type Product = typeof products[number]
export type IconName = Product["iconName"]

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug)
}
