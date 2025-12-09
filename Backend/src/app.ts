import { Hono } from 'hono'
import { quizRouter } from './routes/quiz.routes'
import { cors } from 'hono/cors'

const app = new Hono()

app.use('/api/*', cors({
  origin: "https://quiz-app-sage-omega-70.vercel.app",
  allowMethods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
}))
app.get('/health', (c) => c.json({ status: 'ok' }))
app.route('/api', quizRouter)
app.get("/", (c) => {
  return c.json({
    message: "Hono Quiz API",
    routes: ["/api/quiz", "/api/grade", "/health"]
  });
});

export default app
