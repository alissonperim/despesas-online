import { IUser } from '@shared/contracts'

export interface ICreateUser {
  name: string
  lastName: string
  phoneNumber: string
  email: string
  birthDate: Date
}

export interface ICreateUserUseCase {
  execute(data: ICreateUser): Promise<IUser>
}
