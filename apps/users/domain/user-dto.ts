import { User } from './entity/user'
import { IUser } from '@packages/types'
import { IListResponse } from '@shared/utils/list-response'

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

export const listUsersDto = (users: User[]): IListResponse<IUser> => {
    return {
        data: users.map(userDto)
    }
}
