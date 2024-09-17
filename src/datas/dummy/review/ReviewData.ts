export const reviewSummaryData: ReviewSummaryType = {
  starAverage: 3.5,
  evaluation: [
    {
      name: '사이즈',
      value: '잘 맞아요',
      rate: 100,
    },
    {
      name: '색상',
      value: '비슷해요',
      rate: 36,
    },
    {
      name: '디자인',
      value: '아주 만족해요',
      rate: 55,
    },
  ],
  image: [
    {
      reviewId: 1,
      imageId: 1,
      imageUrl: 'https://image.sivillage.com/upload/C00001/eval/645/202402221254645_00001.jpg?RS=300&SP=1&AO=1',
    },
    {
      reviewId: 1,
      imageId: 2,
      imageUrl: 'https://image.sivillage.com/upload/C00001/eval/475/202311211155475_00001.jpg?RS=300&SP=1&AO=1',
    },
    {
      reviewId: 2,
      imageId: 3,
      imageUrl: 'https://image.sivillage.com/upload/C00001/eval/898/202312071179898_00001.jpeg?RS=300&SP=1&AO=1',
    },
    {
      reviewId: 3,
      imageId: 4,
      imageUrl: 'https://image.sivillage.com/upload/C00001/eval/630/202306301013630_00001.jpeg?RS=300&SP=1&AO=1',
    },
  ],
}

export const reviewListData: ReviewType[] = [
  {
    productId: 2406262345,
    reviewId: 3,
    starPoint: 4,
    type: 'text',
    isBest: 0,
    userId: 'example3',
    modifyDate: '2024.09.21',
    likeCount: 30,
    productOption: '화이트/55',
    content:
      '내용이 긴 리뷰내용이 긴 리뷰내용이 긴 리뷰내용이 긴 리뷰내용이 긴 리뷰내용이 긴 리뷰내용이 긴 리뷰내용이 긴 리뷰내용이 긴 리뷰내용이 긴 리뷰내용이 긴 리뷰내용이 긴 리뷰내용이 긴 리뷰내용이 긴 리뷰내용이 긴 리뷰내용이 긴 리뷰내용이 긴 리뷰내용이 긴 리뷰내용이 긴 리뷰내용이 긴 리뷰',
    evaluation: [
      {
        name: '사이즈',
        value: '적당해요',
      },
      {
        name: '색상',
        value: '조금 어두워요',
      },
      {
        name: '디자인',
        value: '좋아요',
      },
    ],

    image: [],
  },
  {
    productId: 2406262345,
    reviewId: 2,
    starPoint: 2,
    type: 'preview',
    isBest: 0,
    userId: 'example2',
    modifyDate: '2024.09.16',
    likeCount: 30,
    productOption: '네이비/55',
    content: '사이즈는 괜찮은데 색상이 조금 아쉬워요. 디자인은 만족스러워요.',
    evaluation: [
      {
        name: '사이즈',
        value: '적당해요',
      },
      {
        name: '색상',
        value: '조금 어두워요',
      },
      {
        name: '디자인',
        value: '좋아요',
      },
    ],

    image: [
      {
        reviewId: 2,
        imageId: 3,
        imageUrl: 'https://image.sivillage.com/upload/C00001/eval/898/202312071179898_00001.jpeg?RS=300&SP=1&AO=1',
      },
    ],
  },
  {
    productId: 2406262345,
    reviewId: 1,
    starPoint: 5,
    type: 'photo',
    isBest: 1,
    userId: 'example1',
    modifyDate: '2024.09.15',
    likeCount: 45,
    productOption: '블랙/65',
    content: '제품이 잘 맞고 색상도 만족스러워요. 디자인도 예쁘네요!',
    evaluation: [
      {
        name: '사이즈',
        value: '조금 커요',
      },
      {
        name: '색상',
        value: '비슷해요',
      },
      {
        name: '디자인',
        value: '멋져요',
      },
    ],

    image: [
      {
        reviewId: 1,
        imageId: 1,
        imageUrl: 'https://image.sivillage.com/upload/C00001/eval/475/202311211155475_00001.jpg?RS=300&SP=1&AO=1',
      },
      {
        reviewId: 1,
        imageId: 2,
        imageUrl: 'https://image.sivillage.com/upload/C00001/eval/475/202311211155475_00001.jpg?RS=300&SP=1&AO=1',
      },
      {
        reviewId: 1,
        imageId: 4,
        imageUrl: 'https://image.sivillage.com/upload/C00001/eval/475/202311211155475_00001.jpg?RS=300&SP=1&AO=1',
      },
    ],
  },
]
