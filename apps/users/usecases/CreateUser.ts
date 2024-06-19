import { IUser } from '@shared/contracts'
import { ICreateUser, ICreateUserUseCase } from '@users/contracts'
import { ICreateUserRepository } from '@users/contracts/repositories'
import { inject, injectable } from 'tsyringe'

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
