import { Router } from 'express'
import { createUserHandler } from './handlers/create'
import { schemaValidations } from '@shared/validations'
import { createUserSchema } from './handlers/create/schema'
import { openDbConnection } from 'apps/middlewares/open-db-connection'
import { listUsersHandler } from './handlers/list'

const router = Router()

router.post('/', schemaValidations(createUserSchema), openDbConnection, createUserHandler)
router.get('/', openDbConnection, listUsersHandler)

export { router as userRouter }
