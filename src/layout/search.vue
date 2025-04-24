<script lang="ts" setup>
import { watch, ref } from 'vue';
import { ICategory } from '@/types';

defineOptions({ name: 'LayoutSearch' });

const model = defineModel<ICategory[]>();
const props = defineProps<{ origin: ICategory[] }>();

const filter = ref('');
watch(filter, input => {
    input = input.toLowerCase().trim();
    model.value = !input ? props.origin : props.origin.map(category => {
        const classifies = category.classifies?.map(classify => {
            return {
                ...classify,
                websites: classify.websites?.filter(v => {
                    return (v.title + v.description).toLowerCase().includes(input);
                }),
            };
        });
        return {
            ...category,
            classifies: classifies?.filter(v => v.websites?.length),
        };
    }).filter(v => v.classifies?.length);
});
</script>

<template>
    <div class="input-group input-group-lg">
        <span class="input-group-text">
            <span class="material-symbols-outlined">manage_search</span>
        </span>
        <input v-model="filter" type="search" class="form-control" placeholder="快速搜索">
    </div>
</template>

<style scoped lang="less">
.input-group {
    width: 45%;
    min-width: 300px;
    margin: 30px auto 10px;

    span {
        font-size: 2.5rem;
        color: var(--bs-dark);
    }

    input {
        line-height: 2;
        font-size: 1.5rem;
    }
}
</style>
