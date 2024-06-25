import { IListUsersRepository } from '@users/repositories/contracts'
import { IListUsersUseCase } from './contracts'
import { IUser } from '@shared/domain'
import { inject, injectable } from 'tsyringe'
import { userDto } from '@users/domain/user-dto'

@injectable()
export class ListUsersUseCase implements IListUsersUseCase {
    constructor(
        @inject('ListUsersRepository')
        private readonly listUsersRepository: IListUsersRepository
    ){}
    async execute(): Promise<IUser[]> {
        const users = await this.listUsersRepository.execute()

        return users.map(userDto)
    }
}
