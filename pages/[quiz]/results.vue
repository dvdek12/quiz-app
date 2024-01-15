<template>
    <div class="flex flex-col items-center justify-evenly bg-white w-full shadow-2xl py-24 space-y-16">
        
        <div class="flex flex-col space-y-4 items-center">
            <h2 class="text-5xl ">
            Twoj wynik to: 
        </h2>
        <span class="text-4xl">
            {{ score }} / {{ quizLength }},  ({{ scoreWithPercentages }} %)
        </span>
        </div>
        

        <nav>
            <button>Menu</button>

            <button>Powtórz</button>

            <button>Następny quiz</button>

        </nav>
    </div>
</template>

<script setup>
import { getData } from 'nuxt-storage/local-storage';

const { params } = useRoute()
const quiz = await useQuizByName(params.quiz)

const answers = computed(() => getData('answers'))
const score = useState('score', () => 0)
const scoreWithPercentages = computed(() => (score.value / quizLength.value).toFixed(2) * 100)

const quizLength = computed(() => quiz.value[0].questions.length)


const correctAnswers = computed(() => {
    let result = []

    quiz.value[0].questions.forEach(el => {
        el.answers.forEach(a => {
            if(a.correct){
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

        if(answer === correctAnswer){
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