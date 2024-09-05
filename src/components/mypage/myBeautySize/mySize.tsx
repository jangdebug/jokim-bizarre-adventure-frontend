'use client'

import { myRegisterDatas, mySizeOptionDatas } from '@/datas/dummy/mypage/MyRegisterData'
import React, { useState } from 'react'
import MySizeInput from './mySizeInput'
import MySizeSelect from './mySizeSelect'
import { mySizeType, selectSizeType } from '@/types/MyPageTypes'
import MyRegister from '../myRegister'

interface beautySizeType {
  mySizeData: mySizeType
  topSizeOptionDatas: selectSizeType[]
  bottomSizeOptionDatas: selectSizeType[]
  footSizeOptionDatas: selectSizeType[]
}

export default function MySize({
  mySizeData,
  topSizeOptionDatas,
  bottomSizeOptionDatas,
  footSizeOptionDatas,
}: beautySizeType) {
  //   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  //     e.preventDefault()
  //     const formData = new FormData(e.currentTarget)
  //     const result = Object.fromEntries(formData)
  //     console.log(result)
  //   }

  const [inputValues, setInputValues] = useState<mySizeType>({
    id: mySizeData.id,
    height: mySizeData.height,
    weight: mySizeData.weight,
    topSize: mySizeData.topSize,
    bottomSize: mySizeData.bottomSize,
    footSize: mySizeData.footSize,
  })

  return (
    <form>
      {/* <form onSubmit={handleSubmit}> */}
      <div className="w-11/12 m-auto my-10">
        <ul>
          {mySizeOptionDatas &&
            mySizeOptionDatas.map((option) => (
              <li key={option.id} className="flex items-center my-3">
                <p className="w-1/3">{option.optionName}</p>
                {option.optionNameEn === 'height' ? (
                  <MySizeInput mySizeData={inputValues.height} optionType={option.optionType} />
                ) : option.optionNameEn === 'weight' ? (
                  <MySizeInput mySizeData={inputValues.weight} optionType={option.optionType} />
                ) : option.optionNameEn === 'topSize' ? (
                  <MySizeSelect
                    mySizeData={inputValues.topSize}
                    setInputValues={setInputValues}
                    selectOptionDatas={topSizeOptionDatas}
                  />
                ) : option.optionNameEn === 'bottomSize' ? (
                  <MySizeSelect
                    mySizeData={inputValues.bottomSize}
                    setInputValues={setInputValues}
                    selectOptionDatas={bottomSizeOptionDatas}
                  />
                ) : option.optionNameEn === 'footSize' ? (
                  <MySizeSelect
                    mySizeData={inputValues.footSize}
                    setInputValues={setInputValues}
                    selectOptionDatas={footSizeOptionDatas}
                  />
                ) : null}
              </li>
            ))}
        </ul>
      </div>

      <MyRegister registerData={myRegisterDatas} inputValues={inputValues} />
    </form>
  )
}
