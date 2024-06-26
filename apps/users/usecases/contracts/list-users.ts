import { IUser } from '@shared/domain/types/user'
import { IListResponse } from '@shared/utils/list-response'

export interface IListUsersUseCase {
    execute(): Promise<IListResponse<IUser>>
}
