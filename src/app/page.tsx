'use client'

import SvgIcon from '@/components/svg-icons';
import { Button } from '@/components/ui/button';
import Marquee from '@/components/ui/magicui/marquee';
import Particles from '@/components/ui/magicui/particles';
import { Switch } from '@/components/ui/switch';
import { Tooltip, TooltipContent, TooltipProvider } from '@/components/ui/tooltip';
import { TooltipTrigger } from '@radix-ui/react-tooltip';
import { useTheme } from 'next-themes';
import React from 'react';

const iconNames = [
  'bitbucket',
  'docker',
  'express',
  'git',
  'github',
  'javascript',
  'mongodb',
  'nextjs',
  'nodejs',
  'react',
  'redis',
  'typescript'
]

export default function Home() {
  const { theme, setTheme } = useTheme()

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className='relative'>
      {/* Hero-Section */}
      <section id='hero' className='p-5 h-screen flex flex-col relative'>
        <Particles
          className='absolute inset-0 z-0'
          color={theme === 'light' ? '#000000' : '#FFFFFF'}
          quantity={200}
        />
        <div className='max-w-7xl mx-auto flex-grow flex flex-col z-50'>
          <div className='flex flex-row items-center p-5 flex-shrink-0'>
            <div className='flex flex-1 flex-row items-center'>
              <div className='w-6 h-0.5 bg-black dark:bg-gray-400 mr-2' />
              <h4 className="scroll-m-20 text-l font-semibold tracking-tight dark:text-gray-400">
                MARIANO LAZZOS
              </h4>
            </div>

            <div className='flex-1 flex justify-center'>
              <Button
                variant='link'
                onClick={() => scrollToSection('skills')}
              >
                Skills
              </Button>
              <Button variant='link' >Experience</Button>
              <Button variant='link'>Education</Button>
              <Button variant='link'>Projects</Button>
              <Button variant='link'>Contact</Button>
            </div>

            <div className='flex-1 flex justify-end'>
              <Switch
                checked={theme === 'light'}
                onCheckedChange={() => setTheme(theme === 'light' ? 'dark' : 'light')}
              />
            </div>
          </div>

          <div className='flex-1 flex flex-col justify-center items-center'>
            <div className='flex flex-col -mt-20 items-center justify-center'>
              <h3 className="scroll-m-20 text-3xl font-semibold tracking-tight mb-7">
                <span className="bg-gradient-to-r dark:from-slate-50/60 dark:to-slate-50 from-gray-500 to-black text-transparent bg-clip-text opacity-80">
                  Hello! I'm Mariano.
                </span>
              </h3>
              <h1 className="flex scroll-m-20 text-7xl sm:text-5xl font-bold tracking-tight text-center">
                <span className="bg-gradient-to-r dark:from-slate-50/60 dark:to-slate-50 from-gray-500 to-black text-transparent bg-clip-text opacity-80 p-3">
                  A Systems Engineer and Full Stack Developer, dedicated to advancing software development
                </span>
              </h1>
            </div>
          </div>
        </div>
      </section>
      {/* Skills-Section */}
      <section id='skills' className='h-screen max-w-7xl mx-auto flex-grow flex flex-col p-10 justify-center'>
        <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
          Skills
        </h2>

        <p className="text-xl text-muted-foreground">
          Some of the most important skills I have developed throughout my career, alongside many others.
        </p>

        <div className='flex flex-col relative mt-20 mb-10'>
          <Marquee pauseOnHover className="[--duration:20s]">
            {iconNames.slice(0, iconNames.length / 2).map(icon => {
              return (
                <TooltipProvider key={icon}>
                  <Tooltip>
                    <TooltipTrigger>
                      <div key={icon}
                        className='w-28 h-28 rounded-lg bg-gray-100 dark:bg-gray-100/5 items-center justify-center flex hover:scale-125 transform transition duration-150 ease-in-out'
                      >
                        <SvgIcon name={icon} className='w-20 h-20' />
                      </div>
                    </TooltipTrigger>
                    <TooltipContent className='z-50 absolute top-0 -left-10'>
                      <p>{icon.toUpperCase()}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              )
            })}
          </Marquee>
          <Marquee reverse pauseOnHover className="[--duration:20s]">
            {iconNames.slice(iconNames.length / 2).map(icon => {
              return (
                <TooltipProvider key={icon}>
                  <Tooltip>
                    <TooltipTrigger>
                      <div key={icon}
                        className='w-28 h-28 rounded-lg bg-gray-100 dark:bg-gray-100/5 items-center justify-center flex hover:scale-125 transform transition duration-150 ease-in-out'
                      >
                        <SvgIcon name={icon} className='w-20 h-20' />
                      </div>
                    </TooltipTrigger>
                    <TooltipContent className='z-50 absolute top-0 -left-10'>
                      <p>{icon.toUpperCase()}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              )
            })}
          </Marquee>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
        </div>
      </section>
    </div>
  );

}
