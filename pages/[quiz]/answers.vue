<template>
    <div class="flex flex-col items-center justify-evenly bg-white w-full shadow-2xl py-24 space-y-16">

        <div class="flex flex-col">
            <table class="table-auto select-none">
                <thead>
                    <tr>
                        <th class=""> Nr. </th>
                        <th class="text-start px-6"> Treść pytania </th>
                        <th class="px-6"> Twoja odp. </th>
                        <th class="px-6"> Poprawna odp. </th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(q, index) in quiz.questions" :key="q" class="text-lg font-semibold text-gray-400 hover:text-blue-600 ">
                        <td class="px-6">
                            {{ index + 1 }} 
                        </td>
                        <td class="px-6   "> {{ q.question }} </td>
                        <td class="px-6"> 1914 </td>
                        <td class="px-6"> 1814 </td>
                    </tr>
                </tbody>
            </table>
        </div>

    </div>
</template>

<script setup>
const { params } = useRoute()

const quiz = await useQuizByName(params.quiz)

definePageMeta({
    layout: 'quiz',
    middleware: ['check-answers']
})

</script>