import { User } from '@users/domain/entity/user'

export interface IGetUserRepository {
    get(id: string): Promise<User>
}
