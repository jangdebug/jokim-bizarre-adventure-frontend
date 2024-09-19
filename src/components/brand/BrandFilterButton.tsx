export default function BrandFilterButton({
  value,
  selectedValue,
  onSelect,
  label,
}: {
  value: 'english' | 'korean'
  selectedValue: 'english' | 'korean'
  onSelect: (value: 'english' | 'korean') => void
  label: string
}) {
  return (
    <label>
      <input
        type="radio"
        name="filter"
        value={value}
        checked={selectedValue === value}
        onChange={() => onSelect(value)}
        className="hidden"
      />
      <span
        onClick={() => onSelect(value)}
        className={`whitespace-nowrap cursor-pointer ${selectedValue === value ? 'text-[#000] font-bold' : 'text-[#929292]'}`}
      >
        {label}
      </span>
    </label>
  )
}
