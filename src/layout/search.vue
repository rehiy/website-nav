<script lang="ts" setup>
import { watch, ref } from 'vue';
import { ICategory } from '@/types';

defineOptions({ name: 'LayoutSearch' });

const model = defineModel<ICategory[]>();
const props = defineProps<{ data: ICategory[] }>();

const filter = ref('');
watch(filter, input => {
    input = input.toLowerCase().trim();
    model.value = !input ? props.data : props.data.map(category => {
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
    <form class="mt-4">
        <div class="input-group flex-nowrap">
            <span class="input-group-text">
                <span class="material-symbols-outlined">manage_search</span>
            </span>
            <input v-model="filter" type="search" class="form-control">
        </div>
    </form>
</template>

<style scoped lang="less">
form {
    width: 30%;
    min-width: 300px;
    margin: 0 auto;
}
</style>
