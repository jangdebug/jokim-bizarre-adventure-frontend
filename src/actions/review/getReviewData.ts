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
export async function getReviewList(productCode: string, page: number, size: number): Promise<ReviewDataType[]> {
  const res = await fetch(`${process.env.API_BASE_URL}/v1/reviews/product/${productCode}/${page}/${size}`, {
    method: 'GET',
  })

  if (res.ok) {
    const data = (await res.json()).result.content
    // console.log('get product data', data)

    return data
  } else {
    console.error('error with getting review item')

    return []
  }
}
export async function getReviewImageData(reviewCode: string): Promise<ReviewImageDataTypes[]> {
  const res = await fetch(`${process.env.API_BASE_URL}/v1/review-media/${reviewCode}`, {
    method: 'GET',
  })

  if (res.ok) {
    const data = (await res.json()).result
    // console.log('get product data', data)

    return data
  } else {
    console.error('error with getting review images')

    return []
  }
}
