import BrandFilterBar from '@/components/brand/BrandFilterBar'
import BrandList from '@/components/brand/BrandList'
import BrandSearchBar from '@/components/brand/BrandSearchBar'

export default function Brand() {
  return (
    <main>
      <BrandSearchBar />
      <BrandFilterBar />
      <BrandList />
    </main>
  )
}
