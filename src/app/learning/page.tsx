import React from 'react'
import { ImageCard } from '@/components/ImageCard';
import EndSection from '@/components/PageBuilder/EndSection';
import Hero from '@/components/PageBuilder/Hero';
import ContactFooter from '@/components/PageBuilder/ContactFooter';

export default function Learning() {

  const renderCourses = () => {
    const data = [
      {
        route: 'https://www.udemy.com/course/node-with-react-fullstack-web-development/',
        image: '/assets/images/node-react-fullstack.jpg',
        title: 'Node with React',
        subtitle: 'Udemy',
        subtitle2: 'Stephen Grider'
      },
      {
        route: 'https://www.udemy.com/course/advanced-node-for-developers/',
        image: '/assets/images/node-advance.jpg',
        title: 'Node JS Advanced',
        subtitle: 'Udemy',
        subtitle2: 'Stephen Grider'
      },
      {
        route: 'https://www.udemy.com/course/the-complete-react-native-and-redux-course/',
        image: '/assets/images/react-native.jpg',
        title: 'React Native',
        subtitle: 'Udemy',
        subtitle2: 'Stephen Grider'
      },
      {
        route: 'https://www.udemy.com/course/react-redux/',
        image: '/assets/images/react-redux.jpg',
        title: 'React with Redux',
        subtitle: 'Udemy',
        subtitle2: 'Stephen Grider'
      },
      {
        route: 'https://www.udemy.com/course/coding-interview-bootcamp-algorithms-and-data-structure/',
        image: '/assets/images/data-structures.jpg',
        title: 'Algorithms, Data Structures',
        subtitle: 'Udemy',
        subtitle2: 'Stephen Grider'
      },
      {
        route: 'https://www.udemy.com/course/ethereum-and-solidity-the-complete-developers-guide/#instructor-1',
        image: '/assets/images/ethereum-solidity.jpg',
        title: 'Ethereum - Solidity',
        subtitle: 'Udemy',
        subtitle2: 'Stephen Grider'
      }
    ]

    return (
      <>
        <section id="my-work" className='p-10'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
            {data.map((item, index) => {
              return <ImageCard key={index} {...item} />
            })}
          </div>
        </section>
        <EndSection />
      </>
    );
  }

  return (
    <>
      <Hero 
        title='Courses'
        hero_url='/assets/images/projects/learning.jpg'
      />
      {renderCourses()}

      <ContactFooter />
    </>
  )
}
