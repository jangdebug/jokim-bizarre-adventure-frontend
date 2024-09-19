import { bottomSizeDatas, footSizeDatas, mySizeData, topSizeDatas } from '@/datas/dummy/mypage/MyRegisterData'
import { mySizeRegisterType, mySizeType, selectSizeType } from '@/types/MyPageTypes'

export async function getMySize() {
  const res = mySizeData as mySizeType
  return res
}

export async function getSelectTopSize() {
  const res = topSizeDatas as selectSizeType[]
  return res
}

export async function getSelectBottomSize() {
  const res = bottomSizeDatas as selectSizeType[]
  return res
}

export async function getSelectFootSize() {
  const res = footSizeDatas as selectSizeType[]
  return res
}

export async function sizeRegistAction(sizeFormData: FormData) {
  const payload: mySizeRegisterType = {
    height: Number(sizeFormData.get('height')) as number,
    weight: Number(sizeFormData.get('weight')) as number,
    topSize: sizeFormData.get('topSize') as string,
    bottomSize: sizeFormData.get('bottomSize') as string,
    footSize: sizeFormData.get('footSize') as string,
    agreement: sizeFormData.get('agreement') === 'on',
  }

  console.log('action payload', payload)

  // const res = await fetch(`${process.env.API_BASE_URL}/api/v1/mypage/size`, {
  //   method: 'POST',
  //   body: JSON.stringify(payload),
  //   headers: {
  //     'Content-Type': 'application/json',
  //   },
  // })

  // console.log(res)
  // if (res.ok) {
  //   return await res.json()
  // }
  return null
}
