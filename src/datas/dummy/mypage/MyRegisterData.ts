import { myRegisterType, mySizeType, selectSizeType } from '@/types/MyPageTypes'

//My Beauty & Size Tab Datas
export const myRegisterDatas: myRegisterType[] = [
  {
    id: 1,
    registerName: '나의 사이즈 등록',
    currentLink: '/mypage/beautysize',
  },
  {
    id: 2,
    registerName: '나의 뷰티정보 등록',
    currentLink: '/mypage/beautysize/beauty',
  },
]

//My Size Data
export const mySizeData: mySizeType = {
  height: 180,
  topSize: 'XS이상',
  bottomSize: '23이하',
  agreement: false,
}

//Top Size Data
export const topSizeDatas: selectSizeType[] = [
  {
    id: 1,
    option: 'XXS이하',
  },
  {
    id: 2,
    option: 'XS이상',
  },
]

//Top Size Data
export const bottomSizeDatas: selectSizeType[] = [
  {
    id: 1,
    option: '23이하',
  },
  {
    id: 2,
    option: '24이상',
  },
]

//Top Size Data
export const footSizeDatas: selectSizeType[] = [
  {
    id: 1,
    option: '150이하',
  },
  {
    id: 2,
    option: '160이상',
  },
]
