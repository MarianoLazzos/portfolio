

import Navbar from '@/components/Navbar'
import Image from 'next/image'

export default function Camcart() {
  const renderDescription = () => {
    const columns = [
      {
        title: 'Project Date',
        content: <div>
          <p className='text-xl font-extralight'>2022-2023</p>
        </div>
      },
      {
        title: 'Contributors',
        content: <div className='space-y-2'>
          <p className='text-xl font-extralight'>Mariano Lazzos</p>
          <p className='text-xl font-extralight'>Martinez Juan Andres</p>
          <p className='text-xl font-extralight'>Martinez Guido</p>
          <p className='text-xl font-extralight'>Manzi Mauro</p>
        </div>
      },
      {
        title: 'My Contributions',
        content: <div className='space-y-2'>
          <p className='text-xl font-extralight'>Design</p>
          <p className='text-xl font-extralight'>Analysis</p>
          <p className='text-xl font-extralight'>Development</p>
          <p className='text-xl font-extralight'>Implementation</p>
        </div>
      }
    ]

    return (
      <section id='project-brief' className='flex flex-col md:grid md:grid-cols-2 m-10 gap-5'>
        <div className='border-t-2 border-primary pt-5'>
          <div className='flex flex-row justify-between'>
            <h2 className='text-primary text-4xl font-normal'>01</h2>
            <h2 className='text-primary text-4xl font-normal'>Project Brief</h2>
          </div>
          <div className='grid grid-cols-3 mt-5'>
            {columns.map(item => {
              return (
                <div key={item.title} className=''>
                  <h3 className='text-primary text-xl font-semibold mb-5'>{item.title}</h3>
                  {item.content}
                </div>
              )
            })}
          </div>
          <div className=''>
            <h2 className='text-5xl my-20'>
              Going to the <br />
              Supermarket <br />
              has Never Been <br />
              so Easy.
            </h2>
          </div>
          <div>
            <p className='text-xl font-extralight leading-relaxed'>
              CamCart is a software designed to enhance physical supermarket shopping by making it more interactive and technological, while also addressing related issues. It enables users to scan product barcodes using their mobile app to create a virtual cart and pay through the app. Additionally, it offers features like creating and organizing shopping lists based on product locations to optimize shopping routes and save time.
            </p>
          </div>
        </div>
        <div className='relative h-[50vh] md:h-auto'>
          <Image
            src='/assets/images/camcart-bag.png'
            fill
            style={{ objectFit: 'cover' }}
            alt='camcart-bag'
          />
        </div>
      </section>
    )
  }

  return (
    <>
      <Navbar />
      <div>
        {/* Hero */}
        <div className='h-[80vh] relative'>
          <Image
            src='/assets/images/camcart-hero.jpg'
            fill
            style={{ objectFit: 'cover' }}
            alt='camcart-hero'
          />
        </div>
        <h1 className='text-primary text-9xl md:text-[200px] leading-tight ml-6'>
          Camcart
        </h1>

        {renderDescription()}
      </div>
    </>
  )
}