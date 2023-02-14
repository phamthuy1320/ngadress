export type TSize = "XS" | "S" | "M" | "L"

export interface IProduct {
  id?: string,
  src: string,
  otherImages?: string[],
  sale?: number,
  name: string,
  price: number,
  orgPrice?: number,
  sizes?: TSize[]
}
