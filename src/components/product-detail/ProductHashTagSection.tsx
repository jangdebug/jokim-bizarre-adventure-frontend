import Link from 'next/link'

interface HashTagType {
  hashTagId: number
  value: string
}

export default function ProductHashTagSection({ hashTagList }: { hashTagList: HashTagType[] }) {
  return (
    <section className="p-[24px] bg-[#f0f0f0]">
      <ul className="flex flex-wrap">
        {hashTagList.map((item) => (
          <li
            key={item.hashTagId}
            className="shrink-0 flex items-center h-[40px] bg-white m-[4px] px-[16px] border border-[#e0e0e0]"
          >
            <Link href={'#'} className="text-[14px] tracking-[0.8px]">
              #{item.value}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}
