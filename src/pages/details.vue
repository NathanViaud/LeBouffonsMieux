<script setup lang="ts">
import { onMounted, Ref, ref } from 'vue';
import Spinner from '@/components/Spinner.vue';
import BackButton from '@/components/BackButton.vue';
import NutrientsTable from '@/components/NutrientsTable.vue';
import { Food, SearchResultFood } from '@/types';
import { getFormattedDate } from '@/utils';
import QuantityDialog from '@/components/QuantityDialog.vue';
import { fetchItemById } from '@/services';
import { useUserStore } from '@/stores/user.store';

const props = defineProps<{
    id: string
}>();

const userStore = useUserStore();

const food: Ref<SearchResultFood | null> = ref(null);
const loading = ref(false);

//! Contrary to what says the api documentation the search doesn't seem to return SearchResultFood
// const food = ref(searchStore.getItemById(Number(props.id)));

onMounted(async () => {
    if(!food.value) {
        loading.value = true;
        food.value = await fetchItemById(Number(props.id));
        loading.value = false;
    }
})

function saveProduct(product: SearchResultFood, quantity: number) {
    const newProduct = createFood(product, quantity);
    userStore.addFood(newProduct);
}
</script>

<template>
    <div class="flex flex-col gap-2">
        <BackButton />
        <div v-if="food" class="flex flex-col gap-5">
            <div class="flex flex-col gap-2">
                <h1 class="text-2xl font-semibold">
                    {{ food.description }}
                </h1>
                <p class="text-gray-500">
                    {{ getFormattedDate(food.publicationDate) }}
                </p>
                <QuantityDialog @save="saveProduct(food, $event)" label="Add to my list" variant="primary" />
            </div>
            <NutrientsTable :nutrients="food.foodNutrients" />
        </div>
        <div v-else class="flex w-full h-full min-h-28 text-center items-center justify-center">
            <Spinner v-if="loading" />
            <p v-else>Nothing to display</p>
        </div>
    </div>
</template>