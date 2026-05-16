"use client"

import { motion } from "framer-motion"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-8 px-4 border-t border-border/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p>© {currentYear} Suleidis Leyva. All rights reserved.</p>
          <p className="text-center">
            QA Functional  •  Manual QA  •  QA Automation in Progress
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
