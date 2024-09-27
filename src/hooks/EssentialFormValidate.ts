export const validateId = (id: string) => /^[a-zA-Z0-9]+$/.test(id)
export const validateDomain = (domain: string) => /^[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(domain)
export const validatePassword = (password: string) => {
  const lengthCheck = password.length >= 10
  const combinationCheck =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)|(?=.*[a-z])(?=.*\d)|(?=.*[A-Z])(?=.*\d)|(?=.*[a-z])(?=.*[A-Z])/.test(password)
  const noSpaceCheck = !/\s/.test(password)
  return lengthCheck && combinationCheck && noSpaceCheck
}
export const validateConfirmPassword = (password: string, confirmPassword: string) => password === confirmPassword
export const validateName = (name: string) => name.length >= 1

export const validateForm = (convertedForm: signupFormType): boolean => {
  const {
    emailId,
    emailDomain,
    password,
    confirmPassword,
    name,
    isOverFourTeen,
    webUsageRight,
    integratedMemberRight,
    infoUsageRight,
  } = convertedForm
  if (
    !validateId(emailId) ||
    !validateDomain(emailDomain) ||
    !validatePassword(password) ||
    !validateConfirmPassword(password, confirmPassword) ||
    !validateName(name) ||
    !isOverFourTeen ||
    !webUsageRight ||
    !integratedMemberRight ||
    !infoUsageRight
  ) {
    return false
  } else {
    return true
  }
}
