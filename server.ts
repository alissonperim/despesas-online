import 'reflect-metadata'
import express from 'express'
import { midiffy } from './middlewares/midiffy'
import { UsersDependencyInjection } from '@users/contracts/dependency-injection'
import { HttpExceptions } from '@shared/http-responses'
import { router } from './routes'

UsersDependencyInjection.execute()

const app = express()

midiffy(app)

app.use(router)
app.use(HttpExceptions)

app.listen(3333, () => {
  console.log('Server is running on port 3333')
})
