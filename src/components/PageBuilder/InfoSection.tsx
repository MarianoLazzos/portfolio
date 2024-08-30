import React from 'react'
import Image from 'next/image'

export interface InfoSectionProps {
  fill?: boolean,
  title?: string,
  titleIndex?: string,
  description?: string,
  image?: string
}

export const InfoSection: React.FC<InfoSectionProps> = ({ fill = true, ...props }) => {
  let className = 'bg-background'

  if (fill) className = 'bg-black/5 dark:bg-white/10'
  
  return (
    <>
      <section id='feature-section' className={`flex w-full h-[120vh] sm:h-[80vh] p-8 ${className}`}>
        <div className='w-full grid grid-cols-1 sm:grid-cols-2'>
          <div className='flex flex-col m-5'>
            <p className='flex-1 font-medium text-3xl'>{props.titleIndex ?? ''}</p>
            <div className='flex-1'>
              <p className='font-medium text-4xl tracking-tight mb-4'>{props?.title ?? ''}</p>
              <p className='text-xl font-extralight leading-relaxed'>{props?.description ?? ''}</p>
            </div>
          </div>
          <div className='relative flex m-5'>
            <Image
              priority
              src={props?.image ?? ''}
              fill
              style={{ objectFit: 'cover' }}
              alt='camcart-bag'
              sizes='"(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"'
            />
          </div>
        </div>
      </section>
    </>
  )
}
