import { brandListType } from '@/types/BrandTypes'
import BrandListItem from './BrandListItem'

interface brandListProps {
  brandListDatas: brandListType[]
  language: string
}

export default function BrandList({ brandListDatas, language }: brandListProps) {
  const splitKeys =
    language === 'english' ? 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('') : 'ㄱㄴㄷㄹㅁㅂㅅㅇㅈㅊㅋㅌㅍㅎ'.split('')
  const groupedBrands: Record<string, brandListType[]> = splitKeys.reduce(
    (acc, letter) => {
      acc[letter] = []
      return acc
    },
    {} as Record<string, brandListType[]>,
  )

  groupedBrands['0-9'] = []
  groupedBrands['etc'] = []

  brandListDatas.forEach((brand) => {
    //const firstLetter = (brand.englishName ?? '').charAt(0).toUpperCase()

    if (language === 'english') {
      if (/^[A-Z]$/.test(brand.englishInitial)) {
        groupedBrands[brand.englishInitial].push(brand)
      } else if (/^\d$/.test(brand.englishInitial)) {
        groupedBrands['0-9'].push(brand)
      } else {
        groupedBrands['etc'].push(brand)
      }
    } else if (language === 'korean') {
      if (/^[ㄱ-ㅎ]$/.test(brand.koreanInitial)) {
        groupedBrands[brand.koreanInitial].push(brand)
      } else if (/^\d$/.test(brand.koreanInitial)) {
        groupedBrands['0-9'].push(brand)
      } else {
        groupedBrands['etc'].push(brand)
      }
    }
  })

  const sortedKeys = [...splitKeys, '0-9', 'etc']

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
          <ul>{groupedBrands[index]?.map((item) => <BrandListItem key={item.brandCode} brand={item} />)}</ul>
        </div>
      ))}
    </section>
  )
}
