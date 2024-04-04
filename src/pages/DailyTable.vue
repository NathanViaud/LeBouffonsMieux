<script setup lang="ts">
import DailyResult from '@/components/DailyResult.vue';
import DailyList from '@/components/DailyList.vue';
import { useUserStore } from '@/stores/user.store.ts';

const userStore = useUserStore();

const dataFood = [
    {
        Name: 'Bread',
        Amount: 55
    },
    {
        Name: 'Beaf Steak',
        Amount: 110
    }
]
const data = [
    {
        Name: 'Water',
        Amount: 37.5,
        Unit: 'g',
        Recommendation: 2500
    },
    {
        Name: 'Energy',
        Amount: 267,
        Unit: 'kCal',
        Recommendation: 2600
    }
]

</script>

<template>
    <div>
        <div class="py-5">
            <p class="text-center font-bold text-lg">Result of your daily nutritional intake</p>
        </div>
        <div class="w-3/4 mx-auto">
            <p class="font-bold pb-3">Daily food list</p>
            <div class="flex gap-2">
                <div class="flex flex-col gap-2 w-full">
                    <DailyList :dataFood="dataFood"/>
                </div>
            </div>
        </div>
        <div class="border border-black w-3/4 rounded-lg mx-auto"></div>
        <div class="w-3/4 mx-auto py-4">
            <p class="font-bold pb-3">Nutrient intake</p>
            <div class="flex gap-2">
                <div class="flex flex-col gap-2 w-full">
                    <DailyResult :data="data"/>
                </div>
            </div>
        </div>
    </div>
</template>