import FadeUpSection from '@/components/util/FadeUpSection'
import MainCarousel from '@/components/MainCarousel'
import ToTopButton from '@/components/util/ToTopButton'
import MainCategory from '@/components/main/MainCategory'
import { categoryBadgeType } from '@/types/InitialDataTypes'
import { getCategoryBadgeData } from '@/actions/main/getCategoryBadgeData'

export default async function Home() {
  const categoryBadgeResData: categoryBadgeType[] = await getCategoryBadgeData()

  return (
    <main>
      <MainCarousel />
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
      <ToTopButton />
    </main>
  )
}
