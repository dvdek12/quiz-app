<template>
    <div class="flex flex-col items-center justify-center">
      <NuxtPage @send-answers="saveAnswers" @end-quiz="showResults"/>
    </div>
</template>


<script setup>
const answers = ref([])

const saveAnswers = (answer) => {
  answers.value.push(answer)
}

const showResults = (isEnd) => {
  if(isEnd) {
    navigateTo({
      path: '/quiz/results',
      query: {
        answers: answers.value
      }
    })
  }
}



definePageMeta({
  layout: 'quiz'
})

</script>
