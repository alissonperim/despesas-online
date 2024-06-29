import { User } from '@users/domain/entity/user'
import { IListUsersRepository } from './contracts'
import { Repository } from 'typeorm'
import { DataSourceSingleton } from '@infra'
import { injectable } from 'tsyringe'

@injectable()
export class ListUsersRepository implements IListUsersRepository {
    private readonly context: Repository<User> = DataSourceSingleton.getRepositoy(User)
    async list(): Promise<User[]> {
        return this.context.find()
    }
}
