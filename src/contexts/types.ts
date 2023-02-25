import { TSize } from "../components/Product/types";

export interface IProduct {
  id?: string;
  name?: string;
  src?: string;
  size?: TSize;
  amount?: number;
  price?: number;
}

export interface ICartContext {
  amount: number;
  data: IProduct[];
  onAdd: (product: IProduct) => void;
}
