export type TSize = "XS" | "S" | "M" | "L";

export interface IProduct {
  id?: string;
  src: string;
  otherImages?: string[];
  sale?: number;
  name: string;
  price: number;
  sizes?: TSize[];
}

export interface ICategory {
  categoryId: string;
  categoryName: string;
  products: IProduct[];
}
