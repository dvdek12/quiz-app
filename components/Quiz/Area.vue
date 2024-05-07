<template>
    <fieldset class="border-2 border-dashed border-gray-500 p-12 w-2/3">
        <legend class="text-gray-500">
            YOUR QUIZZES
        </legend>

        <div class="grid grid-cols-3 gap-20">
            <div @click="isOpen = true"
                class="flex flex-col justify-center items-center w-80 h-80 bg-gray-600/10 hover:cursor-pointer hover:bg-gray-600/30 transition-all duration-300 ease-in-out rounded-md">
                <Icon name="ph:plus-bold" size="64" class="text-gray-600/50" />
            </div>


            <UModal v-model="isOpen" prevent-close>
                isOpen prop=> {{ isOpen }}
                <UCard :ui="{ ring: '', divide: 'divide-y divide-gray-100 dark:divide-gray-800' }">

                    <template #header>
                        <div class="flex items-center justify-between">
                            <h3 class="text-base font-semibold leading-6 text-gray-900 dark:text-white">
                                Create your own quiz!
                            </h3>
                            <UButton color="gray" variant="ghost" icon="i-heroicons-x-mark-20-solid" class="-my-1"
                                @click="isOpen = false" />
                        </div>
                    </template>

                    <div class="flex flex-col items-start space-y-4 w-full ">
                        <div class="flex w-full space-x-6">
                            <div class="flex flex-col w-1/2 space-y-6">
                                <div class="flex flex-col space-y-1">
                                    <h3 class="chivo text-xs">
                                        Quiz Name:
                                    </h3>
                                    <UInput color="gray" variant="outline" placeholder="Type quiz name..." />
                                </div>

                                <div class="flex flex-col space-y-1">
                                    <h3 class="chivo text-xs">
                                        Category:
                                    </h3>
                                    <UInputMenu v-model="selected" :options="categoriesSelect" />
                                </div>
                            </div>
                            <div class="w-1/2">
                                <img v-if="imageUrl" :src="imageUrl" @click="imageUrl = ''"
                                    class="w-full h-full shadow-xl rounded-md object-cover hover:brightness-50 hover:cursor-pointer ">
                                <label v-else for="dropzone-file"
                                    class="flex flex-col items-center justify-center h-full w-full border-2 border-gray-300 border-dashed rounded-md cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                                    <div class="flex flex-col items-center justify-center pt-5 pb-6">
                                        <svg class="w-8 h-8  text-gray-500 dark:text-gray-400" aria-hidden="true"
                                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                                stroke-width="2"
                                                d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                                        </svg>
                                        <p class="mb-2 text-xs text-gray-500 dark:text-gray-400">
                                            <span class="font-semibold">Click
                                                to
                                                upload quiz photo </span>
                                        </p>
                                    </div>
                                    <input id="dropzone-file" type="file" class="hidden" @change="handleFile" />
                                </label>
                            </div>
                        </div>


                    </div>
                </UCard>
            </UModal>


            <div class="relative flex flex-col h-80 w-80 z-0 bg-wenge rounded-md" v-for=" q  in  userQuizzes "
                :key="q.id">
                <div class="h-1/2 bg-cover rounded-t-md" :style="{ backgroundImage: 'url(' + q.img + ')' }">

                </div>
                <div class="h-1/2 flex flex-col items-start ">
                    <div class="bg-gray-700 p-3 w-full ">
                        <h2 class="text-isabelline tracking-wide chivo font-bold text-xl">
                            {{ q.name }}
                        </h2>
                    </div>

                    <div class="inline-flex space-x-2  p-3">
                        <UBadge color="purple" variant="solid">Dance</UBadge>
                        <UBadge color="green" variant="solid">Music</UBadge>
                        <UBadge color="emerald" variant="solid">Sport</UBadge>
                    </div>
                </div>

                <div class="w-full flex justify-between p-3">
                    <div class="chivo text-gray-400 italic">
                        11 questions
                    </div>
                    <div class="inline-flex  space-x-2">
                        <Icon name="raphael:edit" size="24"
                            class="hover:cursor-pointer text-zinc-400 hover:text-blue-500 transition-all duration-300 ease-in-out" />

                        <Icon name="pajamas:remove" size="24"
                            class="hover:cursor-pointer text-zinc-400 hover:text-red-500 transition-all duration-300 ease-in-out" />

                    </div>
                </div>


            </div>
        </div>
    </fieldset>

</template>

<script setup>
const supabase = useSupabaseClient()
const user = useSupabaseUser()

const { data: userProfile, error: queryError } = await supabase.from('profile').select(`
    id,
    email,
    quizzes (id, name, category, img, questions)
`).eq('id', user.value.id)
const userQuizzes = computed(() => userProfile[0].quizzes)

const isOpen = ref(null)



const categoriesSelect = ['history', 'sport', 'science', 'food',
    'astronomy', 'cars', 'hunting', 'lifestyle',
    'travel', 'other']
const selected = ref(categoriesSelect[0])
</script>