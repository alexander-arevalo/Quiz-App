import { AnswerPayload } from '../types/quiz.types'

export const validateGradePayload = (body: any): string | null => {
  if (!body || !Array.isArray(body.answers)) {
    return 'Invalid payload: "answers" must be an array.'
  }

  for (const ans of body.answers) {
    if (ans.id === undefined) return 'Each answer must contain an "id".'
    if (ans.value === undefined) return 'Each answer must contain a "value".'
  }

  return null
}
