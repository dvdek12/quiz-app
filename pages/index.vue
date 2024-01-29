<template>
    <div>
        <Account v-if="user" />
        <Auth v-else />
        <div class="flex flex-col space-y-6">
            <QuizCard v-for="quiz in quizzes" :key="quiz" :quiz="quiz" />
        </div>
    </div>
</template>

<script setup>
const quizzes = await useQuizzes()
const user = useSupabaseUser()



definePageMeta({
    layout: 'quiz'
})

useHead({
    title: 'Quiz'
})


</script>