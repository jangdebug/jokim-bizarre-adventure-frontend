import { notificationData } from '@/datas/dummy/sign-up/SignUpElementDatas'
import React from 'react'

export default function SignUpNotification() {
  const notifications: notificationType[] = notificationData

  return (
    <section className="mt-[20px] px-[24px] pb-[72px]">
      <p className="text-[16px] leading-[48px] font-bold">안내사항</p>
      <ul className="ml-[14px] list-outside marker:text-[6px] list-disc ">
        {notifications.map((notification) => (
          <li
            key={notification.id}
            className="mb-[8px] pl-[4px] text-[12px] leading-[18px] tracking-[-0.3px] text-[#787878]"
          >
            {notification.content}
          </li>
        ))}
      </ul>
    </section>
  )
}
