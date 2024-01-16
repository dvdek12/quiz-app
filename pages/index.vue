<template>
    <div>
        <div class="flex flex-col space-y-6">
            <QuizCard v-for="quiz in quizzes" :key="quiz" :quiz="quiz"/>
        </div>
    </div>
</template>

<script setup>
const quizzes = await useQuizzes()




definePageMeta({
  layout: 'quiz'
})

useHead({
    title: 'Quiz'
})


</script>