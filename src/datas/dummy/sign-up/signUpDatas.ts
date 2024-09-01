export const membershipDescriptionData: membershipDescriptionType[] = [
  {
    id: 1,
    title: 'S.I 포인트 적립',
    description: '온/오프라인에서 제품 구매시 적립가능한 포인트 혜택',
  },
  {
    id: 2,
    title: '회원 등급별 혜택',
    description: '포인트 추가 적립, 할인, 생일혜택 등 다양한 등급혜택',
  },
  {
    id: 3,
    title: '다양한 이벤트',
    description: '다양한 이벤트와 쇼핑혜택 소식 제공',
  },
]

export const notificationData: notificationType[] = [
  {
    id: 1,
    content:
      '본인인증 시 사용한 휴대폰 번호와 등록된 정보가 상이할 경우, 본인인증 시 등록된 휴대폰 번호로 변경될 수 있습니다.',
  },
  {
    id: 2,
    content: '회원혜택은 당사의 사정에 따라 변경될 수 있습니다. (구매시 포인트 적립포함)',
  },
  {
    id: 3,
    content: '문의 : 신세계인터내셔날 고객센터(유료) 1644-4490',
  },
]

export const phoneHeaderData: phoneHeaderType[] = [
  {
    name: '010',
    value: '010',
  },
  {
    name: '016',
    value: '016',
  },
  {
    name: '017',
    value: '017',
  },
  {
    name: '018',
    value: '018',
  },
  {
    name: '019',
    value: '019',
  },
]

export const emailDomainData: emailDomainType[] = [
  {
    name: 'naver.com',
    value: 'naver.com',
  },
  {
    name: 'gmail.com',
    value: 'gmail.com',
  },
  {
    name: 'daum.net',
    value: 'daum.net',
  },
  {
    name: 'nate.com',
    value: 'nate.com',
  },
]

export const marketingAgreementsData: marketingAgreementType[] = [
  {
    title: 'SMS',
    description: 'smsAgreement',
    agreementState: false,
  },
  {
    title: 'E-mail',
    description: 'emailAgreement',
    agreementState: false,
  },
  {
    title: 'DM',
    description: 'dmAgreement',
    agreementState: false,
  },
  {
    title: 'CALL',
    description: 'callAgreement',
    agreementState: false,
  },
]

export const rightAgreementsData: rightAgreementsType[] = [
  {
    title: '신세계인터내셔날 웹사이트 이용약관',
    description: 'webUsageRight',
    isEssential: true,
    agreementState: false,
  },
  {
    title: '신세계인터내셔날 통합회원 이용약관 ',
    description: 'integratedMemberRight',
    isEssential: true,
    agreementState: false,
  },
  {
    title: '서비스 제공을 위한 개인정보 수집 및 이용동의 ',
    description: 'infoUsageRight',
    isEssential: true,
    agreementState: false,
  },
  {
    title: '통합 멤버십 서비스 제공을 위한 신세계톰보이 정보 제공 동의 ',
    description: 'tomboyInfoUsageRight',
    isEssential: false,
    agreementState: false,
  },
]
