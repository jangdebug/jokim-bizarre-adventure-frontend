import FadeUpSection from '@/components/util/FadeUpSection'
import MainSwiper from '@/components/main/MainSwiper'
import MainCategory from '@/components/main/MainCategory'
import { getMainSwiperItem } from '@/actions/main/getMainSwiperItem'
import { categoryBadgeType } from '@/types/InitialDataTypes'
import { getCategoryBadgeData } from '@/actions/main/getCategoryBadgeData'

export default async function Home() {
  const categoryBadgeResData: categoryBadgeType[] = await getCategoryBadgeData()
  const mainSwiperData = await getMainSwiperItem()

  return (
    <main>
      <MainSwiper swiperItems={mainSwiperData} />
      <MainCategory categoryBadgeListData={categoryBadgeResData} />
      <div
        style={{
          height: '500px',
          backgroundColor: 'black',
          color: 'white',
        }}
      >
        <FadeUpSection>
          <div
            style={{
              height: '400px',
              backgroundColor: 'white',
              color: 'black',
            }}
          >
            FADEUP ITEM
          </div>
        </FadeUpSection>
      </div>
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
              backgroundColor: 'white',
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
