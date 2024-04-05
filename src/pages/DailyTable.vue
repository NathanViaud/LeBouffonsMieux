<script setup lang="ts">
import DailyResult from '@/components/DailyResult.vue';
import DailyList from '@/components/DailyList.vue';
import { useUserStore } from '@/stores/user.store';

const userStore = useUserStore();

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
                    <DailyResult/>
                </div>
            </div>
        </div>
    </div>
</template>