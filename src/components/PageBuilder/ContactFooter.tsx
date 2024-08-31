import React from 'react'
import Link from 'next/link'

export interface ContactFooterProps {}

const ContactFooter: React.FC<ContactFooterProps> = (props) => {
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
    <section id='contact' className='flex lg:p-10 mx-auto mt-28 p-7 justify-between'>
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
        <p className='tracking-tight text-md hidden sm:block'>
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

export default ContactFooter