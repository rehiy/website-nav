<script lang="ts" setup>
defineOptions({
    name: 'LayoutAFooter',
});

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
                &copy; 2021-{{ year }} <a href="https://tdp.fan/#About" target="_blank">腾讯云开发者先锋</a>
            </div>
            <div>当前页面由 <a href="https://www.rehiy.com" target="_blank">若海</a> 基于 Bootstrap&Vue 构建；数据收集自互联网，如有侵权敬请告知。</div>
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
