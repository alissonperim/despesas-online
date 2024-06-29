import { Router } from 'express'
import { createUserHandler } from './handlers/create'
import { pathParamsValidations, schemaValidations } from '@shared/validations'
import { createUserSchema } from './handlers/create/schema'
import { openDbConnection } from '@middlewares/open-db-connection'
import { listUsersHandler } from './handlers/list'
import { getUserSchema } from './handlers/get/schema'
import { getUserHandler } from './handlers/get'
import { updateUserPathSchema, updateUserSchema } from './handlers/update/schema'

const router = Router()

router.post('/', schemaValidations(createUserSchema), openDbConnection, createUserHandler)
router.put('/:id',
    pathParamsValidations(updateUserPathSchema),
    schemaValidations(updateUserSchema),
    openDbConnection,
    createUserHandler
)
router.get('/:id', pathParamsValidations(getUserSchema), openDbConnection, getUserHandler)
router.get('/', openDbConnection, listUsersHandler)

export { router as userRouter }
