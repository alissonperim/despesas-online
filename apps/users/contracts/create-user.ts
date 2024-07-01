import { Address } from '@entities/address'

export interface ICreateUser {
  name: string
  lastName: string
  phoneNumber: string
  email: string
  birthDate: Date
  address?: Address
}
