import SearchIcon from '@/components/icons/brand/SearchIcon'
import { Button } from '@/components/ui/button'

export default function MyOrderSearch() {
  return (
    <section className="px-[24px] py-[12px] flex justify-start items-center gap-3">
      <div>
        <SearchIcon />
      </div>
      <Button variant={'outline'} className="border-black rounded-md">
        <span className="text-xs font-bold">2024.08.11 ~ 2024.09.11</span>
      </Button>
    </section>
  )
}
