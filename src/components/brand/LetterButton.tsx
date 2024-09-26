export default function LetterButton({
  letter,
  isSelected,
  onClick,
  className,
}: {
  letter: string
  isSelected: boolean
  onClick: (letter: string) => void
  className?: string
}) {
  return (
    <li
      onClick={() => onClick(letter)}
      className={`shrink-0  border cursor-pointer flex items-center justify-center ${
        isSelected ? 'border-[#333]' : ''
      } ${className}`}
    >
      {letter}
    </li>
  )
}
