import { IUser } from '@shared/contracts'
import { ICreateUser } from '@users/contracts'

export interface ICreateUserRepository {
  create(data: ICreateUser): Promise<IUser>
}
