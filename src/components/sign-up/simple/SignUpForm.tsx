'use client'
import { useState } from 'react'
import EssentialSignUpField from './EssentialSignUpField'
import Divider from '@/components/ui/Divider'
import OptionalSignUpField from './OptionalSignUpField'
import RightsSignUpField from './RightsSignUpField'
import { formDataToSignupFormType, transformToSignupData } from '@/components/util/SignUpFormConverter'
import { useRouter } from 'next/navigation'
import { validateForm } from '@/hooks/EssentialFormValidate'
import { postNewUser } from '@/actions/auth/userData'
import CommonModal from '@/components/ui/CommonModal'

export default function SignUpForm() {
  const [modalVisible, setModalVisible] = useState(false)
  const [modalMessage, setModalMessage] = useState<string | null>(null)
  const router = useRouter()

  const handleSignUp = async (simpleSignUpFormData: FormData) => {
    const convertedForm = formDataToSignupFormType(simpleSignUpFormData)

    if (!validateForm(convertedForm)) {
      setModalMessage('입력정보를 확인하세요')
      setModalVisible(true)
    } else {
      const formattedData = transformToSignupData(convertedForm)

      const res = await postNewUser(formattedData)
      if (res.code === 200) {
        setModalMessage('회원가입이 완료되었습니다.')
        setModalVisible(true)
        setTimeout(() => {
          router.push('/sign-in')
        }, 2000)
      } else {
        setModalMessage(res.message)
        setModalVisible(true)
      }
    }
  }

  const closeModal = () => {
    setModalVisible(false)
    setModalMessage(null)
  }

  return (
    <div>
      {modalVisible && modalMessage && <CommonModal message={modalMessage} onClose={closeModal} />}

      <form action={handleSignUp}>
        <EssentialSignUpField />
        <Divider />
        <OptionalSignUpField />
        <Divider />
        <RightsSignUpField />
      </form>
    </div>
  )
}
