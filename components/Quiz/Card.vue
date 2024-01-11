<template>
    <div class="w-full h-40 bg-gray-300 rounded-md flex">
        <div class="w-1/3 h-full bg-cover rounded-l-md bg-center" :style="{ backgroundImage: 'url('+ quiz.img +')' }">

        </div>

        <div class="w-2/3 px-6 py-4 h-full flex flex-col space-y-2">
            <h2 class="text-4xl font-semibold">
                {{ quiz.quizName }}
            </h2>

            <h5 class="text-xl">
                Kategoria: <span>{{ quiz.category }}</span>
            </h5>

            <button class="bg-blue-600 self-start py-1 px-6 rounded-lg font-semibold text-white shadow-2xl">
                ZRÓB
            </button>
        </div>


    </div>
</template>

<script setup>

const quiz = computed(() => props.quiz)

const props = defineProps({
    quiz: Object
})

</script>