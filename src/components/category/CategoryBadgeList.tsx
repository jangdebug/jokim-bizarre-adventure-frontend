import { categoryQuickMenuData } from '@/datas/dummy/category/CategoryQuickMenuData'
import CategoryBadge from './CategoryBadge'

export default function CategoryBadgeList() {
  const categoryQuickMenuBadges: QuickMenuBadgeType[] = categoryQuickMenuData
  return (
    <nav className="bg-[#f8f8f8]">
      <ul className="flex overflow-x-auto px-[24px] gap-[12px] no-scrollbar">
        {categoryQuickMenuBadges.map((item) => (
          <li key={item.id} className="py-[12px]">
            <CategoryBadge categoryBadgeData={item} />
          </li>
        ))}
      </ul>
    </nav>
  )
}
