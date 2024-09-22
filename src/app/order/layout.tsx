import OrderHeader from '@/components/layout/OrderHeader'

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <OrderHeader />
      {children}
    </>
  )
}
