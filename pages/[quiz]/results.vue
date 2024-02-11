<template>
    <div
        class="flex flex-col items-center justify-evenly bg-white w-full shadow-2xl py-20 lg:py-24 space-y-16 lg:px-0 px-6">

        <div class="flex flex-col space-y-4 items-center">
            <div class="">
                <img v-if="score > 1" :src="successIcon" alt="goodjobgif" class="w-16 h-16 lg:w-24 lg:h-24">
                <img v-else :src="sadIcon" alt="sadIcon" class="w-16 h-16 lg:w-24 lg:h-24">
            </div>

            <h2 v-if="score > 1" class="text-3xl md:text-4xl lg:text-5xl chivo font-semibold text-gray-800">
                Gratulacje!
            </h2>
            <h2 v-else class="text-3xl md:text-4xl lg:text-5xl chivo font-semibold text-gray-800 text-center">
                Następnym razem będzie lepiej!
            </h2>

            <div class="flex flex-col space-y-2 text-center">
                <div>
                    <span class="text-md lg:text-xl chivo text-gray-700 ">
                        Udało ci się skończyc quiz z wynikiem {{ score }}/{{ quizLength }}
                    </span>
                </div>
                <div class="flex flex-col lg:flex-row justify-evenly items-center">
                    <div class="inline-flex items-center space-x-2">
                        <Icon name="ph:check-bold" color="green" size="20" />
                        <h5 class="text-gray-600 chivo text-base">
                            {{ score }} prawidłowych
                        </h5>
                    </div>

                    <div class="inline-flex items-center space-x-2">
                        <Icon name="octicon:x-16" color="red" size="20" />
                        <h5 class="text-gray-600 chivo text-base">
                            {{ answers.length - score }} nieprawidłowych
                        </h5>
                    </div>
                </div>
            </div>
        </div>


        <nav
            class="grid grid-rows-4 grid-flow-row sm:grid-cols-2 sm:grid-rows-2 lg:grid-flow-col lg:grid-rows-1 gap-3 lg:gap-x-4">
            <QuizMenuButton to="/" icon="fa6-solid:house" content="Menu" color="bg-blue-400" />

            <QuizMenuButton :to="`/${quiz.name}/${quiz.questions[0].question}`" icon="mi:repeat" content="Powtórz"
                color="bg-orange-400" />

            <QuizMenuButton :to="`/${quiz.name}/answers`" icon="lets-icons:chart-fill" content="Odpowiedzi"
                color="bg-indigo-400" />

            <QuizMenuButton :to="`/${nextQuiz.name}/${nextQuiz.questions[0].question}`" icon="icon-park-solid:next"
                content="Następny quiz" color="bg-green-400" />
        </nav>
    </div>
</template>

<script setup>
import { getData } from 'nuxt-storage/local-storage';
import successIcon from '~/assets/success.png'
import sadIcon from '~/assets/sad.png'

const { params } = useRoute()
const quizzes = await useQuizzes()

const quiz = computed(() => quizzes.value.find(q => q.name === params.quiz))
const quizLength = computed(() => quiz.value.questions.length)
const nextQuiz = computed(() => {
    let nextIndex = quizzes.value.findIndex(q => q.name === quiz.value.name) + 1
    if (nextIndex >= quizzes.value.length) {
        nextIndex = 0
    }
    return quizzes.value[nextIndex]
})

const answers = computed(() => getData('answers'))


const score = useState('score', () => 0)




const correctAnswers = computed(() => {
    let result = []

    quiz.value.questions.forEach(el => {
        el.answers.forEach(a => {
            if (a.correct) {
                result.push(a.content)
            }
        })
    })

    return result
})



const getScore = () => {
    score.value = 0
    answers.value.forEach((answer, index) => {
        const correctAnswer = correctAnswers.value[index]

        if (answer === correctAnswer) {
            score.value += 1
        }
    })
}

onMounted(() => {
    getScore()
})

definePageMeta({
    layout: 'quiz'
})

useHead({
    title: `${quiz.value.name} - wyniki`
})

</script>

<style scoped>.chivo {
    font-family: 'Chivo', sans-serif;
    ;
}</style>