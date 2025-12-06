import { Hono } from 'hono'
import { quizRouter } from './router/quiz.router'

const app = new Hono()

app.get('/health', (c) => c.json({ status: 'ok' }))
app.route('/api', quizRouter)
app.get("/", (c) => {
  return c.json({
    message: "Hono Quiz API",
    routes: ["/api/quiz", "/api/grade", "/health"]
  });
});


export default app
