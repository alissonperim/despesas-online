import { CreateUserRepository, GetUserRepository, ListUsersRepository } from '@users/repositories'
import { ICreateUserRepository, IGetUserRepository, IListUsersRepository } from '@users/repositories/contracts'
import { CreateUserUseCase } from '@users/usecases/create-user'
import { ICreateUserUseCase } from '@users/usecases/contracts/create-user'
import { container } from 'tsyringe'
import { IGetUserUseCase, IListUsersUseCase } from '@users/usecases/contracts'
import { ListUsersUseCase } from '@users/usecases/list-users'
import { GetUserUseCase } from '@users/usecases'

export class UsersDependencyInjection {
  static execute() {
    // UseCases
    container.registerSingleton<ICreateUserUseCase>('CreateUserUseCase', CreateUserUseCase)
    container.registerSingleton<IListUsersUseCase>('ListUsersUseCase', ListUsersUseCase)
    container.registerSingleton<IGetUserUseCase>('GetUserUseCase', GetUserUseCase)
    
    // Repositories
    container.registerSingleton<ICreateUserRepository>('CreateUserRepository', CreateUserRepository)
    container.registerSingleton<IListUsersRepository>('ListUsersRepository', ListUsersRepository)
    container.registerSingleton<IGetUserRepository>('GetUserRepository', GetUserRepository)
  }
}
