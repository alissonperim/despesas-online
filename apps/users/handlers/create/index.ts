import { User } from '@users/domain/entity/user'
import { ICreateUserUseCase } from '@users/usecases/contracts/create-user'
import { NextFunction, Request, Response } from 'express'
import { container } from 'tsyringe'

interface CreateUserInput extends Request {
    body: User
} 

export const createUserHandler = async (req: CreateUserInput, res: Response, next: NextFunction) => {
    const { body } = req

    try {
        const controller = container.resolve<ICreateUserUseCase>('CreateUserUseCase')
        const response = await controller.execute(body)

        res.created(response)
    } catch (error) {
        next(error)
    }
} 
