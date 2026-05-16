"use client"

import { motion } from "framer-motion"
import { AlertTriangle } from "lucide-react"

const defectExamples = [
  {
    category: "API",
    title: "Unexpected Server Error",
    description: "API failures such as unexpected 500 errors on endpoint execution affecting critical user flows.",
  },
  {
    category: "UI",
    title: "Rendering Issues",
    description: "UI rendering issues after incomplete migrations causing visual inconsistencies across views.",
  },
  {
    category: "Interaction",
    title: "Drag-and-Drop Failure",
    description: "Broken drag-and-drop behavior causing elements to disappear from the interface unexpectedly.",
  },
  {
    category: "Navigation",
    title: "Missing CTAs",
    description: "Missing or disappearing call-to-action buttons in critical user flows affecting conversions.",
  },
  {
    category: "Auth",
    title: "Authentication Issues",
    description: "Authentication issues involving magic links and access token behavior preventing user access.",
  },
  {
    category: "Integration",
    title: "Offline Sync Data Loss",
    description: "Identified a critical issue in an iPad application designed for offline and online use, where temporary connection loss during file upload and sync caused locally captured data, including photos, to be lost instead of being safely preserved for retry.",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

export function DefectsSection() {
  return (
    <section id="defects" className="py-24 px-4 bg-card">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-primary uppercase tracking-wider">Detection</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">
            Highlighted Defect Examples
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-pretty">
            Examples of critical issues identified during testing, presented in anonymized form to protect project confidentiality.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {defectExamples.map((defect) => (
            <motion.div
              key={defect.title}
              variants={itemVariants}
              className="p-5 bg-background rounded-xl border border-border/50 hover:border-destructive/20 transition-colors group"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-destructive/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-destructive/20 transition-colors">
                  <AlertTriangle className="w-5 h-5 text-destructive" />
                </div>
                <div>
                  <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                    {defect.category}
                  </span>
                  <h3 className="text-base font-semibold text-foreground mt-1">{defect.title}</h3>
                  <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{defect.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
