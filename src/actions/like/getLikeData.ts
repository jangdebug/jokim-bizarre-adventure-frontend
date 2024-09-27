export async function changeLikeAction(isLike: boolean, type: string, targetId: string, token: string) {
  if (isLike) {
    const res = await fetch(`${process.env.API_BASE_URL}/v1/wishlist/${type}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        brandCode: targetId,
      }),
    })

    if (!res.ok) {
      throw new Error(`Error: ${res.statusText}`)
    }
    const data = await res.json()
    return data
  }

  if (!isLike) {
    const res = await fetch(`${process.env.API_BASE_URL}/v1/wishlist/${type}/${targetId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })

    // 추가적인 응답 처리
    if (!res.ok) {
      throw new Error(`Error: ${res.statusText}`)
    }
    const data = await res.json()
    return data
  }

  return null
}
