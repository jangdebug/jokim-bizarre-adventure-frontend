import LinkButton from '../ui/LinkButton'

export default function FindPasswordResultSection({ loginId }: { loginId: string }) {
  return (
    <section>
      <p className="text-[14px] leading-[20px] text-[#404040]">
        회원가입 시 등록하신 아이디(이메일 주소)로
        <br />
        임시비밀번호를 발송하였습니다.
      </p>

      <p className="mt-[24px] py-[16px] px-[20px] flex flex-col text-[14px] leading-[22px] text-[#404040] bg-[#f8f8f8]">
        <span>아이디(이메일주소) {loginId}</span>
        <span>
          임시 비밀번호로 로그인 하신 후 마이페이지 {'>'} 나의 정보관리 {'>'} 비밀번호 변경에서 비밀번호를 수정해주세요.
        </span>
      </p>

      <div className="flex flex-col gap-[8px] mt-[28px]">
        <LinkButton href={'/sign-in'} bgColor="#131922" content="로그인" />
      </div>
    </section>
  )
}
