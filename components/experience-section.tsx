"use client"

import { motion } from "framer-motion"
import { MapPin, Calendar, Building2 } from "lucide-react"

const experiences = [
  {
    company: "DualBoot Partners",
    role: "QA Functional",
    location: "Remote – Uruguay",
    period: "Jun 2025 – Present",
    description:
      "QA Functional in a software factory environment, with experience across healthcare, web, iOS, Android, and tablet-based applications. Currently testing a web platform integrated with two connected mobile applications across phones and tablets.",
    responsibilities: [
      "Analyze user stories, acceptance criteria, and business rules to define testing scope",
      "Execute smoke, regression, integration, API, mobile, tablet, and responsiveness testing",
      "Validate APIs using Swagger and Postman",
      "Perform database validation using Azure Data Studio",
      "Report, track, and validate defects and user stories through Azure DevOps",
      "Update and maintain automated test sets when required",
      "Collaborate with international teams in English within agile workflows",
      "Validate integrations between web and mobile applications across multiple devices and platforms",
    ],
  },
  {
    company: "ANF AC – Autoridad de Certificación",
    role: "Software Tester",
    location: "Remote – Spain",
    period: "Nov 2023 – Jun 2025",
    description:
      "Performed functional testing for multiple interconnected internal web applications, ensuring product stability, requirement compliance, and a smooth user experience across different workflows.",
    responsibilities: [
      "Analyzed requirements and validated expected behavior across dependent web applications",
      "Designed and executed functional, regression, smoke, exploratory, and integration tests",
      "Tested API endpoints using Postman to validate responses, data consistency, and business rules",
      "Identified, reported, and tracked defects in Redmine until resolution and closure",
      "Validated responsive web behavior for mobile views",
      "Maintained testing documentation and supported the continuous improvement of QA processes",
    ],
  },
]

export function ExperienceSection() {
  return (
    <section id="experience" className="py-24 px-4 bg-card">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-primary uppercase tracking-wider">Background</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">
            Experience
          </h2>
        </motion.div>

        <div className="space-y-12">
          {experiences.map((exp, idx) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="relative"
            >
              {/* Timeline connector */}
              {idx < experiences.length - 1 && (
                <div className="absolute left-4 top-12 bottom-0 w-px bg-border hidden md:block" />
              )}

              <div className="flex gap-8">
                {/* Timeline dot */}
                <div className="hidden md:flex flex-shrink-0 w-8 h-8 items-center justify-center">
                  <div className="w-3 h-3 bg-primary rounded-full ring-4 ring-primary/20" />
                </div>

                {/* Content */}
                <div className="flex-1 p-6 bg-background rounded-2xl border border-border/50 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-foreground">{exp.role}</h3>
                      <div className="flex items-center gap-2 text-muted-foreground mt-1">
                        <Building2 className="w-4 h-4" />
                        <span className="font-medium">{exp.company}</span>
                      </div>
                    </div>
                    <div className="flex flex-col gap-1 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <span>{exp.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>{exp.period}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-6 text-pretty">{exp.description}</p>

                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider">
                      Key Responsibilities
                    </h4>
                    <ul className="grid gap-2">
                      {exp.responsibilities.map((resp, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-3 text-sm text-muted-foreground"
                        >
                          <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
