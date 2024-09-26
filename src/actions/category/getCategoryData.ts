export const getParentCategories = async () => {
  'use server'
  const res = await fetch(`${process.env.API_BASE_URL}/v1/category/subcategories`, {
    method: 'GET',
  })
  if (res.ok) {
    const data: CategoryType[] = (await res.json()).result
    return data
  }
}

export const getChildCategory = async (parentCategory: string | undefined) => {
  'use server'

  if (parentCategory) {
    const res = await fetch(
      `${process.env.API_BASE_URL}/v1/category/subcategories?parentCategoryCode=${parentCategory}`,
      {
        method: 'GET',
      },
    )
    if (res.ok) {
      const data = (await res.json()).result
      return data
    } else {
      console.log('error with get subcat')
      return []
    }
  }
}
