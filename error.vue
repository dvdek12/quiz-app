<template>
    <NuxtLayout name="404">
        <span class="text-white text-xl ">
            Strona: <i>{{ fullPath }}</i> nie istnieje
        </span>
        <NuxtLink to="/" class="text-blue-400 underline text-xl ">
            Wróć
        </NuxtLink>
    </NuxtLayout>
</template>

<script setup>
const { fullPath } = useRoute()
</script>