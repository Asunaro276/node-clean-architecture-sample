import { Product } from "../model/Product";

export interface IProductRepository {
  findById(id: number): Product
}
