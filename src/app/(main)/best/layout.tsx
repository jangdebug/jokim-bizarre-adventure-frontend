import BestFilterMenu from '@/components/layout/BestFilterMenu'
import BestHidingTab from '@/components/layout/BestHidingTab'
import BestTabMenu from '@/components/layout/BestTabMenu'

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <BestTabMenu />
      <BestFilterMenu />
      <BestHidingTab />
      {children}
    </>
  )
}
