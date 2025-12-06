import { Context } from 'hono'
import { QuizService } from '../service/quiz.service'
import { validateGradePayload } from '../utils/validation'

const service = new QuizService()

export const getQuiz = (c: Context) => {
  const questions = service.getQuiz()
  return c.json(questions)
}

export const gradeQuiz = async (c: Context) => {
  try {
    const body = await c.req.json()

    const error = validateGradePayload(body)
    if (error) return c.json({ error }, 400)

    const result = service.gradeQuiz(body.answers)
    return c.json(result)
  } catch (e) {
    return c.json({ error: 'Invalid JSON payload' }, 400)
  }
}
