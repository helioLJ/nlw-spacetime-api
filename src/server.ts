import 'dotenv/config'

import fastify from 'fastify'
import cors from '@fastify/cors'
import jwt from '@fastify/jwt'

import { memoriesRoutes } from './routes/memories'
import { authRoutes } from './routes/auth'

const app = fastify()

app.register(cors, {
  origin: ['http://localhost:3000'],
})

app.register(jwt, {
  secret: String(process.env.AUTH_SECRET),
})

app.register(memoriesRoutes)
app.register(authRoutes)

app
  .listen({
    port: 3333,
    host: '::',
    // host: '0.0.0.0',
  })
  .then(() => {
    console.log(`🚀 HTPP server running on http://localhost:3333`)
  })
