export default function EventDetail({ params }: { params: { id: string } }) {
  return (
    <div>
      <h1>Event Page</h1>
      <p>id : {params.id}</p>
    </div>
  )
}
