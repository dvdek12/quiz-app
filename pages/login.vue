<template>
    <div class="flex  flex-col justify-center px-6 py-12 lg:px-8  rounded-md">
        <div class="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 class="mt-10 text-center text-4xl font-bold leading-9 tracking-tight text-cordovan">Sign in to your
                account
            </h2>
        </div>

        <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form class="space-y-6" @submit.prevent="signInWithEmail()">
                <div>
                    <label for="email" class="block text-lg font-medium leading-6 text-cordovan/80">Email
                        address</label>
                    <div class="mt-2">
                        <input id="email" v-model="email" name="email" type="email" autocomplete="email" required
                            class="block w-full rounded-md border-0 py-1.5 px-2 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-cordovan sm:text-md sm:leading-6 transition-all duration-300 ease-in-out">
                    </div>
                </div>

                <div>
                    <div class="flex items-center justify-between">
                        <label for="password"
                            class="block text-lg font-medium leading-6 text-cordovan/80">Password</label>
                    </div>
                    <div class="mt-2">
                        <input id="password" v-model="password" name="password" type="password"
                            autocomplete="current-password" required
                            class="block w-full rounded-md border-0 py-1.5 px-2 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-cordovan sm:text-md sm:leading-6 transition-all duration-300 ease-in-out">
                    </div>
                </div>

                <div>
                    <button type="submit"
                        class="flex w-full justify-center rounded-md bg-cordovan px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-all duration-300 ease-in-out">
                        Sign in
                    </button>
                </div>
            </form>

            <p class="mt-10 text-center text-sm text-gray-500">
                Not a member?
                <NuxtLink to="/register"
                    class="font-semibold leading-6 text-cordovan hover:text-red-900 transition-all duration-300 ease-in-out">
                    Sign up now!</NuxtLink>
            </p>
        </div>

        <p class="text-black">
            {{ errorMsg }}
        </p>
    </div>
</template>


<script setup>
const supabase = useSupabaseClient()
const router = useRouter()

const email = ref("")
const password = ref(null)
const errorMsg = ref(null)

async function signInWithEmail() {
    try {
        const { data, error } = await supabase.auth.signInWithPassword({
            email: email.value,
            password: password.value,
        })

        console.log(data);

        if (error) throw error
        router.push("/")
    } catch (e) {
        errorMsg.value = e.message
    }
}


definePageMeta({
    layout: 'auth'
})

useHead({
    title: 'Login Page'
})

</script>