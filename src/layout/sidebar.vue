<script lang="ts" setup>
import { ISetting, ICategory } from '@/types';

defineOptions({
    name: 'LayoutSidebar',
});

defineProps<{
    setting: ISetting,
    categories: ICategory[]
}>();

const goToAnchor = (id: string) => {
    const top = document.getElementById(id)?.offsetTop || 0;
    const nav = document.querySelector('.nav-container');
    nav?.scrollTo({ top: top - 80, behavior: 'smooth' });
};
</script>

<template>
    <ul class="sidenav__list">
        <li v-for="category in categories" :key="category.title" class="border-bottom">
            <span class="sidenav__list__item multiple" @click="category.expand = !category.expand">
                <span>
                    <span class="material-symbols-outlined">{{ category.icon || 'done_all' }}</span>
                    <span class="ms-3">{{ category.title }}</span>
                </span>
                <span class="arrow" :class="[category.expand ? 'arrow--expand' : '']">
                    <span class="material-symbols-outlined">keyboard_arrow_right</span>
                </span>
            </span>
            <ul v-if="category.expand">
                <li v-for="classify in category.classifies" :key="classify.title" class="border-bottom">
                    <span class="sidenav__list__item" @click="goToAnchor(classify.title.replace(/\s/, '_'))">
                        <span class="material-symbols-outlined">{{ classify.icon || 'arrow_right' }}</span>
                        <span class="ms-2">{{ classify.title }}</span>
                    </span>
                </li>
            </ul>
        </li>
        <li v-if="setting.about_us">
            <span class="sidenav__list__item" @click="goToAnchor('about_us')">
                <span class="material-symbols-outlined">brand_awareness</span>
                <span class="ms-3">关于本站</span>
            </span>
        </li>
    </ul>
</template>

<style scoped lang="less">
ul {
    list-style: none;
}

.sidenav__list {
    padding: 20px;

    &__item {
        text-decoration: none;
        display: block;
        padding: 13px 5px;
        transition: all 0.23s ease-in-out;
        cursor: pointer;

        &:hover {
            color: #6c757d;
        }

        &.multiple {
            display: flex;
            align-items: center;
            justify-content: space-between;
            user-select: none;

            .arrow {
                float: right;
                transition: transform 0.3s ease-in-out;

                &--expand {
                    transform: rotate(90deg);
                }
            }
        }
    }

    li:last-child {
        border-bottom: none !important;
    }
}
</style>
