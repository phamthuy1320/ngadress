// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import Product from "src/mocks/products.json";
import Category from "src/mocks/categories.json";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.query?.category) {
    const category = Category.find((cate) => cate.id === req.query?.category);

    const products = Product.filter((item) => item.category === req.query?.category);
    if (!category) return res.status(404).json({});
    res.status(200).json({
      category_id: category.id,
      category_name: category.name,
      products,
    });
  }

  res.status(200).json(Product);
}
