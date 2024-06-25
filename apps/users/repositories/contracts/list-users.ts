import { User } from '@users/domain/entity/user'

export interface IListUsersRepository {
    execute(): Promise<User[]>
}
