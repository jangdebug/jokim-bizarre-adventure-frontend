interface ReviewImageType {
  reviewId: number
  imageId: number
  imageUrl: string
}

interface ReviewEvaluationType {
  name: string
  value: string
  rate?: number
}

interface ReviewType {
  productId: number
  reviewId: number
  starPoint: number
  type: string
  isBest: number
  userId: string
  modifyDate: string
  likeCount: number
  productOption: string
  content: string
  evaluation: ReviewEvaluationType[]
  image: ReviewImageType[]
}

interface ReviewSummaryType {
  starAverage: number
  evaluation: ReviewEvaluationType[]
  image: ReviewImageType[]
}
