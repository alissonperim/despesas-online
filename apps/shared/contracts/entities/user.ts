import { BaseDomain } from '@shared/domain'

export interface IUser extends BaseDomain {
    name: string
    lastName: string
    phoneNumber: string
    email: string
    birthDate: Date
}
