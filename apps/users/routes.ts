import { Router } from 'express'
import { createUserHandler } from './handlers/create'
import { schemaValidations } from '@shared/validations'
import { createUserSchema } from './handlers/create/schema'
import { openDbConnection } from 'apps/middlewares/open-db-connection'

const router = Router()

router.post('/', schemaValidations(createUserSchema), openDbConnection, createUserHandler)

export { router as userRouter }
