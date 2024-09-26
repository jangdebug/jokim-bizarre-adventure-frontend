import React from 'react'

export default function PasswordPolicy() {
  return (
    <section className="p-[24px]">
      <div className="flex flex-col gap-3 text-xs text-gray-400">
        <p>회원님의 소중한 정보 보호를 위하여 주기적인 비밀번호 변경을 권장합니다.</p>
        <p>비밀번호는 숮자, 영문 포함 조합하여 10자~20자로 공백없이 설정해주세요.</p>
        <p>
          아이디(이메일주소)와 같은 비밀번호나 주민등록번호, 생일, 학번, 전화번호 등 개인정보와 관련된 숫자, 연속된
          숫자, 동일반복된 숫자 등 다른 사람이 쉽게 알아낼 수 있는 비밀번호는 사용하지 않도록 주의해주세요.
        </p>
      </div>
    </section>
  )
}
