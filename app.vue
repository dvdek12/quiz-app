<template>
  <div class="overflow-x-hidden dark">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup>
useHead({
  htmlAttrs: {
    class: 'dark'
  }
})
</script>


