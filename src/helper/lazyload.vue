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

const io = new IntersectionObserver((entries) => {
    const { target, isIntersecting } = entries[0];
    if (isIntersecting) {
        (target as HTMLImageElement).src = target.getAttribute('data-img-src') || '';
        io.unobserve(target);
        io.disconnect();
    }
});

onMounted(() => {
    io.observe(lazyImageRef.value);
});
</script>

<template>
    <img ref="lazyImageRef" class="lazy-img" :alt="alt" :src="lazy" :data-img-src="src || lazy">
</template>

<style scoped lang="less">
.lazy-img {
    aspect-ratio: 1/1;
}
</style>
