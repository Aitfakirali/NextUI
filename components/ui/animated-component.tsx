"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"

interface AnimatedComponentProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  animation?: "fadeIn" | "slideUp" | "slideRight" | "scale" | "bounce"
  delay?: number
  duration?: number
  className?: string
}

const animations = {
  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 }
  },
  slideUp: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 20 }
  },
  slideRight: {
    initial: { opacity: 0, x: -20 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -20 }
  },
  scale: {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.8 }
  },
  bounce: {
    initial: { opacity: 0, y: 50 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        bounce: 0.5,
      }
    },
    exit: { opacity: 0, y: 50 }
  }
}

export function AnimatedComponent({
  children,
  animation = "fadeIn",
  delay = 0,
  duration = 0.3,
  className,
  ...props
}: AnimatedComponentProps) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        {...animations[animation]}
        transition={{ duration, delay }}
        className={className}
        {...props}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
} 