import { myRegisterType, mySizeOptionType, mySizeType, selectSizeType } from '@/types/MyPageTypes'

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

//My Size Option Datas
export const mySizeOptionDatas: mySizeOptionType[] = [
  {
    id: 1,
    optionName: '키',
    optionNameEn: 'height',
    optionType: 'cm',
  },
  {
    id: 2,
    optionName: '몸무개',
    optionNameEn: 'weight',
    optionType: 'kg',
  },
  {
    id: 3,
    optionName: '평소 상의 사이즈',
    optionNameEn: 'topSize',
  },
  {
    id: 4,
    optionName: '평소 하의 사이즈',
    optionNameEn: 'bottomSize',
  },
  {
    id: 5,
    optionName: '평소 신발 사이즈',
    optionNameEn: 'footSize',
  },
]

//My Size Data
export const mySizeData: mySizeType = {
  id: 1,
  height: 180,
  topSize: 'XL',
  bottomSize: '23이하',
}

//Top Size Option Data
export const topSizeOptionDatas: selectSizeType[] = [
  {
    id: 1,
    option: 'XXS이하',
  },
  {
    id: 2,
    option: 'XS이상',
  },
]

//Top Size Option Data
export const bottomSizeOptionDatas: selectSizeType[] = [
  {
    id: 1,
    option: '23이하',
  },
  {
    id: 2,
    option: '24이상',
  },
]

//Top Size Option Data
export const footSizeOptionDatas: selectSizeType[] = [
  {
    id: 1,
    option: '150이하',
  },
  {
    id: 2,
    option: '160이상',
  },
]
