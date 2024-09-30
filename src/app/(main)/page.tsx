import { getMainSwiperItem } from '@/actions/main/getMainSwiperItem'
import MainCategory from '@/components/main/MainCategory'
import MainSwiper from '@/components/main/MainSwiper'
import FadeUpSection from '@/components/util/FadeUpSection'

import { getBestItemMainAction } from '@/actions/best/getBestItemData'
import FadeBestList from '@/components/main/FadeBestList'
import SlimEventSwiper from '@/components/ui/SlimEventSwiper'
import Image from 'next/image'

export default async function Home() {
  const mainSwiperData = await getMainSwiperItem()
  const bestItems = await getBestItemMainAction()

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
          className="px-[24px] pb-[48px] w-full"
        />
      </FadeUpSection>
      <FadeUpSection>
        <SlimEventSwiper />
      </FadeUpSection>
      <div>
        <FadeUpSection>
          <FadeBestList bestItems={bestItems} />
        </FadeUpSection>
      </div>
    </main>
  )
}
