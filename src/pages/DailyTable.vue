<script setup lang="ts">
import DailyResult from '@/components/DailyResult.vue';
import DailyList from '@/components/DailyList.vue';
import { useUserStore } from '@/stores/user.store';

const userStore = useUserStore();

const data = [
    {
        name: 'Energy',
        amount: `${userStore.getEnergy.toFixed(1)} / ${(userStore.getEnergy * 4.184).toFixed(1)}`,
        unit: 'kCal / kJoule',
        recommendation: "2500 / 10460"
    },
    {
        name: 'Water',
        amount: userStore.getWater.toFixed(1),
        unit: 'mL (g)',
        recommendation: 2500
    },
    {
        name: 'Carbohydrate',
        amount: userStore.getCarbohydrate.toFixed(1),
        unit: 'g',
        recommendation: "280-310"
    },
    {
        name: 'Lipid',
        amount: userStore.getLipid.toFixed(1),
        unit: 'g',
        recommendation: "100-110"
    },
    {
        name: 'Protein',
        amount: userStore.getProtein.toFixed(1),
        unit: 'g',
        recommendation: 95
    },
    {
        name: 'Alcohol',
        amount: userStore.getAlcohol.toFixed(1),
        unit: 'g',
        recommendation: 0
    },
]

</script>

<template>
    <div>
        <div class="py-5">
            <p class="text-center font-bold text-3xl">Result of your daily nutritional intake</p>
        </div>
        <div class="w-3/4 mx-auto">
            <p class="font-bold pb-3 text-xl">Daily food list</p>
            <div class="flex gap-2">
                <div class="flex flex-col gap-2 w-full">
                    <DailyList :dataFood="userStore.foodList"/>
                </div>
            </div>
        </div>
        <div class="border border-black w-3/4 rounded-lg mx-auto my-3"></div>
        <div class="w-3/4 mx-auto py-4">
            <p class="font-bold pb-3 text-xl">Nutrient intake</p>
        </div>
        <div class="w-3/4 mx-auto py-4">
            <p class="font-bold pb-3 text-md">Macroelement total</p>
            <div class="flex gap-2">
                <div class="flex flex-col gap-2 w-full">
                    <DailyResult :data="data"/>
                </div>
            </div>
        </div>
    </div>
</template>