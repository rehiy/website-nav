<script lang="ts" setup>
import { ISetting } from '@/types';

defineOptions({
    name: 'LayoutAFooter',
});

defineProps<{
    setting: ISetting
}>();

const year = new Date().getFullYear();

const gotoTop = () => {
    const nav = document.querySelector('.nav-container');
    nav?.scrollTo({ top: 0, behavior: 'smooth' });
};
</script>

<template>
    <footer class="d-flex bg-light p-4 pb-3">
        <div class="flex-fill text-body-secondary">
            <div class="mb-2">
                &copy; 2021-{{ year }} <a :href="setting.copyright_url" target="_blank">{{ setting.copyright }}</a>
            </div>
            <div>
                当前页面由 <a href="https://www.rehiy.com" target="_blank">若海</a> 基于 Bootstrap&Vue 构建，
                源码托管于 <a href="https://cnb.cool/tdp/nav" target="_blank">云原生构建（CNB）</a>
            </div>
        </div>
        <div class="goto-top">
            <a href="#" @click="gotoTop">
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
