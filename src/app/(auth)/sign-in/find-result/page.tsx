import FindIdResultSection from '@/components/find-account/FindIdResultSection'
import FindPasswordResultSection from '@/components/find-account/FindPasswordResultSection'
import LinkButton from '@/components/ui/LinkButton'

export default function FindResult({ searchParams }: { searchParams: { maskedId?: string; loginId?: string } }) {
  const { maskedId, loginId } = searchParams

  return (
    <main className="min-h-[calc(100vh-112px)] p-[28px_24px_112px]">
      {maskedId && !loginId && <FindIdResultSection maskedId={maskedId} />}
      {loginId && !maskedId && <FindPasswordResultSection loginId={loginId} />}
    </main>
  )
}
