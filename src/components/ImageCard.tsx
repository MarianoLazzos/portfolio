import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export interface ImageCardProps {
  route: string,
  image: string,
  title: string,
  subtitle: string
  subtitle2: string
}

export const ImageCard: React.FC<ImageCardProps> = (props) => {
  return (
    <Link href={props.route} className='max-w-full inline-block h-[50vh] relative group transform transition-transform duration-300 ease-out hover:translate-y-[-5px]'>
      <Image
        src={props.image}
        fill
        style={{ objectFit: 'cover' }}
        alt={props.title}
        sizes='"(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"'
      />
      <div
        className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex transition-opacity duration-300 ease-out p-10 flex-col justify-between"
      >
        <h1 className="max-w-[70%] scroll-m-20 text-4xl font-light tracking-tight lg:text-4xl text-white">
          {props.title}
        </h1>
        <div className='flex flex-col'>
          <h3 className="scroll-m-20 text-2xl font-light tracking-tight text-white">
            {props.subtitle}
          </h3>
          <h3 className="scroll-m-20 text-2xl font-light tracking-tight opacity-70 text-white">
            {props.subtitle2}
          </h3>
        </div>
      </div>
    </Link>
  );
}
