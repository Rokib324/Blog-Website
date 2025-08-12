import { navItems } from '@/lib/constants'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav className='sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50'>
        <div className='max-w-7xm mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='flex items-center justify-between h-16'>
                {/* logo */}
                <div className='flex-shrink-0'>
                    <h1 className='text-xl font-serif font-bold text-foreground'>Rokib's</h1>
                </div>
                {/* navigation items */}
                <div className='hidden md:flex items-center space-x-8 '>
                    {navItems.map((item) => (
                        <Link key={item.name} href={item.href} className='text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-300 font-serif'>
                            {item.name}
                        </Link>
                    ))}
                </div>
            </div>

        </div>

    </nav>
  )
}

export default Navbar