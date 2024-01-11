<template>
    <div class="w-screen h-screen bg-gray-700 flex flex-col items-center justify-evenly">
        <div class="bg-blue-400 py-3 px-6 mt-2 w-1/4 rounded-lg">
            <h2 class="text-center text-4xl font-semibold text-white">
                QUIZ
            </h2>
        </div>

        <div class="w-1/2 ">
            <slot/>
        </div>
    </div>
</template>