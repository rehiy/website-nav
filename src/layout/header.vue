<script lang="ts" setup>
import { ISetting } from '@/types';

defineOptions({
    name: 'LayoutHeader',
});

defineProps<{
    setting: ISetting
}>();

const gotoTop = () => {
    const nav = document.querySelector('.nav-container');
    nav?.scrollTo({ top: 0, behavior: 'smooth' });
};
</script>

<template>
    <nav id="top" class="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
        <div class="container-fluid">
            <a class="navbar-brand" href="#" @click="gotoTop()">
                <img src="/assets/logo.png">
            </a>
            <div id="navbarSupported" class="collapse navbar-collapse">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li v-for="item in setting.nav_menu" :key="item.url" class="nav-item">
                        <a class="nav-link active" :href="item.url" target="_blank">
                            {{ item.title }}
                        </a>
                    </li>
                </ul>
                <form class="d-flex">
                    <input class="form-control me-2" type="search" placeholder="暂未开发">
                    <button class="btn btn-outline-light text-nowrap" type="submit">
                        搜索
                    </button>
                </form>
            </div>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupported">
                <span class="navbar-toggler-icon" />
            </button>
        </div>
    </nav>
</template>

<style scoped lang="less">
.navbar-brand {
    width: calc(var(--sidebar-width) - 1rem);

    img {
        max-width: 100%;
        max-height: 44px;
    }
}

input[type="search"] {
    min-width: 200px;
}

button[aria-expanded="true"] {
    margin-top: 12px;
    margin-bottom: 6px;
}
</style>
