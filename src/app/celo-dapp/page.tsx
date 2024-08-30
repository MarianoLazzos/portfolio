import React from 'react'
import Hero from '@/components/PageBuilder/Hero'
import { Header } from '@/components/PageBuilder/Header'
import ContentList from '@/components/PageBuilder/ContentList'
import { InfoSection } from '@/components/PageBuilder/InfoSection'
import EndSection from '@/components/PageBuilder/EndSection'

export default function Camcart() {
  return (
    <>
      <div>
        <Hero 
          title='Celo DApp'
          hero_url='/assets/images/celo-hero.png'
        />

        <Header 
          date='2022'
          image_url='/assets/images/celo-header.jpeg'
          contributors={[{ name: 'Lazzos Mariano' }]}
          contributions={[
            { name: 'Design' },
            { name: 'Development' }
          ]}
          introduction={
            <>
              Start helping <br />
              through crypto. <br />
            </>
          }
          description='This decentralized application empowers users to create and manage requests for various needs, setting specific goals to achieve. Individuals can contribute by donating cryptocurrency to these requests, supporting the causes they care about. The platform facilitates a community-driven approach, allowing anyone to seek assistance and receive support through secure and transparent crypto transactions.'
        />
      </div>

      <ContentList 
        title='02 Challenges'
        selected={0}
        items={[
          { title: 'Problem', titleIndex: '01' },
          { title: 'Solution', titleIndex: '02' },
          { title: 'Functionalities', titleIndex: '03' }
        ]}
      />

      <InfoSection 
        titleIndex='02-01'
        title='What we are looking to solve'
        description='Traditional fundraising platforms often lack transparency and efficiency, making it hard for individuals to achieve their goals and for donors to contribute securely. There is a need for a decentralized solution that allows users to create requests, set goals, and receive cryptocurrency donations, ensuring transparency and ease of contribution.'
        image='/assets/images/celo-transparency.jpg'
        fill={false}
      />

      <ContentList 
        title='02 Challenges'
        selected={1}
        items={[
          { title: 'Problem', titleIndex: '01' },
          { title: 'Solution', titleIndex: '02' },
          { title: 'Functionalities', titleIndex: '03' }
        ]}
      />

      <InfoSection 
        titleIndex='02-02'
        title='The solution'
        description='The platform leverages the Celo blockchain to offer a decentralized solution for fundraising. Users can create requests with specific goals, and others can donate cryptocurrency directly. Donations are securely accumulated in a smart contract, and the request owner can finalize the request at any time. Once concluded, the funds are transferred to the owner’s address, ensuring transparency and efficiency in the fundraising process.'
        image='/assets/images/celo-logo-banner.jpeg'
        fill={false}
      />

      <ContentList 
        title='02 Challenges'
        selected={2}
        items={[
          { title: 'Problem', titleIndex: '01' },
          { title: 'Solution', titleIndex: '02' },
          { title: 'Functionalities', titleIndex: '03' }
        ]}
      />

      <InfoSection 
        titleIndex='02-03'
        title='Connect your Celo wallet'
        description='Since the platform is built on the Celo blockchain, you can connect your Celo wallet to it.'
        image='/assets/images/celo-connect-wallet.png'
        fill={false}
      />  

      <InfoSection 
        titleIndex='02-04'
        title='Explore requests'
        description='Easily and intuitively explore all the requests placed by users.'
        image='/assets/images/celo-requests.png'
      /> 

      <InfoSection 
        titleIndex='02-05'
        title='Create your own request'
        description='Create your own request by filling out a simple form and dive into the world of crypto donations.'
        image='/assets/images/celo-create-request.png'
        fill={false}
      /> 

      <InfoSection 
        titleIndex='02-06'
        title='Make a donation'
        description='Donate through your Celo wallet to any donation request you choose, and leave a message of support.'
        image='/assets/images/celo-donate.png'
      /> 

      <EndSection />     
    </>
  )
}