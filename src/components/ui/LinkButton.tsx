import Link from 'next/link'

export default function LinkButton({
  href,
  bgColor = '#131922',
  content,
}: {
  href: string
  bgColor: string
  content: string
}) {
  return (
    <Link
      href={href}
      className={`w-full h-[48px] bg-[${bgColor}] text-[#fff] flex items-center justify-center text-[14px] tracking-[0.23px] font-[500]`}
    >
      {content}
    </Link>
  )
}
