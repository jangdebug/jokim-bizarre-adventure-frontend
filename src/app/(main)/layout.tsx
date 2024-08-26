export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <header>MAINHEADER</header>
      {children}
    </>
  )
}
