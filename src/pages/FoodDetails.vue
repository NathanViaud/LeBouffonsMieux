<script setup lang="ts">
import { useUserStore } from '@/stores/user.store.ts';
import { computed } from 'vue';
import { getAlcohol, getCarbohydrate, getEnergy, getLipid, getProtein, getWater } from '@/utils';
import { router } from '@/router.ts';
import DailyResult from '@/components/DailyResult.vue';
import BackButton from '@/components/BackButton.vue';

const userStore = useUserStore();

const props = defineProps<{
    id: string
}>();

const currentFood = userStore.getFood(Number(props.id));
if(!currentFood) {
    router.push('/search');
}

const data = computed(() => [
    {
        name: 'Energy',
        amount: `${getEnergy(currentFood!).toFixed(1)} / ${(getEnergy(currentFood!) * 4.184).toFixed(1)}`,
        unit: 'kCal / kJoule',
        recommendation: "2500 / 10460"
    },
    {
        name: 'Water',
        amount: getWater(currentFood!).toFixed(1),
        unit: 'mL (g)',
        recommendation: 2500
    },
    {
        name: 'Carbohydrate',
        amount: getCarbohydrate(currentFood!).toFixed(1),
        unit: 'g',
        recommendation: "280-310"
    },
    {
        name: 'Lipid',
        amount: getLipid(currentFood!).toFixed(1),
        unit: 'g',
        recommendation: "100-110"
    },
    {
        name: 'Protein',
        amount: getProtein(currentFood!).toFixed(1),
        unit: 'g',
        recommendation: 95
    },
    {
        name: 'Alcohol',
        amount: getAlcohol(currentFood!).toFixed(1),
        unit: 'g',
        recommendation: 0
    },
]);

</script>

<template>
    <div class="flex flex-col gap-3">
        <BackButton />
        <h2 class="text-2xl font-semibold">
            {{ currentFood!.description }}
        </h2>
        <p class="text-gray-500">
            {{ currentFood!.quantity }}g
        </p>
        <DailyResult :data="data" />
    </div>
</template>