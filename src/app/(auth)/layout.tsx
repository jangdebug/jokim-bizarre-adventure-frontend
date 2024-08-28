import AuthServiceHeader from '@/components/layout/AuthServiceHeader'

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <AuthServiceHeader />
      {children}
    </>
  )
}
