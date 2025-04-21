<script lang="ts" setup>
import { IClassify } from '@/types';
import LazyloadImage from '@/helper/lazyload.vue';

defineOptions({
    name: 'LayoutSection',
});

defineProps<{
    classify: IClassify
}>();
</script>

<template>
    <div class="nav-section text-body">
        <h4 :id="classify.title.replace(/\s/, '_')" class="nav-section__title">
            <span class="material-symbols-outlined">{{ classify.icon || 'done_all' }}</span>
            <span class="ms-3">{{ classify.title }}</span>
        </h4>
        <div class="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xxl-4 g-4">
            <div v-for="item in classify.websites" :key="item.url" class="col d-flex">
                <div class="nav-section__item flex-fill">
                    <a :href="item.url" class="d-flex align-items-center" target="_blank">
                        <div class="nav-section__item__left">
                            <LazyloadImage :alt="item.title" :src="item.logo" />
                        </div>
                        <div class="nav-section__item__right">
                            <h5 class="my-2">{{ item.title }}</h5>
                            <p class="my-2 text-body-secondary">{{ item.description }}</p>
                        </div>
                    </a>
                    <div class="nav-section__item__tip">
                        {{ item.url }}
                    </div>
                </div>
            </div>
        </div>
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

    &__item {
        position: relative;
        background: #fff;
        border-radius: 4px;
        transition: all 0.3s ease;
        box-shadow: 2px 2px 8px 0px #d4e0e8;

        &:hover {
            transform: translate3d(0, -5px, 0);
            box-shadow: 10px 10px 8px 0px #d4e0e8;
            cursor: pointer;
        }

        a {
            color: inherit;
            padding: 13px 15px;
            text-decoration: none;
        }

        a &__left {
            width: 40px;
            height: 40px;
            margin-right: 13px;
            border-radius: 50%;
            overflow: hidden;

            img {
                width: 100%;
                height: 100%;
                object-fit: contain;
            }
        }

        a &__right {
            flex: 1;

            h5,
            p {
                line-height: 1.4;
                overflow: hidden;
                display: -webkit-box;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
            }

            h5 {
                -webkit-line-clamp: 1;
            }
        }

        &__tip {
            display: none;
            padding: 10px;
            width: 100%;
            position: absolute;
            left: 50%;
            bottom: 80%;
            transform: translate(-50%, -25px);
            background: rgba(0, 0, 0, 0.7);
            color: #eee;
            border-radius: 3px;
            word-break: break-all;
            text-align: center;
            cursor: default;

            &::after {
                width: 0;
                height: 0;
                position: absolute;
                top: 100%;
                left: 50%;
                transform: translateX(-50%);
                border: 5px solid transparent;
                border-top-color: rgba(0, 0, 0, 0.8);
                content: '';
            }
        }

        &:hover &__tip {
            display: block;
        }
    }
}
</style>
