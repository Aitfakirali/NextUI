'use client';

import * as React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

interface CarouselProps extends React.HTMLAttributes<HTMLDivElement> {
  items: {
    title: string;
    content: React.ReactNode;
  }[];
  autoPlay?: boolean;
  interval?: number;
}

const Carousel = React.forwardRef<HTMLDivElement, CarouselProps>(
  ({ className, items, autoPlay = true, interval = 5000, ...props }, ref) => {
    const [current, setCurrent] = React.useState(0);
    const [direction, setDirection] = React.useState(0);

    const slideVariants = {
      enter: (direction: number) => ({
        x: direction > 0 ? 1000 : -1000,
        opacity: 0
      }),
      center: {
        zIndex: 1,
        x: 0,
        opacity: 1
      },
      exit: (direction: number) => ({
        zIndex: 0,
        x: direction < 0 ? 1000 : -1000,
        opacity: 0
      })
    };

    const swipeConfidenceThreshold = 10000;
    const swipePower = (offset: number, velocity: number) => {
      return Math.abs(offset) * velocity;
    };

    const paginate = (newDirection: number) => {
      setDirection(newDirection);
      setCurrent((prev) => (prev + newDirection + items.length) % items.length);
    };

    React.useEffect(() => {
      if (!autoPlay) return;

      const timer = setInterval(() => {
        paginate(1);
      }, interval);

      return () => clearInterval(timer);
    }, [autoPlay, interval]);

    return (
      <div
        ref={ref}
        className={cn('relative overflow-hidden rounded-lg', className)}
        {...props}
      >
        <div className="relative h-full">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={current}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: 'spring', stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = swipePower(offset.x, velocity.x);

                if (swipe < -swipeConfidenceThreshold) {
                  paginate(1);
                } else if (swipe > swipeConfidenceThreshold) {
                  paginate(-1);
                }
              }}
              className="absolute w-full h-full"
            >
              {items[current].content}
            </motion.div>
          </AnimatePresence>
        </div>

        <Button
          variant="outline"
          size="icon"
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10"
          onClick={() => paginate(-1)}
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>

        <Button
          variant="outline"
          size="icon"
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10"
          onClick={() => paginate(1)}
        >
          <ChevronRight className="h-4 w-4" />
        </Button>

        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
          {items.map((_, index) => (
            <button
              key={index}
              className={cn(
                'w-2 h-2 rounded-full transition-colors',
                index === current ? 'bg-primary' : 'bg-primary/20'
              )}
              onClick={() => {
                setDirection(index > current ? 1 : -1);
                setCurrent(index);
              }}
            />
          ))}
        </div>
      </div>
    );
  }
);
Carousel.displayName = 'Carousel';

export { Carousel };
