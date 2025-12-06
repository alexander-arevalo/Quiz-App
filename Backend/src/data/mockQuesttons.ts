import { Question } from '../types/quiz.types'

export const questions: Question[] = [
  {
    id: 1,
    type: 'text',
    question: 'What is the capital of France?',
    correctText: 'paris'
  },
  {
    id: 2,
    type: 'radio',
    question: 'Which planet is known as the Red Planet?',
    choices: ['Earth', 'Mars', 'Jupiter'],
    correctIndex: 1
  },
  {
    id: 3,
    type: 'checkbox',
    question: 'Select all prime numbers.',
    choices: ['2', '3', '4', '6'],
    correctIndexes: [0, 1]
  },
  // Add more until you reach 8–12
]
