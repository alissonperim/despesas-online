import { CreateUserRepository, ListUsersRepository } from '@users/repositories'
import { ICreateUserRepository, IListUsersRepository } from '@users/repositories/contracts'
import { CreateUserUseCase } from '@users/usecases/create-user'
import { ICreateUserUseCase } from '@users/usecases/contracts/create-user'
import { container } from 'tsyringe'
import { IListUsersUseCase } from '@users/usecases/contracts'
import { ListUsersUseCase } from '@users/usecases/list-users'

export class UsersDependencyInjection {
  static execute() {
    // UseCases
    container.registerSingleton<ICreateUserUseCase>('CreateUserUseCase', CreateUserUseCase)
    container.registerSingleton<IListUsersUseCase>('ListUsersUseCase', ListUsersUseCase)
    
    // Repositories
    container.registerSingleton<ICreateUserRepository>('CreateUserRepository', CreateUserRepository)
    container.registerSingleton<IListUsersRepository>('ListUsersRepository', ListUsersRepository)
  }
}
