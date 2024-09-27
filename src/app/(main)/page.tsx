import FadeUpSection from '@/components/util/FadeUpSection'
import MainSwiper from '@/components/main/MainSwiper'
import MainCategory from '@/components/main/MainCategory'
import { getMainSwiperItem } from '@/actions/main/getMainSwiperItem'

import { getServerSession } from 'next-auth'
import { options } from '../api/auth/[...nextauth]/options'
import { getParentCategories } from '@/actions/category/getCategoryData'
import SlimEventSwiper from '@/components/ui/SlimEventSwiper'
import Image from 'next/image'

export default async function Home() {
  const mainSwiperData = await getMainSwiperItem()

  // const session = await getServerSession(options)
  // const isAuth = session?.user ? session.user : null
  // console.log('user sesstion', isAuth)

  return (
    <main>
      <MainSwiper swiperItems={mainSwiperData} />
      <MainCategory />

      <FadeUpSection>
        <Image
          src={`https://image.sivillage.com/upload/C00001/s3/dspl/banner/90/736/30/240900000513736_20240927104943.jpg`}
          alt="dummyEvent"
          width={500}
          height={500}
          className="px-[24px] pb-[48px]"
        />
      </FadeUpSection>
      <FadeUpSection>
        <SlimEventSwiper />
      </FadeUpSection>
      <div
        style={{
          height: '400px',
          backgroundColor: 'black',
          color: 'white',
        }}
      >
        <FadeUpSection>
          <div
            style={{
              height: '300px',
              backgroundColor: 'grey',
              color: 'black',
            }}
          >
            FADEUP ITEM
          </div>
        </FadeUpSection>
      </div>
    </main>
  )
}
