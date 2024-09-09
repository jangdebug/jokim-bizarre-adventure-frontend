export default function LetterButton({
  letter,
  isSelected,
  onClick,
}: {
  letter: string
  isSelected: boolean
  onClick: (letter: string) => void
}) {
  return (
    <li
      onClick={() => onClick(letter)}
      className={`shrink-0 w-[32px] h-[32px] border cursor-pointer flex items-center justify-center ${
        isSelected ? 'border-[#333]' : ''
      }`}
    >
      {letter}
    </li>
  )
}
