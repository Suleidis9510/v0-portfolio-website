"use client"

import { motion } from "framer-motion"

const skillCategories = [
  {
    title: "Testing",
    skills: [
      "Functional Testing",
      "Manual Testing",
      "Regression Testing",
      "Smoke Testing",
      "Integration Testing",
      "Exploratory Testing",
      "End-to-End Validation",
      "Acceptance Criteria Analysis",
      "Edge Case Detection",
    ],
  },
  {
    title: "API & Data",
    skills: [
      "API Testing",
      "Postman",
      "Swagger",
      "Database Validation",
      "Azure Data Studio",
      "SQL Basics",
    ],
  },
  {
    title: "Automation",
    skills: [
      "Playwright",
      "JavaScript",
      "TypeScript",
      "Automated Test Maintenance",
      "Repetitive Flow Automation",
    ],
  },
  {
    title: "Accessibility",
    skills: [
      "Basic Accessibility Testing",
      "Lighthouse",
      "WAVE",
      "DevTools",
    ],
  },
  {
    title: "Collaboration",
    skills: [
      "Agile / Scrum / Kanban",
      "Pair Testing",
      "QA Documentation",
      "Bug Reporting",
      "Test Evidence",
      "Azure DevOps",
      "Redmine",
      "Slack",
      "Jam",
    ],
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

export function SkillsSection() {
  return (
    <section id="skills" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-primary uppercase tracking-wider">Expertise</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">
            Core Skills
          </h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              className={`p-6 bg-card rounded-2xl border border-border/50 shadow-sm hover:shadow-md transition-shadow ${
                idx === skillCategories.length - 1 && skillCategories.length % 3 === 2
                  ? "md:col-span-2 lg:col-span-1"
                  : ""
              }`}
            >
              <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                <span className="w-2 h-2 bg-primary rounded-full" />
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 bg-secondary text-secondary-foreground text-sm rounded-full border border-border/30 hover:border-primary/30 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
