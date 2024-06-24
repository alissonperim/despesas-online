import express from 'express'
import { router } from './routes'
import { HttpExceptions } from '@shared/httpResponses'
import { midiffy } from './middlewares/midiffy'
import { UsersDependencyInjection } from '@users/contracts/dependencyInjection'

UsersDependencyInjection.execute()

const app = express()

midiffy(app)

app.use(router)
app.use(HttpExceptions)

app.listen(3000, () => {
  console.log('Server is running on port 3000')
})
