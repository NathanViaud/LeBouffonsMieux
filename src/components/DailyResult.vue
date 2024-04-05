<script setup lang="ts">
import { Table, TableRow, TableHeader, TableHead, TableBody, TableCell } from '@/components/ui/table';
import { useUserStore } from '@/stores/user.store.ts';

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
    <div class="">
        <Table>
        <TableHeader>
            <TableRow>
                <TableHead>Nutriments</TableHead>
                <TableHead>Average Amount</TableHead>
                <TableHead>Unit</TableHead>
                <TableHead>Daily Recommendation</TableHead>
            </TableRow>
        </TableHeader>
        <TableBody>
            <TableRow v-for="item in data">
                <TableCell class="font-bold">{{ item.name }}</TableCell>
                <TableCell>{{ item.amount }}</TableCell>
                <TableCell>{{ item.unit }}</TableCell>
                <TableCell>{{ item.recommendation }}</TableCell>
            </TableRow>
        </TableBody>
    </Table>
    </div>
</template>