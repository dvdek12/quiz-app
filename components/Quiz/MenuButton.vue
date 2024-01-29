<template>
    <NuxtLink :to="props.to">
                <button :class="['inline-flex items-center space-x-2  px-4 py-2 rounded-md w-full lg:w-auto', props.color, hoverColor]" >
                    <Icon :name="props.icon" color="white" size="16" />
                    <span class="text-white  text-md">
                        {{ props.content }} 
                    </span>
                </button>
    </NuxtLink>
</template>

<script setup>
const classes = computed(() => ``)

const hoverColor = computed(() => {
    const level = parseInt(props.color.slice(-3)) + 200
    const color = props.color.substring(3, props.color.length - 4)
    return `hover:bg-${color}-${level}`
})

const props = defineProps({
    to: String,
    icon: String,
    content: String,
    color: String
})

</script>