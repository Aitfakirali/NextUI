'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface HoverCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  imageUrl?: string;
}

export function HoverCard({ children, className, imageUrl, ...props }: HoverCardProps) {
  return (
    <motion.div
      className={cn(
        'group relative overflow-hidden rounded-lg border bg-card p-6',
        className
      )}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{
        type: 'spring',
        stiffness: 300,
        damping: 20
      }}
      {...props}
    >
      {imageUrl && (
        <motion.div
          className="absolute inset-0 -z-10 opacity-0 group-hover:opacity-10"
          initial={false}
          style={{
            backgroundImage: `url(${imageUrl})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        />
      )}
      <motion.div
        initial={false}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.2 }}
      >
        {children}
      </motion.div>
      <motion.div
        className="absolute inset-0 rounded-lg bg-gradient-to-t from-black/[0.03] to-transparent opacity-0 group-hover:opacity-100"
        initial={false}
        transition={{ duration: 0.2 }}
      />
    </motion.div>
  );
}
