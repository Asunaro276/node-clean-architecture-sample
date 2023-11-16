import { Product } from "../domain/model/Product"
import { IProductRepository } from "../domain/repository/ProductRepository"

export class ProductRepository implements IProductRepository {
  findById(id: number): Product {
    // データベースへのアクセス（SQLなど）
    const product = new Product(1, 'egg', 100)
    return product
  }
}

export const productRepository = new ProductRepository()
