<template>
    <div class="flex flex-col h-screen ">
        <div class=" bg-isabelline h-1/3 bg-cover flex items-end justify-end p-6"
            :style="{ backgroundImage: 'url(' + cover.url + ')' }">



            <div @click="isOpenChangeCover = true"
                class="inline-flex z-10 items-center space-x-2  rounded-md p-2 bg-gray-200 hover:cursor-pointer hover:bg-gray-300 transition-all duration-200 ease-in-out  ">
                <Icon name="icon-park-outline:change" color="gray" size="18" />
                <span class="text-sm text-gray-500">
                    Change cover
                </span>
            </div>
        </div>

        <UModal v-model="isOpenChangeCover" prevent-close>
            <UCard :ui="{ ring: '', divide: 'divide-y divide-gray-100 dark:divide-gray-800' }">
                <template #header>
                    <div class="flex items-center justify-between">
                        <h3 class="text-base font-semibold leading-6 text-gray-900 dark:text-white">
                            Change your background
                        </h3>
                        <UButton color="gray" variant="ghost" icon="i-heroicons-x-mark-20-solid" class="-my-1"
                            @click="isOpenChangeCover = false" />
                    </div>
                </template>

                <div class="flex flex-col items-center">
                    <div class="flex flex-col space-y-4">
                        <h2 class="text-gray-600 text-sm">Pick from defaults covers:</h2>
                        <div class="grid grid-cols-3 grid-rows-3 gap-4">
                            <div v-for="cover in signedURLs" :key="cover">
                                <img :src="cover.signedUrl" :alt="cover.path" @click="pickCover(cover.path)"
                                    class="w-32 h-16 hover:brightness-50 transition-all duration-300 ease-in-out hover:cursor-pointer">
                            </div>
                        </div>
                    </div>
                </div>
            </UCard>
        </UModal>

        <div class="flex w-full h-2/3">
            <div class="bg-eerie-black w-1/3 flex flex-col  justify-start items-center">
                <div class="w-48 h-48 flex -translate-y-1/2 items-center  bg-eerie-black rounded-full p-4  ">
                    <img v-if="imageUrl" :src="imageUrl" @click="imageUrl = ''"
                        class="w-full h-full shadow-xl rounded-full object-cover hover:brightness-50 hover:cursor-pointer ">
                    <label v-else for="dropzone-file"
                        class="flex flex-col items-center justify-center  h-40 w-40 border-2 border-gray-300 border-dashed rounded-full cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                        <div class="flex flex-col items-center justify-center pt-5 pb-6">
                            <svg class="w-8 h-8  text-gray-500 dark:text-gray-400" aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                            </svg>
                            <p class="mb-2 text-xs text-gray-500 dark:text-gray-400"><span class="font-semibold">Click
                                    to
                                    upload</span></p>
                        </div>
                        <input id="dropzone-file" type="file" class="hidden" @change="handleFile" />
                    </label>
                </div>

                <div class="flex flex-col">

                </div>

            </div>

            <div class="bg-eerie-black w-2/3">
                <div class="flex flex-col items-center justify-center  h-full">
                    <QuizArea />
                </div>
            </div>
        </div>

    </div>
</template>

<script setup>
const supabase = useSupabaseClient()
const user = useSupabaseUser()



const { data: userProfile, error: queryError } = await supabase.from('profile').select(`
    id,
    email,
    quizzes (id, name, category, img, questions)
`).eq('id', user.value.id)




const userMETADATA = ref(null)

const imageUrl = ref(null)
const cover = ref({ url: '', name: '' })
const isOpenChangeCover = ref(false)
const isOpenQuizCreateCard = ref(false)



const { data: coversBucket, error } = await supabase.storage.from('backgrounds').list()

const paths = coversBucket.map(file => file.name)

const { data: signedURLs } = await supabase.storage.from('backgrounds').createSignedUrls(paths, 60)


onMounted(() => {
    userMETADATA.value = user.value.user_metadata
    const [first] = signedURLs.filter(cover => cover.path === userMETADATA.value.background_cover_name)
    console.log(userMETADATA.value);
    cover.value.url = first.signedUrl
    imageUrl.value = userMETADATA.value.avatar_url
})

const pickCover = async (path) => {
    const [first] = signedURLs.filter(cover => cover.path === path);
    cover.value.name = first.path
    cover.value.url = first.signedUrl

    await supabase.auth.updateUser({
        data: {
            background_cover_name: first.path
        }
    })

    isOpen.value = false
}

const makeNewQuiz = () => {
    isOpenQuizCreateCard.value = true
}

const handleFile = async (event) => {
    const files = event.target.files
    const fileReader = new FileReader()

    fileReader.readAsDataURL(files[0])

    fileReader.addEventListener('load', async () => {
        imageUrl.value = fileReader.result

        await supabase.auth.updateUser({
            data: {
                avatar_url: imageUrl.value
            }
        })
    })




}



useHead({
    title: `User Profile - ${user.value.email}`
})




definePageMeta({
    layout: 'profile'
})

</script>

<style>
.chivo {
    font-family: 'Chivo', sans-serif;
}
</style>