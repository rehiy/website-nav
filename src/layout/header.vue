<script lang="ts" setup>
import { watch, ref } from 'vue';
import { ISetting, ICategory, IWebsite } from '@/types';

defineOptions({
    name: 'LayoutHeader',
});

const props = defineProps<{
    setting: ISetting,
    categories: ICategory[]
}>();

const websites = ref({} as IWebsite[]);

const filterValue = ref('');
watch(filterValue, (value) => {
    websites.value = props.categories.flatMap(category =>
        category.classifies?.flatMap(classify =>
            classify.websites?.filter(website =>
                (website.title + website.description).includes(value)
            ) || []
        ) || []
    );
});

const gotoTop = () => {
    const nav = document.querySelector('.nav-container');
    nav?.scrollTo({ top: 0, behavior: 'smooth' });
};
</script>

<template>
    <nav class="navbar navbar-expand-md bg-primary">
        <div class="container-fluid">
            <a class="navbar-brand" href="#" @click="gotoTop()">
                <img src="/assets/logo.png">
            </a>
            <button type="button" class="navbar-toggler" data-bs-toggle="collapse" data-bs-target=".navbar-collapse">
                <span class="navbar-toggler-icon" />
            </button>
            <div class="navbar-collapse collapse">
                <ul class="navbar-nav me-auto mb-2 mb-md-0">
                    <li v-for="item in setting.nav_menu" :key="item.url" class="nav-item">
                        <a :href="item.url" target="_blank" class="nav-link">
                            {{ item.title }}
                        </a>
                    </li>
                </ul>
                <form class="d-flex">
                    <div class="input-group flex-nowrap">
                        <span class="input-group-text">
                            <i class="fa fa-search" />
                        </span>
                        <input v-model="filterValue" type="search" class="form-control">
                    </div>
                </form>
            </div>
        </div>
        <div v-if="filterValue" class="list-group list-group-flush scrollbar-y">
            <div v-if="!websites.length" class="m-2">
                没有搜索到相关网站
            </div>
            <template v-for="item in websites" :key="item.url">
                <a :href="item.url" target="_blank" class="list-group-item list-group-item-action">
                    <h5 class="mb-1">{{ item.title }}</h5>
                    <p class="mb-1 text-muted">{{ item.description }}</p>
                </a>
            </template>
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

.list-group {
    width: 320px;
    max-height: 50vh;
    padding: 10px;
    position: absolute;
    top: calc(100% + 6px);
    right: 10px;
    z-index: 10;
    box-shadow: 2px 2px 8px 0px #d4e0e8;
    background-color: var(--bs-light);
}
</style>
