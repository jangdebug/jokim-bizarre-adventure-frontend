import LinkButton from '../ui/LinkButton'

export default function FindIdResultSection({ maskedId }: { maskedId: string }) {
  return (
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
  )
}
