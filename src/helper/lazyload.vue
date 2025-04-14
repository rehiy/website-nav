<script lang="ts" setup>
import { onMounted, ref } from 'vue';

defineOptions({
    name: 'LazyloadImage',
});

withDefaults(
    defineProps<{
        src: string
        alt?: string
        lazy?: string
    }>(),
    {
        alt: 'img',
        lazy: './assets/link.svg',
    },
);

const lazyImageRef = ref();
const io = new IntersectionObserver(([entry]) => {
    if (entry.isIntersecting) {
        const img = entry.target as HTMLImageElement;
        img.src = img.dataset.src || '';
        io.unobserve(img);
        io.disconnect();
    }
});

onMounted(() => {
    io.observe(lazyImageRef.value);
});
</script>

<template>
    <img ref="lazyImageRef" :alt="alt" :src="lazy" :data-src="src || lazy">
</template>

<style scoped lang="less">
img {
    aspect-ratio: 1/1;
}
</style>
