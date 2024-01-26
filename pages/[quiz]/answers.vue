<template>
    <div class="flex flex-col items-center justify-evenly bg-white w-full shadow-2xl py-20 lg:py-24 px-0 lg:px-16 space-y-16  ">

        <div class="flex items-center sm:justify-center  bg-gray-100 " >
            <table class="table-fixed select-none  ">
                <thead class="">
                    <tr class="hidden mb-4 sm:table-row bg-blue-200">
                        <th class="text-start"> Nr. </th>
                        <th class="text-start px-0 sm:px-6"> Treść pytania </th>
                        <th class="text-start px-0 sm:px-6"> Twoja odp. </th>
                        <th class="text-start px-0 sm:px-6"> Poprawna odp. </th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(q, index) in tableData" :key="q" class="mb-4 text-md lg:text-lg font-semibold text-gray-400 flex flex-col sm:table-row hover:text-blue-600 ">
                        <td class="px-6 inline-flex space-x-2 font-bold">
                            <span>
                                {{ index + 1 }}
                            </span> 
                            <span class="block sm:hidden">pytanie</span>
                        </td>
                        <td class="px-6   "> 
                            {{ q.question }} 
                        </td>
                        <td class="px-6 sm:table-cell inline-flex space-x-2 "> 
                            <span>
                                {{ q.userAnswer }}
                            </span>
                            <span class="block sm:hidden text-gray-300"> (twoja odp.) </span>
                        </td>
                        <td class="px-6 sm:table-cell inline-flex space-x-2"> 
                            <span>
                                {{ q.answers.find(q => q.correct).content }}
                            </span>
                            <span class="block sm:hidden text-gray-300"> (poprawna odp.) </span>
                        </td>
                    </tr>
                </tbody>
                
            </table>
        </div>

       
                <button @click.prevent="$router.back()" class="inline-flex items-center space-x-2 bg-blue-400 px-4 py-2 rounded-md w-1/2 lg:w-auto ">
                    <Icon name="icon-park-solid:next" color="white" size="16" class="img-hor-vert"/>
                    <span class="text-white  text-md">
                        Wróc
                    </span>
                </button>
            

    </div>
</template>

<script setup>
import { getData } from 'nuxt-storage/local-storage';
const { params } = useRoute()
const quiz = await useQuizByName(params.quiz)

const answers = computed(() => getData('answers'))

const tableData = computed(() => {
    const result = []
    quiz.value.questions.forEach((q, index) => {
        const tmp = { ...q, userAnswer: answers.value[index]}
        result.push(tmp)
    })
    return result
})



console.log(quiz.value);
console.log(tableData.value);


definePageMeta({
    layout: 'quiz',
    middleware: ['check-answers']
})

</script>

<style scoped>
.img-hor-vert {
    -moz-transform: scale(-1, -1);
    -o-transform: scale(-1, -1);
    -webkit-transform: scale(-1, -1);
    transform: scale(-1, -1);
}
</style>