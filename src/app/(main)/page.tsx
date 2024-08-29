import FadeUpSection from '@/components/util/FadeUpSection'
import MainSwiper from '@/components/main/MainSwiper'
import ToTopButton from '@/components/util/ToTopButton'
import { getMainSwiperItem } from '@/actions/main/getMainSwiperItem'

export default async function Home() {
  const mainSwiperData = await getMainSwiperItem()

  return (
    <main className="flex min-h-screen flex-col ">
      <MainSwiper swiperItems={mainSwiperData} />
      <div
        style={{
          height: '400px',
          backgroundColor: 'black',
          color: 'white',
          marginBottom: '50px',
        }}
      >
        MAINCATEGORY
      </div>
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
