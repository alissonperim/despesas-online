import { IUser } from '@shared/contracts'
import { ICreateUser } from '@users/contracts'

export interface ICreateUserRepository {
  execute(data: ICreateUser): Promise<IUser>
}
