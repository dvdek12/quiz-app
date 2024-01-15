<template>
    <div class="w-screen h-screen bg-gray-700 flex flex-col items-center justify-center space-y-6">
        <div class="bg-yellow-400 py-3 px-6 mt-2 w-1/4 rounded-lg">
            <h2 class="text-center text-4xl font-semibold text-black">
                PAGE NOT FOUND
            </h2>
        </div>

        <div class="w-1/2  text-center">
            <slot/>
        </div>
    </div>
</template>