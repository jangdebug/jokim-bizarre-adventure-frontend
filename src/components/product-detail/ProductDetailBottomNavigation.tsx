import { Button } from '../ui/button'

export default function ProductDetailBottomNavigation() {
  // 버튼 눌렀을 때 생기는 모달 및 같은 버튼 두번 눌렸을 때 로직 처리
  return (
    <nav className="fixed bottom-0 left-0 h-[56px] w-full z-[55]">
      <ul className="flex items-center justify-between w-full h-full">
        <li className="w-full h-full">
          <Button className="bg-[#787878]" size={'full'}>
            쇼핑백
          </Button>
        </li>
        <li className="w-full h-full">
          <Button size={'full'}>쇼핑백</Button>
        </li>
      </ul>
    </nav>
  )
}
