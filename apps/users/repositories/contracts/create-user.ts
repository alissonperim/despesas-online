import { User } from '@entities/user'
import { ICreateUser } from '@users/contracts'

export interface ICreateUserRepository {
  create(data: ICreateUser): Promise<User>
}
