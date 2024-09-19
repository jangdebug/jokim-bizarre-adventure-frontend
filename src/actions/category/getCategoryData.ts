export const getParentCategories = async () => {
  'use server'
  const res = await fetch(`${process.env.API_BASE_URL}/api/v1/categories`, {
    method: 'GET',
  })
  if (res.ok) {
    const data: CategoryType[] = (await res.json()).result
    return data
  }
}

export const getChildCategory = async (parentCategory: CategoryType | undefined) => {
  'use server'
  if (parentCategory) {
    const res = await fetch(
      `${process.env.API_BASE_URL}/api/v1/categories?parentCategoryCode=${parentCategory.categoryCode}`,
      {
        method: 'GET',
      },
    )
    const data = (await res.json()).result
    return data
  }
}
