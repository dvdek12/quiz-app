<template>
    <div class="relative flex flex-col items-center bg-center bg-cover w-full shadow-2xl filter " >
        <div class="flex flex-col space-y-3 w-full items-center  relative">
            <QuizProgressLine :current="questionIndex + 1" :max="quizLength" />
            <span class="font-bold uppercase text-white text-lg lg:text-2xl">
                {{ questionIndex + 1 }} / {{ quizLength }}
            </span>
        </div>
        <div class="flex flex-col justify-center py-12  w-3/4 relative">


            <p class="text-3xl lg:text-5xl salsa mb-6 text-center text-white">
                {{ question.question }}
            </p>

            <div class="grid grid-cols-1 sm:grid-cols-2 grid-rows-1 sm:grid-rows-2 gap-4">
                <button @click="checkAnswer($event)" 
                    v-for="answer in question.answers" :key="answer" 
                    class="bg-gray-200 hover:bg-gray-300 text-md sm:text-lg lg:text-2xl 
                    transition-all duration-100 ease-in-out  p-3 sm:p-4 lg:p-7 text-center border-4
                    "
                    :class="{ shakeAnimation : animateShake }"
                    :disabled="isDisabled && answer.content !== checkedAnswer"
                    >
                    {{ answer.content }}
                </button>
            </div>

            <button v-if="(questionIndex + 1) === quizLength" @click="showResults()"  class="bg-blue-400 mt-6 text-white py-2 lg:py-3 text-md lg:text-xl font-semibold shadow-xl hover:bg-blue-500 transition-all duration-300 ease-in-out">
                ZAKOŃCZ
            </button>

            <button v-else @click="goToNextQuestion()"  class="bg-blue-400 mt-6 text-white py-2 lg:py-3 text-md lg:text-xl font-semibold shadow-xl hover:bg-blue-500 transition-all duration-300 ease-in-out">
                DALEJ
            </button>
        </div>


    </div>
</template>

<script setup>
import { setData, getData } from 'nuxt-storage/local-storage';

const { params } = useRoute()
const quiz = await useQuizByName(params.quiz)


const quizLength = computed(() => quiz.value.questions.length)

const checkedAnswer = ref("")
const animateShake = ref(false)
const isDisabled = ref(false)

const question = computed(() => quiz.value.questions.find(q => q.question == params.question + '?'))

const questionImg = computed(() => `url(${question.value.img})`)

const questionIndex = computed(() => quiz.value.questions.findIndex(q => q.question == params.question + '?'))

const nextQuestion = computed(() => {
    if (questionIndex.value + 1 >= quizLength.value) {
        return quiz.value.questions[questionIndex.value]
    } else {
        return quiz.value.questions[questionIndex.value + 1]
    }
})

const checkAnswer = (event) => {
    if(event.target.classList.contains('border-stone-800')){
        isDisabled.value = !isDisabled.value
        event.target.classList.remove('border-stone-800')
    }else{
        event.target.classList.add('border-stone-800')
        isDisabled.value = !isDisabled.value
    }
    
    checkedAnswer.value = event.target.innerText
}

const goToNextQuestion = () => {
    if(checkedAnswer.value === ""){
        animateShake.value = true

        setTimeout(() => {
            animateShake.value = false
        }, 1500)
    }else{
        saveAnswerInStorage()

        navigateTo({ path: `/${quiz.value.quizName}/${nextQuestion.value.question}` })
    }
}

const saveAnswerInStorage = () => {
    const currentAnswers = ref(getData('answers'))

    currentAnswers.value.push(checkedAnswer.value)

    setData('answers', currentAnswers.value)
    
}

const showResults = () => {
    if(checkedAnswer.value === ""){
        animateShake.value = true

        setTimeout(() => {
            animateShake.value = false
        }, 1500)
    }else{
        saveAnswerInStorage()
        setData('endQuiz', true)
        navigateTo({ path: `/${quiz.value.quizName}/results` })
    }
}

onMounted(() => {
    if((params.question + "?") === quiz.value.questions[0].question){
        setData('answers', [])
    }
})

definePageMeta({
  layout: 'quiz'
})

useHead({
    title: `${quiz.value.quizName} - ${question.value.question}`
})

</script>

<style scoped>

.salsa{
    font-family: 'Salsa';
}

.filter{

}

.filter::before{
    content: "";
    position: absolute;
    background-size: cover;
    top: 0;
    left: 0;
    width: 100%; height: 100%;
    background-image: v-bind(questionImg);
    background-size: cover;
    background-position: center center;
    filter: opacity(40%);
}


.shakeAnimation {
  animation: shake 0.82s cubic-bezier(.36,.07,.19,.97) both;
  transform: translate3d(0, 0, 0);
  backface-visibility: hidden;
  perspective: 1000px;
}

@keyframes shake {
  10%, 90% {
    transform: translate3d(-1px, 0, 0);
  }
  
  20%, 80% {
    transform: translate3d(2px, 0, 0);
  }

  30%, 50%, 70% {
    transform: translate3d(-4px, 0, 0);
  }

  40%, 60% {
    transform: translate3d(4px, 0, 0);
  }
}

</style>