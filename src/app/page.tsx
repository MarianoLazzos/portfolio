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
import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import { BorderBeam } from '@/components/ui/magicui/border-beam';


function Card() {
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, -170]);

  return (
    <motion.div
      ref={ref}
      whileHover={{ scale: 1.05 }}
      className='cursor-auto w-80 h-80 lg:w-96 lg:h-96 dark:bg-neutral-100/10 bg-slate-300/40 justify-center flex flex-col items-center gap-4 rounded-lg shadow-2xl dark:shadow-white/10'
    >
      <motion.div style={{ y }}>
        <div className='relative  w-[290px] h-[390px] lg:w-[350px] lg:h-[450px]'>
          <Image
            src='/assets/images/projects/lemon-portrait.png'
            alt='lemon'
            layout='fill'
            objectFit='contain'
            className='p-4 pr-24'
          />
          <Image
            src='/assets/images/projects/lemon-left.png'
            alt='lemon-2'
            layout='fill'
            objectFit='contain'
            className='pl-20'
          />
        </div>
      </motion.div>
    </motion.div>
  );
}

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
    <div className='relative p-5'>
      {/* Hero-Section */}
      <section id='hero' className='p-5 h-screen flex flex-col relative items-center'>
        <Particles
          className='absolute inset-0 z-0'
          color={theme === 'light' ? '#000000' : '#FFFFFF'}
          quantity={200}
        />
        <div className='max-w-7xl flex-grow flex flex-col z-50'>
          <div className='flex-row items-center p-5 flex-shrink-0 hidden md:flex'>
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
              <Button variant='link'>Education</Button>
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
            <div className='-mt-20 flex flex-col items-center justify-center'>
              <h3 className="scroll-m-20 text-3xl font-semibold tracking-tight mb-7 text-center">
                <span className="bg-gradient-to-r dark:from-slate-50/60 dark:to-slate-50 from-gray-500 to-black text-transparent bg-clip-text opacity-80">
                  Hello! I'm Mariano.
                </span>
              </h3>
              <h1 className="flex scroll-m-20 text-5xl md:text-7xl sm:text-5xl font-bold tracking-tight text-center">
                <span className="bg-gradient-to-r dark:from-slate-50/60 dark:to-slate-50 from-gray-500 to-black text-transparent bg-clip-text opacity-80 p-3">
                  A Systems Engineer and Full Stack Developer, dedicated to advancing software development
                </span>
              </h1>
            </div>
          </div>
        </div>
      </section>
      {/* Skills-Section */}
      <section id='skills' className='h-screen max-w-7xl lg:p-10 mx-auto flex flex-col justify-center'>
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
      {/* Mi Work-Section */}
      <section id='my-work' className='max-w-7xl mx-auto lg:p-10 flex flex-col justify-center relative'>
        <Particles
          className='absolute inset-0 z-0'
          color={theme === 'light' ? '#000000' : '#FFFFFF'}
          quantity={200}
        />
        <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
          My Work
        </h2>

        <p className="text-xl text-muted-foreground mb-10">
          Some personal projects I have undertaken throughout my career
        </p>
        
        <div className='flex flex-col relative mt-32 mb-10'>
          <div className='flex flex-col-reverse lg:flex-row lg:items-start items-center'>
            <Card />
            <div className='flex flex-col ml-0 lg:ml-10 mb-20 text-center'>
              <div className='flex flex-row justify-center'>
                <h1 className="scroll-m-20 text-5xl tracking-tight lg:text-5x opacity-70 font-medium">
                  Lemon App
                </h1>
              </div>
              <div className='flex flex-1 items-center'>
                <p className="leading-7 [&:not(:first-child)]:mt-6 m-4 lg:m-10 opacity-70">
                  Imagine a mobile app designed to streamline daily tasks with intuitive features that enhance productivity. It offers a clean interface with easy navigation, allowing users to organize schedules, set reminders, and collaborate seamlessly. Whether managing personal projects or team assignments, the app integrates robust security measures to safeguard user data while ensuring a smooth and efficient user experience.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col mt-32 mb-10">
          <div className="flex flex-col lg:flex-row lg:items-start items-center">
            <div className="flex flex-1 flex-col lg:mr-10 w-full lg:w-auto">
              <div className="flex flex-row justify-center">
                <h1 className="scroll-m-20 text-5xl tracking-tight lg:text-5x opacity-70 font-medium">
                  Celo App
                </h1>
              </div>
              <div className="flex flex-1 items-center">
                <p className="leading-7 [&:not(:first-child)]:mt-6 m-4 lg:m-10 opacity-70 text-center">
                  Imagine a mobile app designed to streamline daily tasks with intuitive features that enhance productivity. It offers a clean interface with easy navigation, allowing users to organize schedules, set reminders, and collaborate seamlessly. Whether managing personal projects or team assignments, the app integrates robust security measures to safeguard user data while ensuring a smooth and efficient user experience.
                </p>
              </div>
            </div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className='flex relative rounded-xl overflow-hidden shadow-lg w-full items-center'
              style={{ width: 'auto', height: 'auto', minWidth: 330, minHeight: 230 }}
            >
              <Image
                src="/assets/images/projects/celo-dapp.png"
                alt="Image Description"
                layout='fill'
                objectFit='cover'
                className='z-0'
              />
              <BorderBeam duration={5} />
            </motion.div>
          </div>
        </div>
        <div className="flex flex-col mt-32 mb-10">
          <div className="flex flex-col-reverse lg:flex-row lg:items-start items-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className='flex relative rounded-xl overflow-hidden shadow-lg'
              style={{ width: 'auto', height: 'auto', minWidth: 330, minHeight: 230 }}
            >
              <Image
                src="/assets/images/projects/portfolio.png"
                alt="Image Description"
                layout='fill'
                objectFit='cover'
                className='z-0'
              />
              <BorderBeam duration={5} />
            </motion.div>
            <div className="flex-col ml-0 lg:ml-10 text-center">
              <div className="flex flex-row justify-center">
                <h1 className="scroll-m-20 text-5xl tracking-tight lg:text-5x opacity-70 font-medium">
                  Portfolio App
                </h1>
              </div>
              <div className="flex flex-1 items-center">
                <p className="leading-7 [&:not(:first-child)]:mt-6 m-4 lg:m-10 opacity-70">
                  Imagine a mobile app designed to streamline daily tasks with intuitive features that enhance productivity. It offers a clean interface with easy navigation, allowing users to organize schedules, set reminders, and collaborate seamlessly. Whether managing personal projects or team assignments, the app integrates robust security measures to safeguard user data while ensuring a smooth and efficient user experience.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className='flex flex-col relative mt-32 mb-10'>
          <div className='flex flex-col lg:flex-row lg:items-start items-center'>
            <div className='flex flex-col mr-0 lg:mr-10 mb-20 text-center'>
              <div className='flex flex-row justify-center'>
                <h1 className="scroll-m-20 text-5xl tracking-tight lg:text-5x opacity-70 font-medium">
                  Formula Drift App
                </h1>
              </div>
              <div className='flex flex-1 items-center'>
                <p className="leading-7 [&:not(:first-child)]:mt-6 m-4 lg:m-10 opacity-70">
                  Imagine a mobile app designed to streamline daily tasks with intuitive features that enhance productivity. It offers a clean interface with easy navigation, allowing users to organize schedules, set reminders, and collaborate seamlessly. Whether managing personal projects or team assignments, the app integrates robust security measures to safeguard user data while ensuring a smooth and efficient user experience.
                </p>
              </div>
            </div>
            <Card />
          </div>
        </div>
      </section>
      {/* Mi Experience-Section */}
      <section id='experience' className='h-screen max-w-7xl lg:p-10 mx-auto flex flex-col relative'>
        <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
          Professional Experience
        </h2>
      </section>
    </div>
  );

}
