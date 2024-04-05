<script setup lang="ts">
import DailyResult from '@/components/DailyResult.vue';
import DailyList from '@/components/DailyList.vue';
import { useUserStore } from '@/stores/user.store';
import { computed } from 'vue';

const userStore = useUserStore();

const data = computed(() => [
    {
        name: 'Energy',
        amount: `${userStore.getTotalEnergy.toFixed(1)} / ${(userStore.getTotalEnergy * 4.184).toFixed(1)}`,
        unit: 'kCal / kJoule',
        recommendation: "2500 / 10460"
    },
    {
        name: 'Water',
        amount: userStore.getTotalWater.toFixed(1),
        unit: 'mL (g)',
        recommendation: 2500
    },
    {
        name: 'Carbohydrate',
        amount: userStore.getTotalCarbohydrate.toFixed(1),
        unit: 'g',
        recommendation: "280-310"
    },
    {
        name: 'Lipid',
        amount: userStore.getTotalLipid.toFixed(1),
        unit: 'g',
        recommendation: "100-110"
    },
    {
        name: 'Protein',
        amount: userStore.getTotalProtein.toFixed(1),
        unit: 'g',
        recommendation: 95
    },
    {
        name: 'Alcohol',
        amount: userStore.getTotalAlcohol.toFixed(1),
        unit: 'g',
        recommendation: 0
    },
]);
</script>

<template>
    <div>
        <div class="py-5">
            <h2 class="text-center font-bold text-3xl">Result of your daily nutritional intake</h2>
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