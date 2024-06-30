import { User } from '@entities/user'
import { IUpdateUserRepository } from './contracts'
import { DataSourceSingleton } from '@infra/datasource-singleton'
import { DeepPartial, Repository } from 'typeorm'
import { injectable } from 'tsyringe'
import { IUser } from '@packages/types'

@injectable()
export class UpdateUserRepository implements IUpdateUserRepository {
    private readonly context: Repository<User> = DataSourceSingleton.getRepositoy(User)

    async update (id: string, data: DeepPartial<IUser>): Promise<User> {
        await this.context.update(id, data)
        return this.context.findOne({ where: { id }})
    }
}
