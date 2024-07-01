import { User } from '@entities/user'
import { IUpdateUserRepository } from './contracts'
import { DataSourceSingleton } from '@infra/datasource-singleton'
import { DeepPartial, Repository } from 'typeorm'
import { injectable } from 'tsyringe'
import { IUser } from '@packages/types'
import { BadRequestException } from '@shared/exceptions/bad-request-exception'

@injectable()
export class UpdateUserRepository implements IUpdateUserRepository {
    private readonly context: Repository<User> = DataSourceSingleton.getRepositoy(User)

    async update (id: string, data: DeepPartial<IUser>): Promise<User> {
        let user = await this.context.findOne({ where: { id }})

        if (!user) {
            throw new BadRequestException('User not found')
        }

        user = {
            ...user,
            ...data
        } as User

        await this.context.createQueryBuilder().update(User)
            .set(
                {
                    name: user.name,
                    lastName: user.lastName,
                    maritalStatus: user.maritalStatus,
                    address: user.address,
                    birthDate: user.birthDate,
                }
            )
            .where('id = :id', { id })
            .execute()
        
        return user
    }
}
