'use client'

import React from 'react';
import { MapPin } from 'lucide-react'

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Particles from '@/components/ui/magicui/particles';
import { useTheme } from 'next-themes';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import { ImageCard } from '@/components/ImageCard';
import ContactFooter from '@/components/PageBuilder/ContactFooter';

interface ExperienceSectionProps {
  visit: string,
  subtitle: string,
  title: string,
  titleHighlighted: string
  location?: string,
  description?: string,
  badgeList?: string[],
  className?: string
}

const ExperienceSection: React.FC<ExperienceSectionProps> = (props) => {

  return (
    <div className={props?.className}>
      <div className='flex flex-1 mb-3 items-center justify-between'>
        <p className="text-l text-muted-foreground font-light">
          {props.subtitle}
        </p>
        {props.location && (
          <Badge variant='secondary'>
            <MapPin size={12} className='mr-1' />{props.location}
          </Badge>
        )}
      </div>
      <div className='flex flex-row items-center flex-wrap'>
        <div className='flex flex-1 flex-wrap'>
          <h2 className="scroll-m-20 pb-2 text-2xl md:text-5xl font-light tracking-tight transition-colors first:mt-0 mr-2">
            {props.title},
          </h2>
          <h2 className="scroll-m-20 pb-2 text-2xl md:text-5xl font-normal tracking-tight transition-colors first:mt-0">
            {props.titleHighlighted}
          </h2>
        </div>
        <Link href={props.visit} className='w-full md:w-32'>
          <Button
            variant='secondary'
            className='rounded-full w-full md:w-32 mt-5 md:mt-0'
          >
            Visit
          </Button>
        </Link>
      </div>
      {props?.description && (
        <p className="leading-7 mt-4">
          {props.description}
        </p>
      )}
      {props?.badgeList?.length && (
        <div className='flex flex-1 flex-row mt-5 flex-wrap'>
          {props?.badgeList.map(badge => {
            return <Badge key={badge} className='mr-2 mb-2 hover:scale-110'>{badge}</Badge>
          })}
        </div>
      )}
    </div>
  )
}


export default function Home() {
  const { theme } = useTheme()

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

  const renderHero = () => {
    return (
      <section id='hero' className='p-5 h-[70vh] flex relative items-center'>
        <Particles
          className='absolute inset-0 z-0'
          color={theme === 'light' ? '#000000' : '#FFFFFF'}
          quantity={200}
        />
        <div className='max-w-7xl flex flex-1 z-40'>
          <div className='flex flex-1'>
            <div className='font-light tracking-tight leading-tight flex-col text-disabled text-lg md:text-3xl flex'>
              <span>
                Hello! I'm <span className='text-primary'>Mariano Lazzos</span>
              </span>
              <br />
              <span>
                I’m a <span className='text-primary'>Systems Engineer</span> and <span className='text-primary'>Full Stack Developer</span>.
              </span>
              <span>
                I design digital products and develop complex systems<br />
                with a focus on quality.
              </span>
              <br />
              <span>
                Feel free to <a className='text-primary underline-offset-2 border-b-2 border-primary cursor-pointer' onClick={() => scrollToSection('contact')}>contact me</a> or explore my work!
              </span>
            </div>
          </div>

        </div>
      </section>
    )
  }

  const renderWork = () => {
    const data = [
      {
        route: '/prepago',
        image: '/assets/images/projects/prepago.png',
        title: 'Prepago - MVP',
        subtitle: 'Freelance',
        subtitle2: 'Ascentio Technologies'
      },
      {
        route: '/camcart',
        image: '/assets/images/projects/camcart.png',
        title: 'Supermarket buying tool',
        subtitle: 'UTN-FRC',
        subtitle2: 'Academic final project 2022'
      },
      {
        route: '/',
        image: '/assets/images/projects/portfolio.jpeg',
        title: 'Portfolio',
        subtitle: 'Design',
        subtitle2: 'Personal project'
      },
      {
        route: '/celo-dapp',
        image: '/assets/images/projects/celo-dapp.png',
        title: 'Donate through crypto',
        subtitle: 'Celo Blockchain',
        subtitle2: 'Personal project'
      },
      {
        route: '/learning',
        image: '/assets/images/projects/learning.jpg',
        title: 'Learning resume',
        subtitle: 'Courses',
        subtitle2: 'Taken courses'
      }
    ]

    return (
      <section id="my-work">
        <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
          {data.map((item, index) => {
            return <ImageCard key={index} {...item} />
          })}
        </div>
      </section>
    );
  }

  const renderExperience = () => {
    return (
      <section id='experience' className='mt-10 min-h-screen max-w-7xl p-5 lg:p-10 mx-auto flex flex-col relative'>
        <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0 mb-14">
          Professional Experience
        </h2>
        <ExperienceSection
          className='mb-16'
          location='Córdoba, Argentina'
          subtitle='SEP, 2022 - CURRENT'
          title='Full Stack Developer'
          titleHighlighted='Mobbex'
          visit='https://mobbex.com/'
          description={` I drove significant functionality enhancements across both frontend and backend systems. My commitment to quality and performance, coupled with the adoption of best practices, ensured robust and efficient solutions. Thriving in a fast-paced environment, I quickly adapted and honed my skills, delivering high-impact projects that elevated the user experience and streamlined payment processes, ultimately contributing to the company's growth and success`}
          badgeList={[
            'NodeJS',
            'Express',
            'React',
            'NextJS',
            'React-Native',
            'Typescript',
            'MongoDB',
            'Redis',
            'PostgreSQL',
            'Scrum',
            'Docker',
            'Microservices',
            'More'
          ]}
        />
        <ExperienceSection
          location='Córdoba, Argentina'
          subtitle='SEP, 2022 - CURRENT'
          title='Full Stack Developer'
          titleHighlighted='Suga'
          visit='https://sugaway.com/'
          description={`I focused on improving and creating services and functionalities that enabled the company to offer comprehensive financial solutions to the clients. My dedication to quality and performance, combined with best practices, allowed me to deliver high-impact projects. These efforts streamlined payment processes and improved the user experience, empowering clients to build their own fintech operations using our company's infrastructure, and ultimately driving the company's growth and success.`}
          badgeList={[
            'NodeJS',
            'Express',
            'React',
            'NextJS',
            'React-Native',
            'Typescript',
            'MongoDB',
            'Redis',
            'PostgreSQL',
            'Scrum',
            'Docker',
            'Microservices',
            'More'
          ]}
        />
      </section>
    )
  }

  const renderEducation = () => {
    return (
      <section id='education' className='min-h-screen max-w-7xl p-5 lg:p-10 mx-auto flex flex-col relative'>
        <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0 mb-14">
          Education
        </h2>

        <ExperienceSection
          className='mb-16'
          subtitle='FEB, 2018 - DEC, 2022'
          title='Systems Engineering'
          titleHighlighted='UTN - FRC'
          visit='https://utn.edu.ar/es/'
          description={`Through my Bachelor’s degree in Systems Information Engineering, I developed a deep understanding of the entire lifecycle of information and software systems. I learned to identify user needs, analyze and design effective solutions, and build and implement robust systems. My education emphasized rigorous testing and maintenance practices, ensuring that systems are reliable, scalable, and aligned with business requirements. This comprehensive training equipped me with the skills to address complex challenges and contribute meaningfully to the development and management of advanced technological solutions.`}
          badgeList={[
            "Problem-Solving",
            "Analytical Thinking",
            "Attention to Detail",
            "Communication",
            "Project Management",
            "Adaptability",
            "Teamwork",
            "Time Management",
            "Creativity",
            "Customer Focus"
          ]}
        />
      </section>
    )
  }

  const renderContact = () => {
    const mailInfo = {
      email: 'lazzosmariano@gmail.com',
      subject: 'Contact from Portfolio',
      body: 'Hello Mariano, I would like to get in touch with you regarding your portfolio.'
    }

    const leftActions = [
      { 
        href: 'https://www.linkedin.com/in/marianolazzos/',
        name: 'Linkedin'
      },
      { 
        href: 'https://github.com/MarianoLazzos',
        name: 'Github'
      },
      { 
        href: `mailto:${mailInfo.email}?subject=${encodeURIComponent(mailInfo.subject)}&body=${encodeURIComponent(mailInfo.body)}`,
        name: 'Send Email'
      },
    ]

    const rightActions = [
      {
        name: 'Resume',
        href: 'https://drive.google.com/uc?export=download&id=1XpaYbXjBH0BLRIU9T2eITXkBap_TPu99'
      }
    ]

    return (
      <section id='contact' className='flex border-t-2 lg:p-10 mx-auto mt-28 justify-between'>
        <div className='flex flex-col'>
          {leftActions.map((item, index) => {
            return (
              <Link 
                key={index}
                href={item.href}
                className='self-start  border-primary cursor-pointer tracking-tight text-md underline-offset-1 border-b'
              >
                {item.name}
              </Link>
            )
          })}
        </div>

        <div className='self-end'>
          <p className='tracking-tight text-md'>
            Mariano Lazzos 2024 © All rights reserved
          </p>
        </div>

        <div className='flex flex-col'>
          {rightActions.map((item, index) => {
            return (
              <Link 
                key={index}
                href={item.href} 
                className='self-end border-primary cursor-pointer tracking-tight text-md underline-offset-1 border-b'
              >
                {item.name}
              </Link>
            )
          })}
        </div>
      </section>
    )
  }

  return (
    <>
      <Navbar />
      <div className='relative px-1 md:px-10'>
        {/* Hero-Section */}
        {renderHero()}
        {/* My Work-Section */}
        {renderWork()}
        {/* Experience-Section */}
        {renderExperience()}
        {/* Education-Section */}
        {renderEducation()}
        {/* Contact-Section */}
        <ContactFooter />
      </div>
    </>
  )
}
