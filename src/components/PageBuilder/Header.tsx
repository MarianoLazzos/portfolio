import React from 'react'
import Image from 'next/image'

export interface HeaderProps {
  date: string,
  contributors: { name: string }[],
  contributions: { name: string }[],
  image_url: string,
  introduction: React.ReactNode,
  description: string
}

export const Header: React.FC<HeaderProps> = (props) => {
  const columns = [
    {
      title: 'Project Date',
      content: <div>
        <p className='text-sm sm:text-xl font-extralight'>{props.date}</p>
      </div>
    },
    {
      title: 'Contributors',
      content: <div className='space-y-2'>
        {props.contributors.map((contributor) => {
          return <p key={contributor.name} className='text-sm sm:text-xl font-extralight'>{contributor.name}</p>
        })}
      </div>
    },
    {
      title: 'My Contributions',
      content: <div className='space-y-2'>
        {props.contributions.map((contribution) => {
          return <p key={contribution.name} className='text-sm sm:text-xl font-extralight'>{contribution.name}</p>
        })}
      </div>
    }
  ]

  return (
    <section id='project-brief' className='flex flex-col md:grid md:grid-cols-2 m-10 gap-5'>
        <div className='border-t-2 border-primary pt-5'>
          <div className='flex flex-row justify-between'>
            <p className="text-3xl font-medium mb-4 flex-1">01 Project Brief</p>
          </div>
          <div className='grid grid-cols-3 mt-5 gap-1'>
            {columns.map(item => {
              return (
                <div key={item.title} className=''>
                  <h3 className='text-primary text-sm sm:text-xl font-semibold mb-5'>{item.title}</h3>
                  {item.content}
                </div>
              )
            })}
          </div>
          <div className=''>
            <h2 className='text-5xl my-20'>
              {props.introduction}
            </h2>
          </div>
          <div>
            <p className='text-xl font-extralight leading-relaxed'>
              {props.description}
            </p>
          </div>
        </div>
        <div className='relative h-[50vh] md:h-auto'>
          <Image
            priority
            src={props.image_url}
            fill
            style={{ objectFit: 'cover' }}
            alt='camcart-bag'
            sizes='"(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"'
          />
        </div>
      </section>
  )
}
