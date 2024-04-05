<script setup lang="ts">
import { Table, TableRow, TableHeader, TableHead, TableBody, TableCell } from '@/components/ui/table';
import { Food } from '@/types';
import { Button } from '@/components/ui/button';
import { useUserStore } from '@/stores/user.store';
import { useToast } from '@/components/ui/toast/use-toast'
import { h } from 'vue';
import { router } from '@/router.ts';

const userStore = useUserStore();

const { toast } = useToast();

defineProps<{
    dataFood: Food[]
}>()

function deleteProduct(food: Food) {
    userStore.deleteFood(food);

    toast({
        title: 'Product deleted',
        description: `${food.description} has been deleted from your daily list.`,
        variant: 'destructive',
        action: h(Button, {
            variant: 'destructive',
            onClick: () => {
                userStore.addFood(food);
            },
            class: 'border b-white'
        },
        'Undo')
    });
}

function goToFoodDetails(id: number) {
    router.push(`/food/details/${id}`);
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
            <TableRow v-for="item in dataFood" @click="goToFoodDetails(item.fdcId)" class="cursor-pointer">
                <TableCell class="font-bold">{{ item.description }}</TableCell>
                <TableCell class="text-right">{{ item.quantity }}</TableCell>
                <TableCell>g</TableCell>
                <TableCell>
                    <Button
                        @click.stop="deleteProduct(item)"
                        variant="outline"
                        size="icon"
                        class="bg-red-100 text-red-500 border-red-100 hover:bg-red-200 hover:text-red-500 hover:border-red-200">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                        </svg>
                    </Button>
                </TableCell>
            </TableRow>
        </TableBody>
    </Table>
    </div>
</template>