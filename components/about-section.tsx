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
            QA Functional / QA Automation professional with experience testing web, mobile, Android, iOS, and tablet applications in international agile environments.
          </p>
          <p className="text-pretty">
            I apply solid QA technical knowledge to validate business-critical workflows, translating acceptance criteria into test scenarios, identifying risk areas, covering edge cases, and verifying behavior across UI, APIs, integrations, databases, responsiveness, and basic accessibility.
          </p>
          <p className="text-pretty">
            I combine functional testing expertise with Playwright, TypeScript, Cursor, MCP tools, and AI-assisted workflows to improve test coverage, maintain automated tests, support requirement analysis, create clearer bug reports, and assist basic debugging when needed.
          </p>
          <p className="text-foreground font-medium text-pretty">
            My approach is based on risk, business impact, and human validation, using automation and AI to deliver faster, clearer, and more reliable QA results.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
