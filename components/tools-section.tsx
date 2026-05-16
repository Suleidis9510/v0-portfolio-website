"use client"

import { motion } from "framer-motion"

const tools = [
  "Cursor",
  "MCP Tools",
  "AI-Assisted QA",
  "Playwright",
  "TypeScript",
  "JavaScript",
  "Azure DevOps",
  "Redmine",
  "Postman",
  "Swagger",
  "Azure Data Studio",
  "DevTools",
  "Lighthouse",
  "WAVE",
  "Jam",
  "Excel",
  "Slack",
  "Google Chat",
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.03,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
}

export function ToolsSection() {
  return (
    <section id="tools" className="py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-sm font-medium text-primary uppercase tracking-wider">Tech Stack</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">
            Tools & Technologies
          </h2>
        </motion.div>

        <motion.div
          className="flex flex-wrap justify-center gap-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {tools.map((tool) => (
            <motion.span
              key={tool}
              variants={itemVariants}
              className="px-4 py-2 bg-card text-foreground text-sm font-medium rounded-full border border-border/50 hover:border-primary/50 hover:bg-primary/5 transition-all cursor-default"
            >
              {tool}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
