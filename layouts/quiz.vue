<template>
    <div class="w-screen min-h-screen bg-gray-700 flex flex-col items-center justify-evenly space-y-6 overflow-x-hidden">
        <div class="bg-blue-400 py-3 px-6 mt-2 w-1/2 md:w-1/4 rounded-lg">
            <h2 class="text-center text-2xl md:text-4xl font-semibold text-white">
                QUIZ
            </h2>
        </div>

        <div class="w-full sm:w-3/4 lg:w-1/2 px-6">
            <slot/>
        </div>
    </div>
</template>