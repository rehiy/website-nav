<script lang="ts" setup>
import VueMarkdown from 'vue-markdown-render';

import { ISetting } from '@/types';

defineOptions({
    name: 'LayoutAbout',
});

defineProps<{
    setting: ISetting
}>();
</script>

<template>
    <div class="nav-section text-body">
        <h4 id="about_us" class="nav-section__title">
            <span class="material-symbols-outlined">brand_awareness</span>
            <span class="ms-3">关于本站</span>
        </h4>
        <vue-markdown :source="setting.about_us" />
    </div>
</template>

<style scoped lang="less">
.nav-section {
    padding: 10px 30px 20px;

    &__title {
        font-size: 17px;
        font-weight: 400;
        margin: 16px 0 20px;
    }
}
</style>
