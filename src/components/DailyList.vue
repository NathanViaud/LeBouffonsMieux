<script setup lang="ts">
import { Table, TableRow, TableHeader, TableHead, TableBody, TableCell } from '@/components/ui/table';
import { Food } from '@/types';
import { Button } from '@/components/ui/button';
import { useUserStore } from '@/stores/user.store';

const userStore = useUserStore();


defineProps<{
    dataFood: Food[]
}>()

function deleteProduct(food: Food) {
    userStore.deleteFood(food);
}

</script>

<template>
    <div class="">
        <Table>
        <TableHeader>
            <TableRow>
                <TableHead>Food</TableHead>
                <TableHead class="text-right">Amount</TableHead>
                <TableHead>Unit</TableHead>
            </TableRow>
        </TableHeader>
        <TableBody>
            <TableRow v-for="item in dataFood">
                <TableCell class="font-bold">{{ item.description }}</TableCell>
                <TableCell class="text-right">{{ item.quantity }}</TableCell>
                <TableCell>g</TableCell>
                <TableCell>
                    <Button @click="deleteProduct(item)" class="">Delete</Button>
                </TableCell>
            </TableRow>
        </TableBody>
    </Table>
    </div>
</template>