export default function Layout({
  children,
  summary,
  review,
}: Readonly<{
  children: React.ReactNode
  summary: React.ReactNode
  review: React.ReactNode
}>) {
  return (
    <>
      {summary}
      {children}
      {review}
    </>
  )
}
