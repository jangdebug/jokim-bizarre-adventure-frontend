import Image from 'next/image'
import Link from 'next/link'

export default function DummySubCategoryBanner() {
  return (
    <div className=" px-[20px] pt-[20px] pb-[16px]">
      <Link href={'#'}>
        <div className="relative">
          <Image
            src={
              'https://image.sivillage.com/upload/C00001/s3/dspl/banner/90/384/00/240800000504384_20240830094959.jpg'
            }
            alt="categoryBannerImage"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: '100%', height: 'auto' }}
          />
          <span className="z-[2] absolute left-[12px] bottom-[12px] text-[#fff] whitespace-nowrap text-ellipsis flex flex-col gap-[4px]">
            <span className="text-[12px] leading-[15px]">최대 30% 페이백 & 추석기획세트</span>
            <span className="text-[14px] leading-[18px] font-bold">S.I.BEAUTY 한가위 선물대전</span>
          </span>
          <div className="w-full h-full bg-black  absolute top-0 left-0 opacity-[0.24]"></div>
        </div>
      </Link>
    </div>
  )
}
