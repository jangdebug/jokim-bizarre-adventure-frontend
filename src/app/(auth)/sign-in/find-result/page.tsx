import LinkButton from '@/components/ui/LinkButton'

export default function FindResult({ searchParams }: { searchParams: { maskedId?: string; loginId?: string } }) {
  const { maskedId, loginId } = searchParams

  return (
    <main className="min-h-[calc(100vh-112px)] p-[28px_24px_112px]">
      {maskedId && !loginId && (
        <section>
          <p className="flex flex-col gap-[8px]">
            <span className="text-[20px] leading-[28px] font-bold">아이디 찾기 결과</span>
            <span className="text-[14px] leading-[20px] text-[#404040]">
              입력하신 정보와 일치하는 회원정보를 확인하세요
            </span>
          </p>

          <p className="mt-[40px] py-[16px] bg-[#f8f8f8] text-[14px] leading-[24px] text-center">{maskedId}</p>

          <div className="flex flex-col gap-[8px] mt-[28px]">
            <LinkButton href={'/sign-in'} bgColor="#131922" content="로그인" />
            <LinkButton href={'/sign-in/find-account?target=password'} bgColor="#787878" content="비밀번호 찾기" />
          </div>
        </section>
      )}

      {loginId && !maskedId && (
        <section>
          <p className="text-[14px] leading-[20px] text-[#404040]">
            회원가입 시 등록하신 아이디(이메일 주소)로
            <br />
            임시비밀번호를 발송하였습니다.
          </p>

          <p className="mt-[24px] py-[16px] px-[20px] flex flex-col text-[14px] leading-[22px] text-[#404040] bg-[#f8f8f8]">
            <span>아이디(이메일주소) {loginId}</span>
            <span>
              임시 비밀번호로 로그인 하신 후 마이페이지 {'>'} 나의 정보관리 {'>'} 비밀번호 변경에서 비밀번호를
              수정해주세요.
            </span>
          </p>

          <div className="flex flex-col gap-[8px] mt-[28px]">
            <LinkButton href={'/sign-in'} bgColor="#131922" content="로그인" />
          </div>
        </section>
      )}
    </main>
  )
}
