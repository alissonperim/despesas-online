import { IUser } from '@shared/contracts'
import { ICreateUser } from '@users/contracts'
import { ICreateUserRepository } from '@users/repositories/contracts'
import { inject, injectable } from 'tsyringe'
import { ICreateUserUseCase } from './contracts/create-user'

@injectable()
export class CreateUserUseCase implements ICreateUserUseCase {
  constructor(
    @inject('CreateUserRepository')
    private readonly repository: ICreateUserRepository
  ) {}

  async execute(data: ICreateUser): Promise<IUser> {
    return this.repository.execute(data)
  }
}
