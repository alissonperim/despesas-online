import { IUser } from '@shared/domain'
import { User } from './entity/user'

export const userDto = ({
    id,
    name,
    email,
    birthDate,
    createdAt,
    document,
    lastName,
    maritalStatus,
    phoneNumber,
    updatedAt,
    deletedAt,
}: User): IUser => {
    return {
        id,
        name,
        email,
        birthDate,
        createdAt,
        document,
        lastName,
        maritalStatus,
        phoneNumber,
        updatedAt,
        deletedAt,
    }
}
