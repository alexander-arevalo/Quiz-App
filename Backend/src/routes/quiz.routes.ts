import { Hono } from 'hono'
import { getQuiz, gradeQuiz } from '../controller/quiz.controller'

export const quizRouter = new Hono()

quizRouter.get('/quiz', getQuiz)
quizRouter.post('/grade', gradeQuiz)
