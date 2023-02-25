import { IProduct } from "../Product/types";

export interface ICategoryProps {
  id: string;
  title: string;
  list: IProduct[];
}
