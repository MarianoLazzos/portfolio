'use client'

import React from 'react'
import { Button } from './ui/button';
import { Switch } from './ui/switch';
import { useTheme } from 'next-themes';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface MobileMenuProps {
  className?: string
}

const MobileMenu: React.FC<MobileMenuProps> = (props) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
      })
    }
  }

  const onCloseMenu = (section?: string) => {
    setIsOpen(false)

    if (section) scrollToSection(section)
  }

  const menuVariants = {
    hidden: { opacity: 0, x: '-100%' },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  }

  return (
    <div className={`relative ${props?.className}`}>
      <button onClick={toggleMenu} className="p-2 text-2xl">
        <Menu />
      </button>
      <motion.div
        className="flex flex-1 fixed top-0 left-0 h-full w-full bg-background text-white p-4 z-50 ronded-lg"
        initial="hidden"
        animate={isOpen ? 'visible' : 'hidden'}
        variants={menuVariants}
      >
        <ul className='flex flex-1 flex-col mb-5'>
          <button onClick={toggleMenu} className="p-2 text-2xl">
            <X className='text-foreground' />
          </button>
          <div className='flex flex-1 flex-col space-y-5 justify-center'>
            <Button variant='link' onClick={() => onCloseMenu('my-work')}>
              <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                My Work
              </h3>
            </Button>
            <Button variant='link' onClick={() => onCloseMenu('experience')}>
              <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                Experience
              </h3>
            </Button>
            <Button variant='link' onClick={() => onCloseMenu('education')}>
              <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                Education
              </h3>
            </Button>
            <Button variant='link' onClick={() => onCloseMenu('contact')}>
              <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                Contact
              </h3>
            </Button>
          </div>
        </ul>
      </motion.div>
    </div>
  );
}

export interface NavbarProps { }

const Navbar: React.FC<NavbarProps> = (props) => {
  const { theme, setTheme } = useTheme()

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    const headerOffset = 100

    if (element) {
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  }

  return (
    <div className={cn('flex flex-row items-center justify-between sticky top-0 bg-background z-50 px-10 py-5')}>
      <MobileMenu className='block md:hidden' />
      <a
        onClick={() => scrollToSection('hero')}
        className='text-2xl font-light tracking-tighter flex-2 hidden md:flex whitespace-nowrap scroll-m-20 cursor-pointer'
      >
        Mariano Lazzos
      </a>

      <div className='flex-1 flex-row items-center px-5 flex-shrink-0 hidden md:flex max-w-[70%]'>
        <div className='flex-1 flex justify-evenly'>
          <Button
            variant='link'
            onClick={() => scrollToSection('my-work')}
          >
            My Work
          </Button>
          <Button
            variant='link'
            onClick={() => scrollToSection('experience')}
          >
            Experience
          </Button>
          <Button
            variant='link'
            onClick={() => scrollToSection('education')}
          >
            Education
          </Button>
          <Button
            variant='link'
            onClick={() => scrollToSection('contact')}
          >
            Contact
          </Button>
        </div>
      </div>

      <div className='flex-2 flex justify-end'>
        <Switch
          checked={theme === 'light'}
          onCheckedChange={() => setTheme(theme === 'light' ? 'dark' : 'light')}
        />
      </div>
    </div>
  )
}

export default Navbar