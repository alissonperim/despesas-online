import { IUser } from '@shared/domain'
import { DeepPartial } from 'typeorm'

export interface IUpdateUserUseCase {
    execute(id: string, data: DeepPartial<IUser>): Promise<IUser>
}
