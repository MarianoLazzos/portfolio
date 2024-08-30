import React from 'react'
import Link from 'next/link'

const EndSection = () => {
  return (
    <section id='footer' className='relative flex flex-col h-[100vh] w-full items-center justify-center p-10 text-center'>
      <p className='text-7xl font-semibold'>Thank you for viewing.</p>
      <div className='flex mt-10'>
        <Link href='/' className='border-primary cursor-pointer tracking-tight text-lg underline-offset-1 border-b'>back home</Link>
      </div>
    </section>
  )
}

export default EndSection