import { CreateUserRepository } from '@users/repositories'
import { ICreateUserRepository } from '@users/repositories/contracts'
import { CreateUserUseCase } from '@users/usecases/CreateUser'
import { ICreateUserUseCase } from '@users/usecases/contracts/createUser'
import { container } from 'tsyringe'

export class UsersDependencyInjection {
  static execute() {
    // UseCases
    container.registerSingleton<ICreateUserUseCase>('CreateUserUseCase', CreateUserUseCase)
    
    // Repositories
    container.registerSingleton<ICreateUserRepository>('CreateUserRepository', CreateUserRepository)
  }
}
