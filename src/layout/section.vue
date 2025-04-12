<script lang="ts" setup>
import { IClassify } from '@/helper/config';
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
            <i class="classify.icon ? classify.icon : 'fa fa-tags'" /> {{ classify.title }}
        </h4>
        <div class="nav-section__main row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xxl-4 g-4">
            <div v-for="item in classify.websites" :key="item.url" class="col d-flex">
                <div class="nav-section__item flex-fill">
                    <a :href="item.url" class="d-flex align-items-center" target="_blank">
                        <div class="nav-section__item__left">
                            <LazyloadImage :src="item.logo ? `./assets/logos/${item.logo}` : ''" :alt="item.title" />
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

        i {
            margin-right: 7px;
        }
    }

    &__item {
        background: #fff;
        border-radius: 4px;
        transition: all 0.3s ease;
        box-shadow: 1px 1px 12px 0px #d4e0e8;

        &:hover {
            transform: translate3d(0, -6px, 0);
            box-shadow: 0 26px 40px -24px rgba(0, 36, 100, 0.3);
            cursor: pointer;
        }

        a {
            color: inherit;
            padding: 12px 15px;
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

            p {
                line-height: 1.4;
                overflow: hidden;
                text-overflow: ellipsis;
                line-clamp: 2;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
            }
        }

        &__tip {
            position: absolute;
            top: 0;
            left: 50%;
            width: 90%;
            transform: translate(-50%, -25px);
            transition: opacity 0.7s ease-in-out;
            text-align: center;
            padding: 10px;
            background: rgba(0, 0, 0, 0.8);
            color: #eee;
            border-radius: 3px;
            word-break: break-all;
            cursor: default;
            opacity: 0;

            &::after {
                content: '';
                position: absolute;
                top: 100%;
                left: 50%;
                transform: translateX(-50%);
                width: 0;
                height: 0;
                border: 5px solid transparent;
                border-top-color: rgba(0, 0, 0, 0.8);
            }
        }

        &:hover &__tip {
            opacity: 0.9;
        }
    }
}
</style>
