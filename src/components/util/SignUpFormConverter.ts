export function transformToSignupData(formData: signupFormType): signupDataType {
  // 전화번호와 생년월일 조합
  const phone = `${formData.phoneHeader}-${formData.phoneBody}`
  const birth = new Date(`${formData.year}-${formData.month}-${formData.day}`).toISOString()

  // 'on' 값을 boolean으로 변환하는 함수
  const convertToBoolean = (value?: string): boolean => value === 'on'

  return {
    email: `${formData.emailId}@${formData.emailDomain}`,
    password: formData.password,
    name: formData.name,
    birth: birth, // ISO 8601 형식으로 변환된 생년월일
    phone: phone,
    address: '', // 이 값은 formData에 없으니 기본값으로 빈 문자열 설정
    smsAgreement: convertToBoolean(formData.smsAgreement),
    emailAgreement: convertToBoolean(formData.emailAgreement),
    dmAgreement: convertToBoolean(formData.dmAgreement),
    callAgreement: convertToBoolean(formData.callAgreement),
    webUsageRight: convertToBoolean(formData.webUsageRight),
    integratedMemberRight: convertToBoolean(formData.integratedMemberRight),
    infoUsageRight: convertToBoolean(formData.infoUsageRight),
    tomboyInfoUsageRight: convertToBoolean(formData.tomboyInfoUsageRight),
  }
}

export function formDataToSignupFormType(formData: FormData): signupFormType {
  return {
    emailId: formData.get('emailId') as string,
    emailDomain: formData.get('emailDomain') as string,
    password: formData.get('password') as string,
    confirmPassword: formData.get('confirmPassword') as string,
    name: formData.get('name') as string,
    phoneHeader: formData.get('phoneHeader') as string,
    phoneBody: formData.get('phoneBody') as string,
    year: formData.get('year') as string,
    month: formData.get('month') as string,
    day: formData.get('day') as string,
    smsAgreement: formData.get('smsAgreement') as string | undefined,
    emailAgreement: formData.get('emailAgreement') as string | undefined,
    dmAgreement: formData.get('dmAgreement') as string | undefined,
    callAgreement: formData.get('callAgreement') as string | undefined,
    webUsageRight: formData.get('webUsageRight') as string | undefined,
    integratedMemberRight: formData.get('integratedMemberRight') as string | undefined,
    infoUsageRight: formData.get('infoUsageRight') as string | undefined,
    tomboyInfoUsageRight: formData.get('tomboyInfoUsageRight') as string | undefined,
  }
}
