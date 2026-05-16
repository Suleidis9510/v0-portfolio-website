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
            QA Functional / Manual QA with experience testing web, mobile, Android, iOS, and tablet applications in international agile environments. Strong background in acceptance criteria analysis, defect reporting, exploratory testing, API testing, regression, smoke, integration, database validation, mobile responsiveness, and basic accessibility testing.
          </p>
          <p className="text-pretty">
            Experienced in identifying high-impact defects, validating complex business flows, improving QA documentation, and supporting team alignment through pair testing and knowledge-sharing sessions.
          </p>
          <p className="text-foreground font-medium text-pretty">
            Currently growing as QA Automation with Playwright, JavaScript, and TypeScript, combining functional testing expertise with automation practices to improve product quality, test coverage, and delivery confidence.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
