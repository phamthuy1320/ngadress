import { TSize } from "../Product/types";

export interface IProduct {
  id?: string;
  name?: string;
  src?: string;
  size?: TSize;
  amount?: number;
  price?: number;
}
export interface ICartProps {
  amount: number;
  data: IProduct[];
}
