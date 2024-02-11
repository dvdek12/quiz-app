<template>
    <header class="w-full ">
        <nav class="w-full flex fixed top-0 bg-cordovan py-6 bangers">
            <div class="w-1/2 ">
                <h2 class="text-5xl font-white text-isabelline tracking-wide ml-10">
                    Quiz Master
                </h2>
            </div>
            <div class="w-1/2 flex justify-end items-center space-x-12 pr-24 salsa">


                <button @click="logOut()" v-if="user">
                    Log out
                </button>
                <NuxtLink to="/login" v-else>
                    Login
                </NuxtLink>

                <NuxtLink to="/profile" v-if="user">
                    {{ user.email }}
                </NuxtLink>


            </div>
        </nav>
    </header>
</template>

<script setup>
const supabase = useSupabaseClient()
const user = useSupabaseUser()
console.log(user);

const logOut = async () => {
    try {
        const { error } = await supabase.auth.signOut()
        if (error) throw error
        user.value = null
    } catch (error) {
        alert(error.message)
    } finally {
        navigateTo("/")
    }
}
</script>

<style>
.bangers {
    font-family: 'Bangers';
}

.salsa {
    font-family: 'Salsa';
}
</style>