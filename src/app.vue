<script lang="ts" setup>
import { ref } from 'vue';

import { menus } from '@/website';

import Header from '@/layout/header.vue';
import Footer from '@/layout/footer.vue';
import Sidebar from '@/layout/sidebar.vue';
import Section from '@/layout/section.vue';
import About from '@/layout/about.vue';

defineOptions({
    name: 'LayoutIndex',
});

const categories = ref(
    menus.concat({
        title: '关于本站',
        icon: 'fa fa-heart',
    })
);
</script>

<template>
    <Header />
    <main class="d-flex">
        <div class="nav-sidebar d-none d-md-block bg-light border-end">
            <Sidebar :categories="categories" />
        </div>
        <div class="nav-container">
            <template v-for="category in categories" :key="category.title">
                <template v-for="classify in category.classifies" :key="classify.title">
                    <Section v-if="classify.websites" :classify="classify" />
                </template>
            </template>
            <About />
            <Footer />
        </div>
    </main>
</template>

<style scoped lang="less">
main {
    height: calc(100% - var(--header-height));
    overflow: hidden;
}

.nav-sidebar {
    width: var(--sidebar-width);
}

.nav-container {
    flex: 1;
}

.nav-sidebar,
.nav-container {
    height: 100%;
    overflow-y: auto;
    transition: all 0.5s ease-in-out;

    &::-webkit-scrollbar {
        width: var(--scrollbar-width);
    }

    &::-webkit-scrollbar-thumb {
        visibility: hidden;
        background: #808281;
        transition: visibility 0.5s ease-in-out;
    }

    &:hover {
        &::-webkit-scrollbar-thumb {
            visibility: visible;
        }
    }
}
</style>
