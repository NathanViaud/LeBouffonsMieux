<script setup lang="ts">
import { Table, TableHead, TableRow, TableHeader, TableBody, TableCell } from '@/components/ui/table';
import { AbridgedFoodNutrients } from '@/types';
import { computed } from 'vue';

const props = defineProps<{
    nutrients: AbridgedFoodNutrients[];
}>();

const filter = [
    'SFA',
    'PUFA',
    'MUFA',
    'TFA',
];

//? Filtering out unwanted nutrients
const filteredNutrients = computed(() => {
    return props.nutrients.filter(nutrient => {
        if (!nutrient.name) return false;
        const [name] = nutrient.name.split(' ');
        return !filter.includes(name);
    });
});
</script>

<template>
    <Table>
        <TableHeader>
            <TableRow>
                <TableHead>Name</TableHead>
                <TableHead class="text-right">Amount</TableHead>
                <TableHead>Unit</TableHead>
            </TableRow>
        </TableHeader>
        <TableBody>
            <TableRow v-for="nutrient of filteredNutrients">
                <TableCell>{{ nutrient.name }}</TableCell>
                <TableCell class="text-right">{{ nutrient.amount }}</TableCell>
                <TableCell>{{ nutrient.unitName }}</TableCell>
            </TableRow>
        </TableBody>

    </Table>
</template>