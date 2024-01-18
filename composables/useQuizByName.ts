import data from '~/quizData.js'

export default async (name: any) => {
    const quiz = ref(data.quizzes.find(({ quizName }) => quizName === "Stasiubizm"))
    
    return quiz
}