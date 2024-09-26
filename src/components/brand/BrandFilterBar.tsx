'use client'
import { useState } from 'react'
import LetterButton from './LetterButton'
import BrandFilterButton from './BrandFilterButton'
import Link from 'next/link'

export default function BrandFilterBar() {
  const [selected, setSelected] = useState<'english' | 'korean'>('english')
  const [selectedLetter, setSelectedLetter] = useState<string>('A')

  const englishLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
  const koreanLetters = 'ㄱㄴㄷㄹㅁㅂㅅㅇㅈㅊㅋㅌㅍㅎ'.split('')

  const handleSelect = (value: 'english' | 'korean') => {
    if (value === 'english') {
      setSelectedLetter(() => 'A')
    } else if (value === 'korean') {
      setSelectedLetter(() => 'ㄱ')
    }
    setSelected(() => value)
  }

  const handleLetterClick = (letter: string) => {
    setSelectedLetter(() => letter)
    console.log(letter)
  }

  return (
    <section className="h-[56px] ml-[24px] mb-[8px] flex">
      <div className="w-full flex items-center gap-[15px] mr-[5px] leading-[20px] text-[14px] text-[#929292]">
        <BrandFilterButton value="english" selectedValue={selected} onSelect={handleSelect} label="A-Z" />
        <BrandFilterButton value="korean" selectedValue={selected} onSelect={handleSelect} label="ㄱ-ㅎ" />

        <ul className="flex gap-[4px] pr-[24px] overflow-x-auto no-scrollbar text-[#333]">
          {selected === 'english' &&
            englishLetters.map((item) => (
              <Link key={item} href={`#${item}`}>
                <LetterButton
                  className="w-[32px] h-[32px]"
                  letter={item}
                  isSelected={selectedLetter === item}
                  onClick={handleLetterClick}
                />
              </Link>
            ))}
          {selected === 'korean' &&
            koreanLetters.map((item) => (
              <LetterButton
                className="w-[32px] h-[32px]"
                key={item}
                letter={item}
                isSelected={selectedLetter === item}
                onClick={handleLetterClick}
              />
            ))}
          <Link href={`#0-9`}>
            <LetterButton
              className="w-[32px] h-[32px]"
              letter={'0~9'}
              isSelected={selectedLetter === '0~9'}
              onClick={handleLetterClick}
            />
          </Link>
          <Link href={`#etc`}>
            <LetterButton
              className="w-[32px] h-[32px]"
              letter={'etc'}
              isSelected={selectedLetter === 'etc'}
              onClick={handleLetterClick}
            />
          </Link>
        </ul>
      </div>
    </section>
  )
}
