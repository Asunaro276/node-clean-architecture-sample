import { Product } from "../domain/Product"

export class ProductRepository {
  findById(id: number) {
    // データベースへのアクセス（SQLなど）
    const product = new Product(1, 'egg', 100)
    return product
  }
}

export const productRepository = new ProductRepository()
