import { User } from '@users/domain/entity/user'
import { DeepPartial } from 'typeorm'

export interface IUpdateUserRepository {
    update(id: string, data: DeepPartial<User>): Promise<User>
}
