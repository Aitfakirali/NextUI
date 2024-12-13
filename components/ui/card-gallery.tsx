"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface CardGalleryProps extends React.HTMLAttributes<HTMLDivElement> {
  items: {
    title: string
    description: string
    image?: string
  }[]
}

const CardGallery = React.forwardRef<HTMLDivElement, CardGalleryProps>(
  ({ className, items, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", className)}
        {...props}
      >
        {items.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
            className="group relative overflow-hidden rounded-lg bg-card"
          >
            {item.image && (
              <div className="aspect-video overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="object-cover w-full h-full transform transition-transform group-hover:scale-110"
                />
              </div>
            )}
            <div className="p-6">
              <motion.h3
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-lg font-semibold mb-2"
              >
                {item.title}
              </motion.h3>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-muted-foreground"
              >
                {item.description}
              </motion.p>
            </div>
            <motion.div
              className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity"
              whileHover={{ opacity: 1 }}
            />
          </motion.div>
        ))}
      </div>
    )
  }
)
CardGallery.displayName = "CardGallery"

export { CardGallery } 