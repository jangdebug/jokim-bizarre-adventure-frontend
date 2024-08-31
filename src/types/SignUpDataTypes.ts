interface membershipDescriptionType {
  id: number
  title: string
  description: string
}

interface notificationType {
  id: number
  content: string
}

interface phoneHeaderType {
  name: string
  value: string
}

interface emailDomainType {
  name: string
  value: string
}

interface signUpUserType {
  emailId: string
  emailDomain: string
  password: string
  name: string
  phoneHeader: string
  phoneBody: string
  isValidPhone: boolean
  isOverFourTeen: string
}
interface essenitialFormType {
  emailId: string
  emailDomain: string
  password: string
  confirmPassword: string
  name: string
  phoneHeader: string
  phoneBody: string
  isValidPhone: boolean
  isOverFourTeen: boolean
}

interface essenitialFormErrorType {
  emailId: boolean
  emailDomain: boolean
  emailDuplicate: boolean //이메일 중복때 쓸 거
  password: boolean
  confirmPassword: boolean
  name: boolean
}

interface essentialFormEmptyType {
  emailId: boolean
  emailDomain: boolean
  password: boolean
  confirmPassword: boolean
  name: boolean
}
