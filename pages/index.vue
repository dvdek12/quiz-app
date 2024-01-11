<template>
    <div>
        <div class="flex flex-col space-y-6">
            <QuizCard v-for="quiz in quizzes" :key="quiz" :quiz="quiz"/>
        </div>
        <button @click="() => navigateTo({ path: `quiz/${quiz[0].question}` })">
            play
        </button>
    </div>
</template>

<script setup>
const quizzes = await useQuiz()


definePageMeta({
  layout: 'quiz'
})


</script>