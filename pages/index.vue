<template>
    <div>
        <!-- <Account v-if="user" /> -->
        <!-- <Auth v-else />  -->
        <div class="flex flex-col space-y-6">
            <QuizCard v-for="quiz in quizzes" :key="quiz" :quiz="quiz" />
        </div>
        {{ error }}
    </div>
</template>

<script setup>
// const quizzes = await useQuizzes()
const user = useSupabaseUser()

const supabase = useSupabaseClient()

const error = ref(null)
const quizzes = ref(null)
const fetchQuizzes = async () => {
    const { data, error } = await supabase
        .from('quizzes')
        .select()

    if (error) {
        console.log(error);
        error.value = error.message
    }

    quizzes.value = data
}

onMounted(() => fetchQuizzes())


definePageMeta({
    layout: 'quiz'
})

useHead({
    title: 'Quiz'
})


</script>