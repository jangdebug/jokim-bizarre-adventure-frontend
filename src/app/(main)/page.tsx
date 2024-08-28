import FadeUpSection from '@/components/util/FadeUpSection'
import MainCarousel from '@/components/MainCarousel'
import ToTopButton from '@/components/util/ToTopButton'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col ">
      <MainCarousel />
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
