<template>
    <div class="flex flex-col items-center justify-evenly bg-white w-full shadow-2xl py-24 space-y-16">

        <div class="flex flex-col space-y-4 items-center">
            <div class="">
                <img :src="successIcon" alt="goodjobgif" class="w-24 h-24">
            </div>
            <h2 class="text-5xl chivo font-semibold text-gray-800">
                Gratulacje!
            </h2>
            <div class="flex flex-col space-y-2">
                <div>
                    <span class="text-xl chivo text-gray-700">
                        Udało ci się skończyc quiz z wynikiem {{ score }}/{{ quizLength }}
                    </span>
                </div>
                <div class="flex justify-evenly">
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


        <nav class="flex space-x-6">
            <NuxtLink to="/">
                <button class="inline-flex items-center space-x-2 bg-blue-400 px-4 py-2 rounded-md">
                    <Icon name="fa6-solid:house" color="white" size="16" />
                    <span class="text-white  text-md">
                        Menu
                    </span>
                </button>
            </NuxtLink>

            <NuxtLink :to="`/${quiz.quizName}/${quiz.questions[0].question}`">
                <button class="inline-flex items-center space-x-2 bg-orange-400 px-4 py-2 rounded-md">
                    <Icon name="mi:repeat" color="white" size="16" />
                    <span class="text-white  text-md">
                        Powtórz
                    </span>
                </button>
            </NuxtLink>

            <button class="inline-flex items-center space-x-2 bg-indigo-400 px-4 py-2 rounded-md">
                <Icon name="lets-icons:chart-fill" color="white" size="16" />
                <span class="text-white  text-md">
                    Odpowiedzi
                </span>
            </button>

            <button class="inline-flex items-center space-x-2 bg-green-400 px-4 py-2 rounded-md">
                <Icon name="icon-park-solid:next" color="white" size="16" />
                <span class="text-white  text-md">
                    Następny quiz
                </span>
            </button>

        </nav>
    </div>
</template>

<script setup>
import { getData } from 'nuxt-storage/local-storage';
import successIcon from '~/assets/success.png'
console.log(successIcon);
const { params } = useRoute()
const quizzes = await useQuizzes()

const quiz = computed(() => quizzes.value.find(q => q.quizName === params.quiz))
const quizLength = computed(() => quiz.value.questions.length)


const answers = computed(() => getData('answers'))


const score = useState('score', () => 0)

const scoreWithPercentages = computed(() => (score.value / quizLength.value).toFixed(2) * 100)


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

</script>

<style scoped>
.chivo {
    font-family: 'Chivo', sans-serif;
    ;
}
</style>