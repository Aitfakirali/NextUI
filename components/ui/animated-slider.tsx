"use client"

import * as React from "react"
import * as SliderPrimitive from "@radix-ui/react-slider"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"

interface AnimatedSliderProps
  extends React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root> {
  showValue?: boolean
  formatValue?: (value: number) => string
}

const AnimatedSlider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  AnimatedSliderProps
>(({ className, showValue, formatValue, ...props }, ref) => {
  const [hoveredThumb, setHoveredThumb] = React.useState<number | null>(null)
  const [isDragging, setIsDragging] = React.useState(false)

  const value = Array.isArray(props.value) ? props.value[0] : props.value || 0
  const displayValue = formatValue ? formatValue(value) : value

  return (
    <div className="relative">
      <SliderPrimitive.Root
        ref={ref}
        className={cn(
          "relative flex w-full touch-none select-none items-center",
          className
        )}
        onPointerDown={() => setIsDragging(true)}
        onPointerUp={() => setIsDragging(false)}
        {...props}
      >
        <SliderPrimitive.Track className="relative h-2 w-full grow overflow-hidden rounded-full bg-secondary">
          <motion.div
            className="absolute h-full bg-primary"
            style={{ width: `${(value / (props.max || 100)) * 100}%` }}
            layout
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 30
            }}
          />
        </SliderPrimitive.Track>
        <SliderPrimitive.Thumb
          className="block h-5 w-5 rounded-full border-2 border-primary bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
          onMouseEnter={() => setHoveredThumb(0)}
          onMouseLeave={() => setHoveredThumb(null)}
        >
          <AnimatePresence>
            {(hoveredThumb === 0 || isDragging) && showValue && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: -30 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute -top-2 left-1/2 -translate-x-1/2 rounded bg-primary px-2 py-1 text-xs text-primary-foreground"
              >
                {displayValue}
              </motion.div>
            )}
          </AnimatePresence>
          <motion.div
            className="absolute inset-0 rounded-full bg-primary/50"
            initial={false}
            animate={{
              scale: hoveredThumb === 0 || isDragging ? 1.2 : 1
            }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          />
        </SliderPrimitive.Thumb>
      </SliderPrimitive.Root>
    </div>
  )
})
AnimatedSlider.displayName = "AnimatedSlider"

export { AnimatedSlider } 