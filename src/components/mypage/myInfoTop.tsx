import { myInfoType } from '@/types/MyPageTypes'
import React from 'react'
import MyInfoMain from './myInfoTop/myInfoMain'
import { getMyInfoData } from '@/actions/mypage/getMyInfoData'
import MyInfoWrap from './myInfoTop/myInfoWrap'
import MyInfoBox from './myInfoTop/myInfoBox'

export default async function MyInfoTop() {
  const myInfoData: myInfoType = await getMyInfoData()

  return (
    <>
      <div className="px-6 py-8">
        <MyInfoMain myInfoData={myInfoData} />
        <MyInfoWrap />
        <MyInfoBox myInfoData={myInfoData} />
      </div>
    </>
  )
}
