import data from '~/quizData.js'

export default async (name: any) => useState('quiz', () => data.quizzes.filter(el => el.quizName === name))