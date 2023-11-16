import { IProductRepository } from "../repository/ProductRepository";

export class GetProductUseCase {
  constructor(private productRepository: IProductRepository) {}  

  execute(id: number) {
    const product = this.productRepository.findById(id)
    console.log(product)
  }
}
