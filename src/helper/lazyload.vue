<script lang="ts" setup>
import { onMounted, ref } from 'vue';

defineOptions({
    name: 'LazyloadImage',
});

defineProps<{
    alt?: string
    src?: string
}>();

const lazyImageRef = ref();
const io = new IntersectionObserver(([entry]) => {
    if (entry.isIntersecting) {
        const img = entry.target as HTMLImageElement;
        if (img.dataset.src) {
            img.src = img.dataset.src;
        }
        io.unobserve(img);
        io.disconnect();
    }
});

onMounted(() => {
    io.observe(lazyImageRef.value);
});
</script>

<template>
    <img ref="lazyImageRef" :alt="alt" src="./assets/link.svg" :data-src="src">
</template>

<style scoped lang="less">
img {
    aspect-ratio: 1/1;
}
</style>
