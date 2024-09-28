// review server actions
export async function getReviewCodeData(): Promise<any[]> {
  return []
}

export async function getReviewSummaryData(productCode: string): Promise<ReviewSummaryDataType> {
  const res = await fetch(`${process.env.API_BASE_URL}/v1/reviews/summary/${productCode}`, {
    method: 'GET',
  })

  if (res.ok) {
    const data = (await res.json()).result
    // console.log('get product data', data)

    return data
  } else {
    console.error('error with getting review summary')

    return {
      starAverage: 0,
      evaluation: [],
    }
  }
}
export async function getReviewItemData(): Promise<any> {
  return null
}
export async function getReviewImageData(): Promise<any[]> {
  return []
}
