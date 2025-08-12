"use client"
import { Moon, Sun } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { Switch } from './ui/switch'
import { useTheme } from 'next-themes'

const ThemeToggle = () => {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return (
            <div className='flex items-center space-x-2'>
                <Sun className='w-4 h-4' />
                <Switch disabled />
                <Moon className='w-4 h-4' />
            </div>
        );
    }

  return (
    <div className='flex items-center space-x-2'>
        <Sun className= {`${theme === 'light' ? "text-yellow-500" : "text-muted-foreground hover:text-primary"}`} />
        <Switch checked={theme === 'dark'} onCheckedChange={() => setTheme(theme === 'dark' ? 'light' : 'dark')} />
        <Moon className={`${theme === 'dark' ? "text-yellow-500" : "text-muted-foreground hover:text-primary"}`} />
    </div>
  )
}

export default ThemeToggle