"use client"

import React from 'react'
import { motion } from "framer-motion"
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Button } from './ui/button'

const HeroSection = () => {
  return (
    <section className='min-h-[90vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden'>
      <div className='max-w-7xl mx-auto'>
        <div className='grid lg:grid-cols-2 gap-12 items-center'>
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className='text-center lg:text-left space-y-6'
          >
              <h1 className='text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-foreground leading-tight mb-6'>Writing That Resonates- <span className='text-primary italic'>Rokib's</span></h1>
              <p className='text-lg text-muted-foreground mb-8 font-mono'>
                Discover my thoughts, ideas, and experiences on a wide range of topics.
              </p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <Button size='lg' className='group'>
                  Read More Blogs <ArrowRight className='w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform' />
                </Button>
              </motion.div>
          </motion.div>
          {/* Right content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9  }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className='hidden lg:block'
          >
            <div className='relative'>
              <div className='w-80 h-80 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-3xl absolute -top-10 -right-10 '>
              </div>
              <div className='w-96 h-96 bg-gradient-to-tl from-secondary/30 to-primary/30 rounded-2xl transform rotate-6 shadow-2xl '>
              </div>
            </div>
          
          </motion.div>
        </div>
      </div>
      
    </section> 
  )
}

export default HeroSection