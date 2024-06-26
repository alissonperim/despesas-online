import { MaritalStatus } from '@shared/enums'

export interface IUser {
    id: string
    name: string
    lastName: string
    phoneNumber: string
    email: string
    document: string
    maritalStatus: MaritalStatus
    birthDate: Date
    createdAt: Date
    updatedAt: Date
    deletedAt?: Date
    createdBy?: string
    updatedBy?: string
    deletedBy?: string
  }
  