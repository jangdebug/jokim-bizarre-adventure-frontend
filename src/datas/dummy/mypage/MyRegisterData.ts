import { myRegisterType, mySizeType, selectSizeType } from '@/types/MyPageTypes'

//My Beauty & Size Tab Datas
export const myRegisterDatas: myRegisterType[] = [
  {
    id: 1,
    registerName: '나의 사이즈 등록',
    modifyName: '나의 사이즈 수정',
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
    option: 'XS',
  },
  {
    id: 3,
    option: 'S',
  },
  {
    id: 4,
    option: 'M',
  },
  {
    id: 5,
    option: 'L',
  },
  {
    id: 6,
    option: 'XL',
  },
  {
    id: 7,
    option: 'XXL이상',
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
    option: '24',
  },
  {
    id: 3,
    option: '25',
  },
  {
    id: 4,
    option: '26',
  },
  {
    id: 5,
    option: '27',
  },
  {
    id: 6,
    option: '28',
  },
  {
    id: 7,
    option: '29',
  },
  {
    id: 8,
    option: '30',
  },
  {
    id: 9,
    option: '31',
  },
  {
    id: 10,
    option: '32',
  },
  {
    id: 11,
    option: '33',
  },
  {
    id: 12,
    option: '34',
  },
  {
    id: 13,
    option: '35',
  },
  {
    id: 14,
    option: '36',
  },
  {
    id: 15,
    option: '37',
  },
  {
    id: 16,
    option: '38이상',
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
    option: '160',
  },
  {
    id: 3,
    option: '170',
  },
  {
    id: 4,
    option: '180',
  },
  {
    id: 5,
    option: '190',
  },
  {
    id: 6,
    option: '200',
  },
  {
    id: 7,
    option: '210',
  },
  {
    id: 8,
    option: '220',
  },
  {
    id: 9,
    option: '225',
  },
  {
    id: 10,
    option: '230',
  },
  {
    id: 11,
    option: '235',
  },
  {
    id: 12,
    option: '240',
  },
  {
    id: 13,
    option: '250',
  },
  {
    id: 14,
    option: '255',
  },
  {
    id: 15,
    option: '260',
  },
  {
    id: 16,
    option: '265',
  },
  {
    id: 17,
    option: '270',
  },
  {
    id: 18,
    option: '275',
  },
  {
    id: 19,
    option: '280',
  },
  {
    id: 20,
    option: '285이상',
  },
]
