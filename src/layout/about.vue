<script lang="ts" setup>
defineOptions({
    name: 'LayoutAbout',
});
</script>

<template>
    <div class="nav-section text-body">
        <h4 id="关于本站" class="nav-section__title">
            <i class="fa fa-heart" />
            关于本站
        </h4>
        <p>
            本站由腾讯云开发者先锋运营并维护，包含各类开发者工具网址。
        </p>
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
