<script lang="ts" setup>
import { Catogories } from '@/helper/config';
const item = Catogories.at(-1);

defineOptions({
    name: 'LayoutAbout',
});
</script>

<template>
    <div v-if="item" class="nav-section text-body">
        <h4 :id="item.title.replace(/\s/, '_')" class="nav-section__title">
            <i class="item.icon ? item.icon : 'fa fa-tags'" /> {{ item.title }}
        </h4>
        <div>{{ item.description }}</div>
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
