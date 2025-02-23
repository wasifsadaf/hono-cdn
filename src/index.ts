import { serve } from '@hono/node-server'
import { serveStatic } from '@hono/node-server/serve-static'
import { Hono } from 'hono'

const app = new Hono()

app.get('/', (c) => {
  return c.text('Server is running...')
})

app.use('*', serveStatic({ root: './static' }))

serve({
  fetch: app.fetch,
  port: Number(process.env.PORT ?? 3001),
}, (info) => {
  console.log(`Server is running on http://localhost:${info.port}`)
})
