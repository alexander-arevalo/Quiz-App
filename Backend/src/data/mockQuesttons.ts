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
  {
    id: 4,
    type: 'text',
    question: 'What is the largest ocean on Earth?',
    correctText: 'pacific'
  },
  {
    id: 5,
    type: 'radio',
    question: 'Who painted the Mona Lisa?',
    choices: ['Vincent van Gogh', 'Leonardo da Vinci', 'Pablo Picasso', 'Michelangelo'],
    correctIndex: 1
  },
  {
    id: 6,
    type: 'checkbox',
    question: 'Which of these are programming languages?',
    choices: ['Python', 'HTML', 'JavaScript', 'CSS'],
    correctIndexes: [0, 2]
  },
  {
    id: 7,
    type: 'text',
    question: 'What is the chemical symbol for gold?',
    correctText: 'au'
  },
  {
    id: 8,
    type: 'radio',
    question: 'How many continents are there?',
    choices: ['5', '6', '7', '8'],
    correctIndex: 2
  },
  {
    id: 9,
    type: 'checkbox',
    question: 'Select all countries in Europe.',
    choices: ['Germany', 'Brazil', 'France', 'Australia'],
    correctIndexes: [0, 2]
  },
  {
    id: 10,
    type: 'text',
    question: 'What year did World War II end?',
    correctText: '1945'
  },
  {
    id: 11,
    type: 'radio',
    question: 'What is the smallest unit of life?',
    choices: ['Atom', 'Molecule', 'Cell', 'Organ'],
    correctIndex: 2
  },
  {
    id: 12,
    type: 'checkbox',
    question: 'Which of these are renewable energy sources?',
    choices: ['Solar', 'Coal', 'Wind', 'Natural Gas'],
    correctIndexes: [0, 2]
  },
]