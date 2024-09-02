import MainHeader from '@/components/layout/MainHeader'

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <MainHeader />
      {children}
    </>
  )
}
