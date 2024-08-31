import ContentList from '@/components/PageBuilder/ContentList'
import EndSection from '@/components/PageBuilder/EndSection'
import { Header } from '@/components/PageBuilder/Header'
import Hero from '@/components/PageBuilder/Hero'
import { InfoSection } from '@/components/PageBuilder/InfoSection'
import React from 'react'

export default function Prepago() {
  return (
    <>
      <Hero
        title='Prepago'
        hero_url='/assets/images/prepago-hero.png'
      />

      <Header
        date='2024'
        contributors={[
          { name: 'Lazzos Mariano' },
          { name: 'Martinez Juan Andrés' }
        ]}
        contributions={[
          { name: 'Design' },
          { name: 'Development' },
        ]}
        image_url='/assets/images/prepago-header.jpg'
        introduction={
          <>
            Pay your <br />
            electricity service <br />
            when <br />
            you need to <br />
          </>
        }
        description='Prepago is an application that streamlines the process of managing electricity for your properties. It allows you to easily top up your electricity balance, monitor usage, and receive notifications—all from a single app. Stay informed about your outstanding balances and get alerts when you reach preset usage limits, ensuring you’re always in control.'
      />

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
        description='Managing electricity for multiple properties is often a hassle. Traditional methods require using different platforms or making physical visits to top up, track usage, and monitor payments. This can lead to missed payments, unexpected outages, and a lack of real-time information. There’s a need for a simple, all-in-one solution to make these tasks easier and more efficient.'
        image='/assets/images/prepago-problem.jpg'
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
        title='The solution we bring'
        description='Prepago offers a straightforward way to manage electricity for multiple properties. With a single app, you can top up balances, track usage, and receive notifications about payments and usage limits. It simplifies power management by keeping everything in one place, so you stay informed and in control.'
        image='/assets/images/prepago-solution.png'
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
        title='Login'
        description='Log in with your credentials, and you can start managing your service.'
        image='/assets/images/prepago-login.png'
        fill={false}
      />

      <InfoSection
        titleIndex='02-04'
        title='Explore your balances and meters'
        description='You can explore your meters, manage balances, and easily view alerts and notifications.'
        image='/assets/images/prepago-home.png'
      />

      <InfoSection
        titleIndex='02-05'
        title='Check your meters'
        description='View the details of your meters.'
        image='/assets/images/prepago-meter.png'
        fill={false}
      />

      <InfoSection
        titleIndex='02-06'
        title='Pay and recharge to your meters'
        description='Easily and quickly recharge the balance of any of your meters directly from the app. You’ll receive a notification once the recharge is completed.'
        image='/assets/images/prepago-payment.png'
      />

      <InfoSection
        titleIndex='02-07'
        title='Manage payments from web'
        description='On the provider’s side, a web platform is available to manage and authorize various recharge requests.'
        image='/assets/images/prepago-web.png'
        fill={false}
      />

      <EndSection />
    </>
  )
}