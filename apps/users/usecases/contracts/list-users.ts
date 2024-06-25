import { IUser } from '@shared/domain/types/user'

export interface IListUsersUseCase {
    execute(): Promise<IUser[]>
}
