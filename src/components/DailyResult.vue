<script setup lang="ts">
import { Table, TableRow, TableHeader, TableHead, TableBody, TableCell } from '@/components/ui/table';

defineProps<{
    data: {
        name: string;
        amount: string;
        unit: string;
        recommendation: string | number;
    }[],
    hideRecommendation?: boolean;
}>()

</script>

<template>
    <div class="">
        <Table>
        <TableHeader>
            <TableRow>
                <TableHead>Nutriments</TableHead>
                <TableHead class="text-right">Average Amount</TableHead>
                <TableHead>Unit</TableHead>
                <TableHead v-if="!hideRecommendation">Daily Recommendation</TableHead>
            </TableRow>
        </TableHeader>
        <TableBody>
            <TableRow v-for="item in data">
                <TableCell class="font-bold">{{ item.name }}</TableCell>
                <TableCell class="text-right">{{ item.amount }}</TableCell>
                <TableCell>{{ item.unit }}</TableCell>
                <TableCell v-if="!hideRecommendation">{{ item.recommendation }}</TableCell>
            </TableRow>
        </TableBody>
    </Table>
    </div>
</template>