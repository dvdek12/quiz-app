<template>
    <div class="w-full h-72 md:h-40 bg-gray-300 rounded-md flex flex-col md:flex-row">
        <div class="w-full md:w-1/3 h-full bg-cover rounded-t-md md:rounded-l-md bg-center"
            :style="{ backgroundImage: 'url(' + quiz.img + ')' }">

        </div>

        <div class="w-full md:w-2/3 px-6 py-4 h-full flex flex-col space-y-2">
            <h2 class="text-xl md:text-2xl xl:text-4xl font-semibold">
                {{ quiz.name }}
            </h2>

            <h5 class="text-md md:text-xl">
                Kategoria: <span>{{ quiz.category }}</span>
            </h5>



            <button @click="startQuiz()"
                class="text-xs md:text-md lg:text-base bg-blue-600 self-start py-1 px-2 md:px-6 rounded-lg font-semibold text-white shadow-2xl">
                ZRÓB
            </button>
        </div>

    </div>
</template>

<script setup>
import { setData } from 'nuxt-storage/local-storage';
const quiz = computed(() => props.quiz)
const firstQuestion = computed(() => quiz.value.questions[0].question)

const startQuiz = () => {
    setData('answers', [])
    navigateTo({ path: `/${quiz.value.name}/${firstQuestion.value}` })

}



const props = defineProps({
    quiz: Object
})

</script>