import Link from 'next/link'

export default function FindAccountNavigation({ target }: { target: string }) {
  let isSelected = true
  return (
    <nav className={` mb-[24px] z-10 bg-white flex border-b border-[#e0e0e0] h-[48px]`}>
      <Link
        href={'/sign-in/find-account?target=id'}
        className={`w-full flex items-center justify-center text-[16px] tracking-[-0.1px]
            ${target === 'id' ? 'border-b-2 border-[#141a23] font-[500] text-[#141a23]' : 'text-[#929292]'}
            `}
      >
        아이디 찾기
      </Link>
      <Link
        href={'/sign-in/find-account?target=password'}
        className={`w-full flex items-center justify-center text-[16px] tracking-[-0.1px]
            ${target === 'password' ? 'border-b-2 border-[#141a23] font-[500] text-[#141a23]' : 'text-[#929292]'}
        `}
      >
        비밀번호 찾기
      </Link>
    </nav>
  )
}
