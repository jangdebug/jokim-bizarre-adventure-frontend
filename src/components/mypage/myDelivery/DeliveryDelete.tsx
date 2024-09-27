import { deleteDelivery, getMyDelivery } from '@/actions/mypage/getMyDeliveryDatas'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/DialogOverlay'
import { deliveryType } from '@/types/MyPageTypes'

interface deleteProps {
  addressCode: string
  addressName: string
  changeList: React.Dispatch<React.SetStateAction<deliveryType[]>>
  token: string | undefined
}

export default function DeliveryDelete({ addressCode, addressName, changeList, token }: deleteProps) {
  const handleDeleteDelivery = async () => {
    const res = await deleteDelivery(addressCode, token)
    if (!res) {
      console.log('Failed Delelte Delivery')
      return
    } else {
      const changeListed: deliveryType[] = await getMyDelivery(token)
      changeList(changeListed)
    }
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <span>삭제</span>
      </DialogTrigger>

      <DialogContent className="w-2/3">
        <DialogHeader>
          <DialogTitle>{addressName}</DialogTitle>
          <DialogDescription>배송지를 삭제하시겠습니까?</DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose asChild>
            <Button type="button" onClick={() => handleDeleteDelivery()}>
              삭제
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
