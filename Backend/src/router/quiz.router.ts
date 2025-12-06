import { Hono } from 'hono'
import { getQuiz, gradeQuiz } from '../conroller/quiz.conroller'

export const quizRouter = new Hono()

quizRouter.get('/quiz', getQuiz)
quizRouter.post('/grade', gradeQuiz)
