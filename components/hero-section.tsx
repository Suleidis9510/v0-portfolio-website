"use client"

import { motion } from "framer-motion"
import { Check, Bug, Globe, Database, Smartphone, Zap } from "lucide-react"

const floatingElements = [
  { icon: Check, label: "Test Passed", x: "10%", y: "20%", delay: 0 },
  { icon: Bug, label: "Bug Found", x: "85%", y: "15%", delay: 0.2 },
  { icon: Globe, label: "API 200 OK", x: "80%", y: "70%", delay: 0.4 },
  { icon: Database, label: "DB Valid", x: "15%", y: "75%", delay: 0.6 },
  { icon: Smartphone, label: "Mobile", x: "70%", y: "40%", delay: 0.8 },
  { icon: Zap, label: "Automation", x: "5%", y: "45%", delay: 1 },
]

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 py-20 md:py-0">
      {/* Floating QA Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {floatingElements.map((el, i) => (
          <motion.div
            key={i}
            className="absolute hidden md:flex items-center gap-2 px-3 py-2 bg-card/80 backdrop-blur-sm rounded-lg border border-border/50 shadow-sm"
            style={{ left: el.x, top: el.y }}
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ 
              opacity: 0.7, 
              scale: 1, 
              y: [0, -10, 0],
            }}
            transition={{ 
              delay: el.delay + 0.5,
              duration: 0.6,
              y: {
                duration: 3 + i * 0.5,
                repeat: Infinity,
                ease: "easeInOut"
              }
            }}
          >
            <el.icon className="w-4 h-4 text-primary" />
            <span className="text-xs text-muted-foreground font-medium">{el.label}</span>
          </motion.div>
        ))}
      </div>

      {/* Subtle gradient orb */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Badge */}
          <motion.div 
            className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-sm text-primary font-medium mb-8"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            Web • Mobile • API • Database • Automation
          </motion.div>

          {/* Name */}
          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground tracking-tight mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <span className="text-balance">Suleidis Leyva</span>
          </motion.h1>

          {/* Role */}
          <motion.p 
            className="text-lg md:text-xl text-muted-foreground font-medium mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            QA Functional  |  Manual QA  |  QA Automation in Progress
          </motion.p>

          {/* Headline */}
          <motion.p 
            className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto mb-10 leading-relaxed text-pretty"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            I help teams deliver reliable digital products through functional testing, risk analysis, API validation, and automation practices.
          </motion.p>

          {/* CTAs */}
          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <a
              href="#experience"
              className="px-8 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20"
            >
              View Experience
            </a>
            <a
              href="#contact"
              className="px-8 py-3 bg-secondary text-secondary-foreground rounded-full font-medium hover:bg-secondary/80 transition-colors border border-border"
            >
              Contact Me
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
      >
        <motion.div
          className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2"
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <div className="w-1 h-2 bg-muted-foreground/50 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  )
}
