import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { myRegisterDatas } from '@/datas/dummy/mypage/MyRegisterData'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function MyRegister({ agreement }: { agreement: boolean }) {
  const currentURI = usePathname()

  return (
    <div className="px-5 my-5">
      <div className="pb-4 mt-10 border-b border-b-gray-200 flex justify-between">
        <div className="font-bold flex items-center ">
          <Checkbox name="agreement" id="agree" defaultChecked={agreement} />
          <label className="mx-3" htmlFor="agree">
            개인정보 수집 및 이용 동의 <span className="text-orange-500">(필수)</span>
          </label>
        </div>
        <Link href={'/agreeInfo'} className="flex items-center">
          <Image
            src={'https://cdn-mo.sivillage.com/mo/assets/comm/image/05Icon32PxThinArrowRight.svg'}
            width={20}
            height={20}
            alt={'개인정보 수집 및 이용 동의 상세 보기'}
            priority
            style={{ width: 'auto', height: 'auto' }}
          />
        </Link>
      </div>
      <p className="my-10 text-xs text-gray-400">
        * 수집하는 개인정보 항목, 수집 및 이용목적, 보유 및 이용기간에 동의합니다.
      </p>

      <div className="pb-12">
        {myRegisterDatas &&
          myRegisterDatas.map((data) =>
            currentURI && data.currentLink === currentURI ? (
              <Button key={data.id} className="w-full h-12">
                {data.registerName}
              </Button>
            ) : null,
          )}
      </div>
    </div>
  )
}
