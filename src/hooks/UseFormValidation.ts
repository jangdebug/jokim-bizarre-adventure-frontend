import { useState } from 'react'

const validateId = (id: string) => /^[a-zA-Z0-9]+$/.test(id)
const validateDomain = (domain: string) => /^[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(domain)
const validatePassword = (password: string) => {
  const lengthCheck = password.length >= 10
  const combinationCheck =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)|(?=.*[a-z])(?=.*\d)|(?=.*[A-Z])(?=.*\d)|(?=.*[a-z])(?=.*[A-Z])/.test(password)
  const noSpaceCheck = !/\s/.test(password)
  return lengthCheck && combinationCheck && noSpaceCheck
}
const validateConfirmPassword = (password: string, confirmPassword: string) => password === confirmPassword
const validateName = (name: string) => name.length >= 1

export const useFormValidation = () => {
  const [values, setValues] = useState<essenitialFormType>({
    emailId: '',
    emailDomain: '',
    password: '',
    confirmPassword: '',
    name: '',
    phoneHeader: '',
    phoneBody: '',
    isValidPhone: false,
    isOverFourTeen: false,
  })

  const [errors, setErrors] = useState<essenitialFormErrorType>({
    emailId: false,
    emailDomain: false,
    emailDuplicate: false, //이메일 중복때 쓸 거
    password: false,
    confirmPassword: false,
    name: false,
  })

  const [isEmpty, setIsEmpty] = useState<essentialFormEmptyType>({
    emailId: false,
    emailDomain: false,
    password: false,
    confirmPassword: false,
    name: false,
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    console.log(name, value)

    setValues((prev) => ({ ...prev, [name]: value }))

    let isValid = false
    switch (name) {
      case 'emailId':
        isValid = validateId(value)
        break
      case 'emailDomain':
        isValid = validateDomain(value)
        break
      case 'password':
        isValid = validatePassword(value)
        setErrors((prev) => ({ ...prev, confirmPassword: validateConfirmPassword(value, values.confirmPassword) }))
        break
      case 'confirmPassword':
        isValid = validateConfirmPassword(values.password, value)
        break
      case 'name':
        isValid = validateName(value)
        break
      default:
        break
    }
    setErrors((prev) => ({ ...prev, [name]: isValid }))
    setIsEmpty((prev) => ({ ...prev, [name]: value.length === 0 }))
  }

  const handleBlur = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target

    if (value.length === 0) {
      setIsEmpty((prev) => ({ ...prev, [name]: true }))
    }
  }

  return { values, errors, isEmpty, setValues, setErrors, handleChange, handleBlur }
}
