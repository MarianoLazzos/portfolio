'use client'

import React from 'react';
import { Linkedin, Github, Mail, MapPin, Menu, X } from 'lucide-react'

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import Particles from '@/components/ui/magicui/particles';
import { useTheme } from 'next-themes';
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link';

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
};

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
  };


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

  const renderHeader = () => {
    return (
      <div className='flex flex-row items-center justify-between sticky top-0 bg-background z-50 px-10 py-5'>
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

  const renderWork = () => {
    const data = [
      {
        id: 1,
        type: 'local',
        path: '/assets/images/projects/portfolio.jpeg',
        data: {
          title: 'Portfolio',
          subtitle: 'Design',
          subtitle2: 'Personal project'
        }
      },
      {
        id: 2,
        type: 'local',
        path: '/assets/images/projects/camcart.png',
        data: {
          title: 'Supermarket buying tool',
          subtitle: 'UTN-FRC',
          subtitle2: 'Academic final project 2022'
        }
      },
      {
        id: 3,
        type: 'local',
        path: '/assets/images/projects/celo-dapp.png',
        data: {
          title: 'Donate through crypto',
          subtitle: 'Celo Blockchain',
          subtitle2: 'Personal project'
        }
      },
      {
        id: 4,
        type: 'tp',
        path: '/assets/images/projects/learning.jpg',
        data: {
          title: 'Learning resume',
          subtitle: 'Courses',
          subtitle2: 'Taken courses'
        }
      }
    ]

    return (
      <section id="my-work">
        <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
          {data.map((item, index) => {
            return (
              <div key={index} className='max-w-full inline-block h-[50vh] relative group transform transition-transform duration-300 ease-out hover:translate-y-[-5px]'>
                <Image
                  src={item.path}
                  fill
                  style={{ objectFit: 'cover' }}
                  alt={item.data.title}
                />
                <div
                  className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex transition-opacity duration-300 ease-out p-10 flex-col justify-between"
                >
                  <h1 className="max-w-[70%] scroll-m-20 text-4xl font-light tracking-tight lg:text-4xl text-white">
                    {item.data.title}
                  </h1>
                  <div className='flex flex-col'>
                    <h3 className="scroll-m-20 text-2xl font-light tracking-tight text-white">
                      {item.data.subtitle}
                    </h3>
                    <h3 className="scroll-m-20 text-2xl font-light tracking-tight opacity-70 text-white">
                      {item.data.subtitle2}
                    </h3>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    );
  };

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

    const href = `mailto:${mailInfo.email}?subject=${encodeURIComponent(mailInfo.subject)}&body=${encodeURIComponent(mailInfo.body)}`

    return (
      <section id='contact' className='border-t-2 lg:p-10 mx-auto flex flex-col relative mt-28'>
        <div className='flex flex-row justify-center'>
          <Link href='https://www.linkedin.com/in/marianolazzos/'>
            <Linkedin
              size={30}
              className='m-5 hover:text-primary/70 cursor-pointer'
            />
          </Link>
          <Link href='https://github.com/MarianoLazzos'>
            <Github
              size={30}
              className='m-5 hover:text-primary/70 cursor-pointer'
            />
          </Link>
          <a href={href}>
            <Mail
              size={30}
              className='m-5 hover:text-primary/70 cursor-pointer'
            />
          </a>
        </div>
      </section>
    )
  }

  return (
    <>
      {renderHeader()}
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
        {renderContact()}
      </div>
    </>
  )
}
