import { GetProductUseCase } from "./domain/usecase/GetProductUseCase"
import { productRepository } from "./infrastructure/ProductRepository"

const getProductUseCase = new GetProductUseCase(productRepository)
getProductUseCase.execute(1)
