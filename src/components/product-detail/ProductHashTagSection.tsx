interface ProductHashTag {
  id: number
  tagId: number
  targetProductId: number
  title: string
}

export default function ProductHashTagSection({ productId }: { productId: number }) {
  return <section className="p-[24px] bg-[#f0f0f0]"></section>
}
