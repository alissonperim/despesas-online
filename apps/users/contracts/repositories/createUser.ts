import { IUser } from '@shared/contracts'
import { ICreateUser } from '../usecases/createUser'

export interface ICreateUserRepository {
  execute(data: ICreateUser): Promise<IUser>
}
