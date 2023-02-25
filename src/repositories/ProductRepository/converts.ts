export const convertCategoriesListResponse = (data: any) => {
  return data?.map((item: any) => ({
    categoryName: item.category_name,
    categoryId: item.category_id,
    products: item.products,
  }));
};
