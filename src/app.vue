<script lang="ts" setup>
import { ref } from 'vue';

import { ICategory, ISetting } from '@/types';
import { getSetting, getCategories } from '@/helper/config';

import Header from '@/layout/header.vue';
import Footer from '@/layout/footer.vue';
import Sidebar from '@/layout/sidebar.vue';
import Section from '@/layout/section.vue';
import About from '@/layout/about.vue';

defineOptions({
    name: 'LayoutIndex',
});

const setting = ref({} as ISetting);
getSetting().then(v => setting.value = v);

const categories = ref([] as ICategory[]);
getCategories().then(v => categories.value = v);
</script>

<template>
    <div v-if="setting.title" class="vh-100 d-flex flex-column">
        <Header :setting="setting" :categories="categories" />
        <main v-if="categories.length" class="d-flex overflow-hidden">
            <div class="nav-sidebar scrollbar-y d-none d-md-block bg-light border-end">
                <Sidebar :setting="setting" :categories="categories" />
            </div>
            <div class="nav-container scrollbar-y">
                <template v-for="category in categories" :key="category.title">
                    <template v-for="classify in category.classifies" :key="classify.title">
                        <Section v-if="classify.websites" :classify="classify" />
                    </template>
                </template>
                <About :setting="setting" />
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
