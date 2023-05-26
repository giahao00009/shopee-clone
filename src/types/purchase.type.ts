import { Product } from "./product.type";

export type StatusPurchase = -1 | 1 | 2 | 3 | 4 | 5

export type StatusPurchaseList = StatusPurchase | 0

export interface Purchase {
  buy_count: number
  price: number
  price_before_discount: number
  status: number
  _id: string
  user: string
  product: Product
  createdAt: string
  updatedAt: string
}

export interface ExtendedPurchase extends Purchase {
  disabled: boolean
  checked: boolean
}
