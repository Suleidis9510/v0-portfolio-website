"use client"

import { motion } from "framer-motion"
import { Mail, Linkedin, ArrowUpRight } from "lucide-react"

export function ContactSection() {
  return (
    <section id="contact" className="py-24 px-4 bg-card">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="text-sm font-medium text-primary uppercase tracking-wider">Connect</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
            {"Let's Work Together"}
          </h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-xl mx-auto text-pretty">
            Open to QA Functional, Manual QA, and QA Automation opportunities.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <motion.a
              href="mailto:suleidisdanai@gmail.com"
              className="flex items-center gap-3 px-6 py-4 bg-background rounded-2xl border border-border/50 hover:border-primary/30 hover:shadow-md transition-all group w-full sm:w-auto"
              whileHover={{ y: -2 }}
            >
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <div className="text-left">
                <span className="text-xs text-muted-foreground uppercase tracking-wider">Email</span>
                <p className="text-foreground font-medium">suleidisdanai@gmail.com</p>
              </div>
              <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors ml-auto" />
            </motion.a>

            <motion.a
              href="https://linkedin.com/in/suleidis-leyva-ramirez"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-6 py-4 bg-background rounded-2xl border border-border/50 hover:border-primary/30 hover:shadow-md transition-all group w-full sm:w-auto"
              whileHover={{ y: -2 }}
            >
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Linkedin className="w-5 h-5 text-primary" />
              </div>
              <div className="text-left">
                <span className="text-xs text-muted-foreground uppercase tracking-wider">LinkedIn</span>
                <p className="text-foreground font-medium">suleidis-leyva-ramirez</p>
              </div>
              <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors ml-auto" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
