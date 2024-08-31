import { Input } from '../ui/input'

interface InputWithClearProps {
  className?: string
  name?: string
  type?: string
  value?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  onClear?: () => void
  onBlur?: (e: React.ChangeEvent<HTMLInputElement>) => void
  disabled?: boolean
  placeholder?: string
}

const InputWithClear: React.FC<InputWithClearProps> = ({
  className,
  name,
  type = 'text',
  value,
  onChange,
  onClear,
  onBlur,
  disabled = false,
  placeholder,
}) => {
  return (
    <div className={`relative ${className}`}>
      <Input
        className={`${disabled ? '' : 'pr-[28px]'} input-no-spinner`}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        disabled={disabled}
        placeholder={placeholder}
        onBlur={onBlur}
      />
      {value && !disabled && (
        <button
          type="button"
          onClick={onClear}
          className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-600"
        >
          &times;
        </button>
      )}
    </div>
  )
}

export default InputWithClear
