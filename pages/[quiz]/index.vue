<template>
    <div>
        
    </div>
</template>

<script setup>
const { params } = useRoute()

const quiz = await useQuizByName(params.quiz)

onMounted(() => navigateTo(`/${quiz.value.quizName}/${quiz.value.questions[0].question}`))

definePageMeta({
    layout: 'quiz'
})
</script>