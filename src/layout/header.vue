<script lang="ts" setup>
import { ISetting } from '@/types';

defineOptions({ name: 'LayoutHeader' });
defineProps<{ setting: ISetting }>();

const gotoTop = () => {
    const nav = document.querySelector('.nav-container');
    nav?.scrollTo({ top: 0, behavior: 'smooth' });
};
</script>

<template>
    <nav class="navbar navbar-expand-md bg-primary">
        <div class="container-fluid">
            <a class="navbar-brand" href="#" @click="gotoTop()">
                <img :alt="setting.title" :src="setting.logo">
            </a>
            <button type="button" class="navbar-toggler" data-bs-toggle="collapse" data-bs-target=".navbar-collapse">
                <span class="navbar-toggler-icon" />
            </button>
            <div class="navbar-collapse collapse">
                <ul class="navbar-nav me-auto mb-2 mb-md-0">
                    <li v-for="item in setting.menus" :key="item.url" class="nav-item">
                        <a :href="item.url" target="_blank" class="nav-link">
                            {{ item.title }}
                        </a>
                    </li>
                </ul>
                <div class="d-flex">
                    &nbsp;
                </div>
            </div>
        </div>
    </nav>
</template>

<style scoped lang="less">
.navbar-nav {
    --bs-navbar-color: var(--bs-light);
    --bs-navbar-hover-color: var(--bs-white);
}

.navbar-brand {
    width: calc(var(--sidebar-width) - 13px);

    img {
        max-width: 100%;
        max-height: 44px;
    }
}
</style>
