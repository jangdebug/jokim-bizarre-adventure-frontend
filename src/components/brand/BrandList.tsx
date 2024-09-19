import { brandDatas } from '@/datas/dummy/category/BrandData'
import BrandListItem from './BrandListItem'

export default function BrandList() {
  const alphabetKeys = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
  const groupedBrands: Record<string, BrandType[]> = alphabetKeys.reduce(
    (acc, letter) => {
      acc[letter] = []
      return acc
    },
    {} as Record<string, BrandType[]>,
  )

  groupedBrands['0-9'] = []
  groupedBrands['etc'] = []

  brandDatas.forEach((brand) => {
    const firstLetter = (brand.englishName ?? '').charAt(0).toUpperCase()

    if (/^[A-Z]$/.test(firstLetter)) {
      groupedBrands[firstLetter].push(brand)
    } else if (/^\d$/.test(firstLetter)) {
      groupedBrands['0-9'].push(brand)
    } else {
      groupedBrands['etc'].push(brand)
    }
  })

  const sortedKeys = [...alphabetKeys, '0-9', 'etc']

  return (
    <section className="px-[24px]">
      {sortedKeys.map((index) => (
        <div key={index}>
          <p
            id={index}
            className="text-[16px] font-bold mb-[9px] leading-[48px] border-b border-[#f0f0f0] scroll-m-[48px]"
          >
            {index}
          </p>
          <ul>{groupedBrands[index]?.map((item) => <BrandListItem key={item.id} brand={item} />)}</ul>
        </div>
      ))}
    </section>
  )
}
