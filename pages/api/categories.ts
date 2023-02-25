// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import Product from "src/mocks/products.json";
import Category from "src/mocks/categories.json";

export const getCategory = (id?: string) => {
  if (!id) return;
  const category = Category.find((cate) => cate.id === id);
  if (!category) return;
  const products = Product.filter((item) => item.category === id);

  return {
    category_id: category.id,
    category_name: category.name,
    products,
  };
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const categories = Category.map((cate) => {
    return getCategory(cate.id);
  });

  if (!categories) return res.status(404).json({});
  res.status(200).json(categories);
}
