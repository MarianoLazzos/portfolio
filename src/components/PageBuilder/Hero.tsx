import React from 'react'
import Image from 'next/image'

export interface HeroProps {
  title: string,
  hero_url: string
}

const Hero: React.FC<HeroProps> = (props) => {
  return (
    <>
    <div className='h-[80vh] relative'>
      <Image
        priority
        src={props.hero_url}
        fill
        style={{ objectFit: 'cover' }}
        alt='camcart-hero'
        sizes='"(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"'
      />
    </div>
    <h1 className='text-primary text-7xl leading-snug sm:text-9xl sm:leading-snug ml-6 overflow-hidden'>
      {props.title}
    </h1>
    </>
  )
}

export default Hero