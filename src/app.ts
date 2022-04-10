import 'dotenv/config'
import express from 'express'

const app = express()

app.get('/', (request, response) => {
  return response.send('<h1>Hello World</h1>')
})

const port = process.env.PORT || 3333

app.listen(port, () => console.log(`🚀 Server is running on port ${port}`))
