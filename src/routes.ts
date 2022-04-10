import { Router } from 'express'

const router = Router()

router.get('/', (request, response) => {
  return response.send('<h1>Hello World</h1>')
})

export { router }
