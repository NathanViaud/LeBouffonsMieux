<script setup lang="ts">
import { Table, TableRow, TableHeader, TableHead, TableBody, TableCell } from '@/components/ui/table';

defineProps<{
    dataFood: {
        Name: string
        Amount: Number
    }[]
}>()

</script>

<template>
    <div class="">
        <Table>
        <TableHeader>
            <TableRow>
                <TableHead>Food</TableHead>
                <TableHead>Amount</TableHead>
            </TableRow>
        </TableHeader>
        <TableBody>
            <TableRow v-for="item in dataFood">
                <TableCell class="font-bold">{{ item.Name }}</TableCell>
                <TableCell>{{ item.Amount }}</TableCell>
            </TableRow>
        </TableBody>
    </Table>
    </div>
</template>