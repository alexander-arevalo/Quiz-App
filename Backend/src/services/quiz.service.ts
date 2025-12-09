import { questions } from '../data/mockQuesttons'
import { AnswerPayload, GradeResult } from '../types/quiz.types'

export class QuizService {
  getQuiz() {
    return questions
  }

  gradeQuiz(answers: AnswerPayload[]): GradeResult {
    let score = 0
    const total = questions.length
    const results = []

    for (const q of questions) {
      const ans = answers.find(a => a.id === q.id)
      if (!ans) {
        results.push({ id: q.id, correct: false })
        continue
      }

      let correct = false

      if (q.type === 'text') {
        correct = ans.value.toString().trim().toLowerCase() === q.correctText.toLowerCase()
      }

      if (q.type === 'radio') {
        correct = Number(ans.value) === q.correctIndex
      }

      if (q.type === 'checkbox') {
        const user = Array.isArray(ans.value) ? ans.value.sort() : []
        const correctAns = [...q.correctIndexes].sort()
        correct = JSON.stringify(user) === JSON.stringify(correctAns)
      }

      if (correct) score++
      results.push({ id: q.id, correct })
    }

    return { score, total, results }
  }
}
