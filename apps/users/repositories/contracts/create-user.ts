import { ICreateUser } from '@users/contracts'
import { User } from '@users/domain/entity/user'

export interface ICreateUserRepository {
  create(data: ICreateUser): Promise<User>
}
