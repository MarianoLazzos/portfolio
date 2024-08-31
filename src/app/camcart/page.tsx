import ContactFooter from '@/components/PageBuilder/ContactFooter'
import ContentList from '@/components/PageBuilder/ContentList'
import EndSection from '@/components/PageBuilder/EndSection'
import { Header } from '@/components/PageBuilder/Header'
import Hero from '@/components/PageBuilder/Hero'
import { InfoSection } from '@/components/PageBuilder/InfoSection'
export interface SectionProps {
  fill?: boolean,
  title?: string,
  titleIndex?: string,
  description?: string,
  image?: string
}

export interface ContentListProps {
  selected?: number,
  title?: string,
  items?: { titleIndex: string, title: string }[]
}

export default function Camcart() {
  
  return (
    <>
      <div>
        <Hero 
          title='Camcart'
          hero_url='/assets/images/camcart-hero.jpg'
        />

        <Header 
          date='2022-2023'
          image_url='/assets/images/camcart-bag.png'
          contributors={[
            { name: 'Lazzos Mariano' },
            { name: 'Martinez Juan Andrés' },
            { name: 'Martinez Guido' },
            { name: 'Manzi Mauro' }
          ]}
          contributions={[
            { name: 'Design' },
            { name: 'Analysis' },
            { name: 'Development' },
            { name: 'Implementation' }
          ]}
          introduction={
            <>
              Going to the <br />
              Supermarket <br />
              has Never Been <br />
              so Easy.
            </>
          }
          description='CamCart is a software designed to enhance physical supermarket shopping by making it more interactive and technological, while also addressing related issues. It enables users to scan product barcodes using their mobile app to create a virtual cart and pay through the app. Additionally, it offers features like creating and organizing shopping lists based on product locations to optimize shopping routes and save time.'
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
          description='Adapting to changing shopping habits involves addressing several key challenges: crowded checkout lines, outdated prices, slow payment processes, long wait times, and so many others. Additionally, customers need the ability to view their total amount payable in real-time to improve their shopping experience.'
          image='/assets/images/supermarket_cart.jpg'
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
          description='Camcart offers a mobile solution for in-store shopping, allowing customers to scan a QR code to create a virtual cart, view real-time totals with discounts, and choose various payment methods. The app also enables users to create optimized shopping lists based on product locations in the store. Additionally, customers can log in via Facebook or Google and opt for online purchases if they prefer not to shop in person.'
          image='/assets/images/camcart-app-hand.jpg'
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
          title='Scan products barcodes'
          description='You can scan barcodes directly from the app using your phone’s camera to instantly view prices and discounts. You can also add items to your virtual shopping cart, where you can track subtotals in real time and easily edit products as needed.'
          image='/assets/images/camcart-scanner-cart.png'
          fill={false}
        />

        <InfoSection 
          titleIndex='02-04'
          title='Do the shopping with someone else'
          description='If you want to share your shopping with someone, you can join their order by entering their code or share your own code. This allows the other user to scan products and add them to your cart directly from their app.'
          image='/assets/images/camcart-shared-purchase.png'
        />
        
        <InfoSection 
          titleIndex='02-05'
          title='Explore offers and discounts'
          description='Easily explore deals and discounts from any supermarket, anytime, directly from the app.'
          image='/assets/images/camcart-offers.png'
          fill={false}
        />

        <InfoSection 
          titleIndex='02-06'
          title='Create shopping lists'
          description='Easily create virtual shopping lists by searching for products through a convenient search tool, with real-time visibility of subtotals at all times.'
          image='/assets/images/camcart-lists.png'
        />

        <InfoSection 
          titleIndex='02-07'
          title='Sort your shopping cart'
          description='When you’re at the supermarket, you can use your shopping lists directly within the app. By activating a list, you’ll see an optimized route based on the layout of the store you’re in, making your shopping experience more efficient.'
          image='/assets/images/camcart-sorted-list.png'
          fill={false}
        />
        
        <InfoSection 
          titleIndex='02-08'
          title='Pay from your phone'
          description='You can pay directly through the app using a variety of payment options, ensuring a seamless checkout experience.'
          image='/assets/images/camcart-pay.png'
        />

        <InfoSection 
          titleIndex='02-09'
          title='Order from your home'
          description='If you prefer staying home, you can place an order online and pick it up when it’s ready. With the product search feature, placing your order is quick and easy.'
          image='/assets/images/camcart-online-purchase.png'
          fill={false}
        />

        <InfoSection 
          titleIndex='02-10'
          title='Real-Time order tracking'
          description='Track your orders in real-time with detailed updates at every step. Once your order is ready, you can pick it up and complete the payment through the app for a seamless experience.'
          image='/assets/images/camcart-online-tracking.png'
        />

        <InfoSection 
          titleIndex='02-11'
          title='Supermarket side order builder'
          description='On the supermarket side, the app provides a profile for the order fulfillment staff, enabling them to manage online orders, prepare them for pickup, and authorize payment when the customer arrives to collect their order.'
          image='/assets/images/camcart-online-order-builder.png'
          fill={false}
        />
        
        <EndSection />

        <ContactFooter />
      </div>
    </>
  )
}