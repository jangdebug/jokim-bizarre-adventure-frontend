import MainHeader from '@/components/layout/MainHeader'
import MainStickeyHeader from '@/components/layout/MainStickeyHeader'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <MainHeader />
      <MainStickeyHeader />
      {children}
    </>
  )
}
