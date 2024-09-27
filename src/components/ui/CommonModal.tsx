import { Button } from './button'

export default function CommonModal({ message, onClose }: { message: string; onClose: () => void }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-[70]">
      <div className="bg-white p-6 text-center w-[60%]">
        <p className="mb-4">{message}</p>
        <Button onClick={onClose} className="w-full">
          확인
        </Button>
      </div>
    </div>
  )
}
