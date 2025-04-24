<script lang="ts" setup>
import { ref } from 'vue';

import { ICategory, ISetting } from '@/types';
import { getSetting, getCategories } from '@/helper/config';

import Header from '@/layout/header.vue';
import Sidebar from '@/layout/sidebar.vue';
import Search from '@/layout/search.vue';
import Section from '@/layout/section.vue';
import Topics from '@/layout/topics.vue';
import Footer from '@/layout/footer.vue';

defineOptions({ name: 'LayoutIndex' });

const setting = ref({} as ISetting);
getSetting().then(v => setting.value = v);

const categories = ref([] as ICategory[]);
const originData = ref([] as ICategory[]);
getCategories().then(v => categories.value = originData.value = v);
</script>

<template>
    <div class="vh-100 d-flex flex-column">
        <Header :setting="setting" />
        <main class="d-flex overflow-hidden">
            <div class="nav-sidebar scrollbar-y d-none d-md-block bg-light border-end">
                <Sidebar :setting="setting" :categories="categories" />
            </div>
            <div class="nav-container scrollbar-y">
                <Search v-model="categories" :origin="originData" />
                <template v-for="category in categories" :key="category.title">
                    <template v-for="classify in category.classifies" :key="classify.title">
                        <Section :classify="classify" />
                    </template>
                </template>
                <Topics :setting="setting" />
                <Footer :setting="setting" />
            </div>
        </main>
    </div>
</template>

<style scoped lang="less">
.nav-container {
    flex: 1;
}

.nav-sidebar {
    width: var(--sidebar-width);
}
</style>
