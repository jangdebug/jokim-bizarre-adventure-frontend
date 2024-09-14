interface ReviewImageType {
  reviewId: number
  imageId: number
  imageUrl: string
}

interface Review {
  productId: number
  reviewId: number
  starPoint: number
  type: string
  isBest: number
  parsingEmail: string
  modifyDate: Date
  likeCount: number
  productOption: string
  content: string
  evaluationItem1Name: string
  evaluationItem2Name: string
  evaluationItem3Name: string
  evaluationItem1BestValue: string
  evaluationItem2BestValue: string
  evaluationItem3BestValue: string
  evaluation1Rate: number
  evaluation2Rate: number
  evaluation3Rate: number
  image: ReviewImageType[]
}

interface ReviewSummaryType {
  starAverage: number
  evaluationItem1Name: string
  evaluationItem2Name: string
  evaluationItem3Name: string
  evaluationItem1BestValue: string
  evaluationItem2BestValue: string
  evaluationItem3BestValue: string
  evaluation1Rate: number
  evaluation2Rate: number
  evaluation3Rate: number
  image: ReviewImageType[]
}
