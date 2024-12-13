"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { AnimatedComponent } from "@/components/ui/animated-component"
import { HoverCard } from "@/components/ui/hover-card"
import { motion } from "framer-motion"

const animations = [
  "fadeIn",
  "slideUp",
  "slideRight",
  "scale",
  "bounce"
] as const

export default function AnimationsPage() {
  const [selectedAnimation, setSelectedAnimation] = useState<typeof animations[number]>("fadeIn")
  const [isPlaying, setIsPlaying] = useState(false)

  const playAnimation = () => {
    setIsPlaying(false)
    setTimeout(() => setIsPlaying(true), 100)
  }

  return (
    <div className="space-y-8">
      <AnimatedComponent animation="slideUp">
        <h1 className="text-4xl font-bold tracking-tight">Animations</h1>
        <p className="text-xl text-muted-foreground mt-2">
          Explore our collection of beautiful animations and transitions.
        </p>
      </AnimatedComponent>

      <div className="grid gap-8 md:grid-cols-2">
        {/* Animation Playground */}
        <Card className="p-6 space-y-4">
          <h2 className="text-2xl font-semibold">Animation Playground</h2>
          <div className="flex flex-wrap gap-2">
            {animations.map((animation) => (
              <Button
                key={animation}
                variant={selectedAnimation === animation ? "default" : "outline"}
                onClick={() => setSelectedAnimation(animation)}
              >
                {animation}
              </Button>
            ))}
          </div>
          <div className="h-[200px] border rounded-lg flex items-center justify-center bg-muted/50 relative overflow-hidden">
            {isPlaying && (
              <AnimatedComponent
                animation={selectedAnimation}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="w-24 h-24 bg-primary rounded-lg" />
              </AnimatedComponent>
            )}
          </div>
          <Button onClick={playAnimation} className="w-full">
            Play Animation
          </Button>
        </Card>

        {/* Hover Animations */}
        <Card className="p-6 space-y-4">
          <h2 className="text-2xl font-semibold">Hover Interactions</h2>
          <div className="grid gap-4">
            <HoverCard imageUrl="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&auto=format&fit=crop&q=60">
              <h3 className="font-semibold">Hover Card with Image</h3>
              <p className="text-sm text-muted-foreground">
                Hover to see the background image effect.
              </p>
            </HoverCard>
            <motion.div
              className="p-4 rounded-lg border bg-card"
              whileHover={{ scale: 1.05, rotate: 2 }}
              whileTap={{ scale: 0.95 }}
            >
              <h3 className="font-semibold">Scale & Rotate</h3>
              <p className="text-sm text-muted-foreground">
                Hover and click to see the effect.
              </p>
            </motion.div>
          </div>
        </Card>

        {/* Scroll Animations */}
        <Card className="p-6 space-y-4">
          <h2 className="text-2xl font-semibold">Scroll Animations</h2>
          <div className="h-[300px] overflow-y-auto space-y-4 p-4 border rounded-lg">
            {Array.from({ length: 10 }).map((_, i) => (
              <motion.div
                key={i}
                className="p-4 rounded-lg border bg-card"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <h3 className="font-semibold">Scroll Item {i + 1}</h3>
                <p className="text-sm text-muted-foreground">
                  This item animates when scrolled into view.
                </p>
              </motion.div>
            ))}
          </div>
        </Card>

        {/* Gesture Animations */}
        <Card className="p-6 space-y-4">
          <h2 className="text-2xl font-semibold">Gesture Animations</h2>
          <div className="grid gap-4">
            <motion.div
              className="h-32 rounded-lg bg-primary/20 cursor-grab active:cursor-grabbing"
              drag
              dragConstraints={{
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
              }}
              whileDrag={{ scale: 1.1 }}
            >
              <div className="h-full flex items-center justify-center">
                <p className="font-medium">Drag me!</p>
              </div>
            </motion.div>
            <motion.div
              className="h-32 rounded-lg bg-secondary cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              animate={{
                rotate: [0, 10, -10, 10, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            >
              <div className="h-full flex items-center justify-center">
                <p className="font-medium">Infinite Animation</p>
              </div>
            </motion.div>
          </div>
        </Card>
      </div>
    </div>
  )
} 