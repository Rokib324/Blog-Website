"use client"

import {
    Sheet,
    SheetContent,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"

import React, { useState } from 'react'
import ThemeToggle from "./ThemeToggle"
import { Button } from "./ui/button"
import { Menu } from "lucide-react"
import Link from "next/link"
import { navItems } from "@/lib/constants"
  
  const MobileNav = () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
      <div className="md:hidden flex items-center space-x-4">
        <ThemeToggle />
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
            <Button variant="ghost" size="icon">
                <Menu className="w-5 h-5"/>
            </Button>
        </SheetTrigger>
            <SheetContent>
                <SheetTitle></SheetTitle>
               
                <div className="flex flex-col space-y-4 p-8 mt-10">
                    {
                        navItems.map((item) => (
                            <Link href={item.href} key={item.name} className="text-lg font-medium text-gray-900 dark:text-white hover:text-primary transition-colors duration-300" onClick={() => setIsOpen(false)}>
                                {item.name}
                            </Link>
                        ))
                    }
                </div>
            </SheetContent>
        </Sheet>
      </div>
    )
  }
  
  export default MobileNav