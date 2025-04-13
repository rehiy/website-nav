<script lang="ts" setup>
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
            <i class="fa fa-heart" /> 关于本站
        </h4>
        <div>{{ setting.about_us }}</div>
    </div>
</template>

<style scoped lang="less">
.nav-section {
    padding: 10px 30px 20px;

    &__title {
        font-size: 17px;
        font-weight: 400;
        margin: 16px 0 20px;

        i {
            margin-right: 7px;
        }
    }
}
</style>
