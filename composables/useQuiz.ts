import data from '~/quizData.js'

export default async () => useState('quiz', () => data.quizzes)