import { IUser } from '@shared/contracts'
import { ICreateUser } from '@users/contracts'
import { User } from '@users/domain/entity/user'
import { Repository } from 'typeorm'
import { ICreateUserRepository } from './contracts'
import { injectable } from 'tsyringe'
import { DataSourceSingleton } from '@infra/datasource-singleton'

@injectable()
export class CreateUserRepository implements ICreateUserRepository {
  private readonly context: Repository<User> = DataSourceSingleton.getRepositoy(User)
  execute (data: ICreateUser): Promise<IUser> {
    return this.context.save(this.context.create(data))
  }
}
