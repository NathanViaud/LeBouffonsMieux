<script setup lang="ts">
import { VisXYContainer, VisStackedBar, VisAxis } from '@unovis/vue'
import { computed } from 'vue';
import { useUserStore } from '@/stores/user.store.ts';

const userStore = useUserStore();

const recommended = {
    energy: 2500,
    water: 2500,
    carbohydrate: 310,
    lipid: 100,
    protein: 95,
    alcohol: 0
}

const category = [
    'Energy',
    'Water',
    'Carbohydrate',
    'Lipid',
    'Protein',
    'Alcohol'
]

type DataRecord = { x: number, y: number, y1: number, recommended: number, name: string }
const data = computed(() => [
    { x: 0, y: userStore.getTotalEnergy, recommended: recommended.energy },
    { x: 1, y: userStore.getTotalWater, recommended: recommended.water },
    { x: 2, y: userStore.getTotalCarbohydrate, recommended: recommended.carbohydrate },
    { x: 3, y: userStore.getTotalLipid, recommended: recommended.lipid },
    { x: 4, y: userStore.getTotalProtein, recommended: recommended.protein },
    { x: 5, y: userStore.getTotalAlcohol, recommended: recommended.alcohol },
])

const x = (d: DataRecord) => d.x
const y = [
    (d: DataRecord) => d.y,
    (d: DataRecord) => d.y1,
]

function getColor(d: DataRecord) {
    if(d.y > d.recommended + d.recommended * 0.1) {
        return '#FF4F4E'
    } else if(d.y < d.recommended - d.recommended * 0.1) {
        return '#D1D5DB'
    } else {
        return '#1acb9a'
    }
}

const color = (d: DataRecord) => getColor(d)
const tickFormat = (tick: number) => category[tick]

</script>

<template>
    <VisXYContainer :data="data">
        <VisStackedBar :x="x" :y="y" :color="color" />
        <VisAxis type='x' label='Nutriments' :tickFormat="tickFormat" />

        <VisAxis type='y' label='Amount / Recommanded amount' />
    </VisXYContainer>
</template>
