<script setup lang="ts">
import { Table, TableRow, TableHeader, TableHead, TableBody, TableCell } from '@/components/ui/table';
import { Food } from '@/types';

defineProps<{
    dataFood: Food[]
}>()

</script>

<template>
    <div class="">
        <Table>
        <TableHeader>
            <TableRow>
                <TableHead>Food</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Unit</TableHead>
            </TableRow>
        </TableHeader>
        <TableBody>
            <TableRow v-for="item in dataFood">
                <TableCell class="font-bold">{{ item.description }}</TableCell>
                <TableCell>{{ item.quantity }}</TableCell>
                <TableCell>g</TableCell>
            </TableRow>
        </TableBody>
    </Table>
    </div>
</template>