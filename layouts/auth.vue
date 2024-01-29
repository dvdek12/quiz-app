<template>
    <div class="flex w-screen h-screen">
        <div class="w-1/3 h-full bg-cordovan flex flex-col justify-center items-center ">
            <h2 class="text-8xl bangers text-isabelline">
                QUIZ MASTER
            </h2>
            <p class="text-2xl varela text-white mt-2">
                Best place to broaden one's horizons
            </p>
            <div class="inline-flex space-x-2 mt-5">
                <div class="w-4 h-4 rounded-full bg-red-400">

                </div>

                <div class="w-4 h-4 rounded-full bg-blue-400">

                </div>

                <div class="w-4 h-4 rounded-full bg-green-400">

                </div>
            </div>
        </div>

        <div class="w-2/3 h-full bg-wenge flex flex-col justify-center items-center">
            <form class="flex flex-col">
                <h2 class="text-isabelline text-5xl mb-12">Zaloguj się</h2>

                <div class="flex flex-col space-y-2">
                    <span>
                        Email
                    </span>
                    <input type="email">
                </div>

                <div class="flex flex-col space-y-2">
                    <span>
                        Hasło
                    </span>
                    <input type="password">
                </div>
            </form>
        </div>
    </div>
</template>

<style>
.varela {
    font-family: 'Varela';
}

.bangers {
    font-family: 'Bangers';
}
</style>