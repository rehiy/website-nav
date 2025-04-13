<script lang="ts" setup>
import { ISetting } from '@/types';

defineOptions({
    name: 'LayoutAFooter',
});

defineProps<{
    setting: ISetting
}>();

const year = new Date().getFullYear();

const goToAnchor = () => {
    const nav = document.querySelector('.nav-container');
    nav?.scrollTo({ top: 0, behavior: 'smooth' });
};
</script>

<template>
    <footer class="d-flex bg-light p-4 pb-3">
        <div class="flex-fill text-body-secondary">
            <div class="mb-2">
                &copy; 2021-{{ year }} <a :href="setting.url" target="_blank">{{ setting.copyright }}</a>
            </div>
            <div>
                当前页面由 <a href="https://www.rehiy.com" target="_blank">若海</a> 基于 Bootstrap&Vue 构建；数据收集自互联网，如有侵权敬请告知。
            </div>
        </div>
        <div class="goto-top">
            <a href="#" @click="goToAnchor">
                <i class="fa fa-jet-fighter-up" />
            </a>
        </div>
    </footer>
</template>

<style scoped lang="less">
.goto-top {
    font-size: 2em;
}
</style>
