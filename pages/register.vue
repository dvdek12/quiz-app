<template>
    <div class="flex  flex-col justify-center px-6 py-12 lg:px-8  rounded-md">
        <div class="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 class="mt-10 text-center text-4xl font-bold leading-9 tracking-tight text-cordovan">Sign up new account
            </h2>
        </div>

        <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form class="space-y-6" @submit.prevent="signUpNewUser()">
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
                    <div class="flex items-center justify-between">
                        <label for="password" class="block text-lg font-medium leading-6 text-cordovan/80">Repeat
                            password</label>
                    </div>
                    <div class="mt-2">
                        <input id="password" v-model="password2" name="password" type="password"
                            autocomplete="current-password" required
                            class="block w-full rounded-md border-0 py-1.5 px-2 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-cordovan sm:text-md sm:leading-6 transition-all duration-300 ease-in-out">
                    </div>
                </div>

                <div>
                    <button type="submit"
                        class="flex w-full justify-center rounded-md bg-cordovan px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-all duration-300 ease-in-out">
                        Sign up
                    </button>
                </div>
            </form>

            <p class="mt-10 text-center text-sm text-gray-500">
                Already have account?
                <NuxtLink to="/login"
                    class="font-semibold leading-6 text-cordovan hover:text-red-900 transition-all duration-300 ease-in-out">
                    Sign in now!</NuxtLink>
            </p>
        </div>
    </div>
    <!-- <form class="flex flex-col" @submit.prevent="signUpNewUser()">
        <h2 class="text-isabelline text-5xl mb-12">Zarejestruj się</h2>

        <div class="flex flex-col space-y-2">
            <span>
                Email
            </span>
            <input type="email" v-model="email">
        </div>

        <div class="flex flex-col space-y-2">
            <span>
                Hasło
            </span>
            <input type="password" v-model="password">
        </div>

        {{ errorMsg }}
        {{ successMsg }}

        <input type="submit">
    </form> -->
</template>


<script setup>
const supabase = useSupabaseClient()

const email = ref("")
const password = ref(null)
const password2 = ref(null)
const errorMsg = ref(null)
const successMsg = ref(null)

async function signUpNewUser() {
    console.log(email.value, password.value);
    try {
        const { data, error } = await supabase.auth.signUp({
            email: email.value,
            password: password.value,
            // options: {
            //     data: {
            //         background_cover_name: 'bg1.jpg',
            //         avatar_url: ''
            //     }
            // }
        });

        console.log(data);

        if (error) throw error

        successMsg.value = "Check your email to confirm your account!"

    } catch (e) {
        errorMsg.value = e.message
    }
}

const { data } = supabase.auth.onAuthStateChange((event, session) => {
    console.log(event, session)

    if (event === 'INITIAL_SESSION') {
        console.log('zalogowano');
    }
})

definePageMeta({
    layout: 'auth'
})

</script>