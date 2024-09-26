import FindAccountDivider from '@/components/find-account/FindAccountDivider'
import FindAccountForm from '@/components/find-account/FindAccountForm'
import FindAccountNavigation from '@/components/find-account/FindAccountNavigation'
import { Button } from '@/components/ui/button'
import LinkButton from '@/components/ui/LinkButton'
import { Metadata } from 'next'
import Link from 'next/link'
import { redirect } from 'next/navigation'

export const metadata: Metadata = {
  title: 'ID/PW 찾기',
}

function maskEmail(email: string) {
  const [localPart, domainPart] = email.split('@')

  const maskedLocalPart = localPart.slice(0, 3) + '*'.repeat(localPart.length - 3)
  const maskedDomainPart = domainPart.slice(0, 2) + '*'.repeat(domainPart.indexOf('.'))

  return `${maskedLocalPart}@${maskedDomainPart}`
}

export default function FindAccount({ searchParams }: { searchParams: { target: 'id' | 'password' } }) {
  const handleFind = async (findFormData: FormData) => {
    'use server'

    console.log('data', findFormData)

    const tempMail: string = 'test@test.com'

    if (searchParams.target === 'id') {
      // 아이디를 찾으면 해당 아이디 값을 부분 암호화 하거나 해서 find-result 로 리다이렉트
      // 혹은 사용자가 없다면 alert

      const maskedEmail = maskEmail(tempMail)

      redirect(`/sign-in/find-result?maskedId=${maskedEmail}`)
    } else if (searchParams.target === 'password') {
      //이메일로 임시 비밀번호를 보내고 result 로 리다이렉트
      redirect(`/sign-in/find-result?loginId=${tempMail}`)
    }
  }

  return (
    <>
      <FindAccountNavigation target={searchParams.target} />
      <main className="min-h-[calc(100vh-112px)] px-[24px] pb-[112px]">
        {/* 회원으로 찾기 */}
        <section>
          <form className="flex flex-col mt-[40px]" action={handleFind}>
            <FindAccountForm findType={searchParams.target} />
            <Button type="submit" variant={'grey'} size={'auth'} className="mt-[16px]">
              {searchParams.target === 'id' ? '회원정보로 찾기' : '임시비밀번호 발송'}
            </Button>
          </form>
        </section>

        <FindAccountDivider />

        <section className="flex flex-col gap-[8px]">
          <LinkButton href={'#'} bgColor="#131922" content="휴대폰 인증으로 찾기" />
          <LinkButton href={'#'} bgColor="#131922" content="아이핀 인증으로 찾기" />
        </section>
      </main>
    </>
  )
}
