"use client"

import { motion } from "framer-motion"

export function AboutSection() {
  return (
    <section id="about" className="py-24 px-4 bg-card">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-sm font-medium text-primary uppercase tracking-wider">About</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-8">
            Professional Summary
          </h2>
        </motion.div>

        <motion.div
          className="space-y-6 text-lg text-muted-foreground leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className="text-pretty">
            QA Functional / QA Automation professional with experience testing web, mobile, Android, iOS, and tablet applications in international agile environments. Strong background in acceptance criteria analysis, defect reporting, exploratory testing, API testing, regression, smoke, integration, database validation, mobile responsiveness, and basic accessibility testing.
          </p>
          <p className="text-foreground font-medium text-pretty">
            I use Playwright, TypeScript, JavaScript, Cursor, MCP tools, and AI-assisted workflows to enhance my QA work through requirement analysis, acceptance criteria review, test coverage generation, scenario design, bug reporting, and assisted test execution. I maintain and update automated test cases as features evolve, flows change, or selectors require adjustments, always combining AI support with human validation to improve coverage, speed, and QA efficiency.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
