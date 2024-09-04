import ProductCard from './ProductCard'

export default function ProductList() {
  // 상품 리스트 데이터 fetch
  return (
    <>
      <ul className="grid grid-cols-2 w-full gap-x-2 px-[24px]">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </ul>
    </>
  )
}
