export type Question =
  | {
      id: number | string
      type: 'text'
      question: string
      correctText: string
    }
  | {
      id: number | string
      type: 'radio'
      question: string
      choices: string[]
      correctIndex: number
    }
  | {
      id: number | string
      type: 'checkbox'
      question: string
      choices: string[]
      correctIndexes: number[]
    }

export interface AnswerPayload {
  id: number | string
  value: string | number | number[]
}

export interface GradeResult {
  score: number
  total: number
  results: { id: number | string; correct: boolean }[]
}
