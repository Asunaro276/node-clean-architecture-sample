import { ProductRepository, productRepository } from "../infrastructure/ProductRepository";

export class GetProductUseCase {
  constructor(private productRepository: ProductRepository) {}  

  execute(id: number) {
    const product = this.productRepository.findById(id)
    console.log(product)
  }
}

const getProductUseCase = new GetProductUseCase(productRepository)
getProductUseCase.execute(1)
