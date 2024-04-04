<script setup lang="ts">
import { Table, TableRow, TableHeader, TableHead, TableBody, TableCell } from '@/components/ui/table';

defineProps<{
    data: {
        Name: string
        Amount: Number
        Unit: String
        Recommendation: Number
    }[]
}>()

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
                <TableCell class="font-bold">{{ item.Name }}</TableCell>
                <TableCell>{{ item.Amount }}</TableCell>
                <TableCell>{{ item.Unit }}</TableCell>
                <TableCell>{{ item.Recommendation }}</TableCell>
            </TableRow>
        </TableBody>
    </Table>
    </div>
</template>