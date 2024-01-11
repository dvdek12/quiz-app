<template>
    <div :class="classes">
        <div v-for="unit in parseInt(max)" :key="unit">
            
            <div class="h-full" :class="{ 'bg-green-400' : unit <= props.current }">
                
            </div>

        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    current: Number,
    max: Number
})



const classes = computed(() => `grid w-full h-6 grid-flow-col grid-rows-1 `)







</script>