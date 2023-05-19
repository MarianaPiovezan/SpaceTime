import fastify from 'fastify'
import { memoriesRoutes } from './routes/memories'
import { authRoutes } from './routes/auth'
import cors from '@fastify/cors'
import jwt from '@fastify/jwt'

const app = fastify()

app.register(cors, {
  origin: true,
})

app.register(authRoutes)

app.register(memoriesRoutes)

app.register(jwt, {
  secret: 'spacetime',
})

app
  .listen({
    port: 3333,
    host: '0.0.0.0',
  })
  .then(() => {
    console.log('HTTP server running on http://192.168.1.12:3333')
  })
