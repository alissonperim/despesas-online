import { AppDataSource } from '@infra/data/datasource'
import { IUser } from '@shared/contracts'
import { ICreateUser } from '@users/contracts'
import { ICreateUserRepository } from '@users/contracts/repositories/createUser'
import { User } from '@users/domain/entity/user'
import { Repository } from 'typeorm'

export class CreateUserRepository implements ICreateUserRepository {
  private readonly context: Repository<User> = AppDataSource().getRepository(User)
  execute (data: ICreateUser): Promise<IUser> {
    return this.context.save(this.context.create(data))
  }
}
