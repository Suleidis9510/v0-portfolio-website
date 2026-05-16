"use client"

import { motion } from "framer-motion"
import { Shield, FileText, Brain, Users, Cog } from "lucide-react"

const impactItems = [
  {
    icon: Shield,
    title: "Risk-Based Testing",
    description:
      "Prioritize high-impact scenarios, critical flows, business rules, and edge cases to reduce production risk.",
  },
  {
    icon: FileText,
    title: "Clear Defect Reporting",
    description:
      "Create structured bug reports with evidence, expected vs actual behavior, and clear reproduction steps.",
  },
  {
    icon: Brain,
    title: "Product Understanding",
    description:
      "Analyze user stories, acceptance criteria, and business logic to validate real product behavior.",
  },
  {
    icon: Users,
    title: "Team Enablement",
    description:
      "Support pair testing and QA knowledge-sharing sessions to reduce knowledge silos.",
  },
  {
    icon: Cog,
    title: "Automation Mindset",
    description:
      "Identify repetitive flows suitable for automation and contribute to automated test set maintenance.",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

export function ImpactSection() {
  return (
    <section id="impact" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-primary uppercase tracking-wider">Value</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">
            How I Add Value
          </h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {impactItems.map((item, idx) => (
            <motion.div
              key={item.title}
              variants={itemVariants}
              className={`group p-6 bg-card rounded-2xl border border-border/50 hover:border-primary/30 shadow-sm hover:shadow-md transition-all ${
                idx === impactItems.length - 1 && impactItems.length % 3 === 2
                  ? "md:col-span-2 lg:col-span-1"
                  : ""
              }`}
            >
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
