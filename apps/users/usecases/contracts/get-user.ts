import { IUser } from '@shared/domain'

export interface IGetUserUseCase {
    execute(id: string): Promise<IUser>
}
