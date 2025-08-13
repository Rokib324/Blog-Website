'use client';

import React from 'react'
import { featuredBlogs } from '@/lib/data'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Badge } from '@/components/ui/badge'
import { ArrowRightIcon, CalendarIcon } from 'lucide-react'

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  show: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.1
    }
  })
}

const textVariants = {
  hidden: { opacity: 0, x: -20 },
  show: (delay = 0) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, delay }
  })
}

const Features = () => {
  const blogs = featuredBlogs

  return (
    <section className='py-20 px-4 sm:px-6 lg:px-8'>
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className='text-center mb-10'
      >
        <h2 className='text-3xl font-bold text-gray-900 dark:text-white'>Our Blogs</h2>
        <p className='text-lg text-muted-foreground dark:text-gray-400 mx-auto'>
          Explore our latest blogs on the latest trends in the tech world.
        </p>
      </motion.div>

      {/* Blog cards */}
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-8'>
        {blogs.map((blog, index) => (
          <motion.div
            key={blog.id}
            custom={index}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={containerVariants}
            whileHover={{ y: -5 }}
            className='relative'
          >
            <Card className='group cursor-pointer overflow-hidden hover:shadow-lg transition-all duration-300'>
              <CardHeader className='px-2'>
                <div className='relative w-full h-48 overflow-hidden rounded-xl'>
                  {/* Image animation */}
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Image
                      src={blog.image}
                      alt={blog.title}
                      width={500}
                      height={300}
                      className='w-full h-full object-cover'
                    />
                  </motion.div>

                  {/* Category badge */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                    className='absolute top-4 left-4'
                  >
                    <Badge variant='secondary' className='bg-secondary/80 text-secondary-foreground backdrop-blur-md'>
                      {blog.category}
                    </Badge>
                  </motion.div>
                </div>
              </CardHeader>

              <CardContent>
                {/* Title */}
                <motion.div
                  variants={textVariants}
                  custom={0.2}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                >
                  <CardTitle className='text-2xl font-bold'>{blog.title}</CardTitle>
                </motion.div>

                {/* Description */}
                <motion.div
                  variants={textVariants}
                  custom={0.3}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                >
                  <CardDescription className='text-sm text-muted-foreground dark:text-gray-400'>
                    {blog.description}
                  </CardDescription>
                </motion.div>

                {/* Date */}
                <motion.div
                  variants={textVariants}
                  custom={0.4}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  className='flex items-center gap-2 mt-2'
                >
                  <CalendarIcon className='w-4 h-4' />
                  <span className='text-sm text-muted-foreground dark:text-gray-400'>{blog.date}</span>
                </motion.div>

                {/* Read more */}
                <motion.div
                  variants={textVariants}
                  custom={0.5}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  className='flex items-center gap-2 mt-2'
                >
                  <Link
                    href="/"
                    className='text-sm text-muted-foreground dark:text-gray-400 hover:text-primary transition-all duration-300 hover:underline'
                  >
                    Read More
                  </Link>
                  <ArrowRightIcon className='w-4 h-4' />
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Features