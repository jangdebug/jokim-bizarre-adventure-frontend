'use client'
import { useParams } from 'next/navigation'

export default function Event() {
  const { id } = useParams()

  return (
    <div>
      <h1>Event Page</h1>
      <p>id : {id}</p>
    </div>
  )
}
