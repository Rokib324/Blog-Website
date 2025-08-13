"use client";

import React from 'react'
import { topics } from '@/lib/data'
import { motion } from 'framer-motion' // ✅ Correct import
import { Badge } from './ui/badge';

const Topics = () => {
  const category = topics;
  
  return (
    <section className='py-20 px-4 sm:px-6 lg:px-8 bg-muted/30'>
      <div className='max-w-7xl mx-auto'>
        {/* Heading Animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className='text-center mb-10'
        >
          <h2 className='text-3xl font-bold text-gray-900 dark:text-white mb-2'>
            Explore Topics
          </h2>
          <p className='text-muted-foreground dark:text-gray-400'>
            Explore the latest topics in the world of technology, design, and more.
          </p>
        </motion.div>

        {/* Topic Grid */}
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4'>
          {category.map((topic, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className='bg-white dark:bg-gray-800 rounded-lg p-4 shadow-md'
            >
              <div className='group cursor-pointer text-center'>
                <div className='bg-card dark:bg-gray-800 rounded-lg text-center hover:shadow-lg transition-all duration-300 hover:scale-105'>
                  <div className='mb-4'>
                    <div dangerouslySetInnerHTML={{ __html: topic.icon }} className='w-8 h-8 mx-auto text-primary group-hover:scale-110 transition-transform duration-300' />
                  </div>
                </div>
                <h3 className='font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300'>
                  {topic.name}
                </h3>
                <Badge variant='outline' className='text-xs mt-2'>
                  {topic.count} blogs
                </Badge>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Topics