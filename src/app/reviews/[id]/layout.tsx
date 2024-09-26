import ReviewPageHeader from '@/components/review/ReviewPageHeader'

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <ReviewPageHeader />
      {children}
    </>
  )
}
