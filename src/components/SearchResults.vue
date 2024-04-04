<script setup lang="ts">
import { Table, TableRow, TableHeader, TableHead, TableBody, TableCell } from '@/components/ui/table';
import { useSearchStore } from '@/stores/search.store.ts';
import { getFormattedDate } from '@/utils';
import { router } from '@/router.ts';
import Spinner from '@/components/Spinner.vue';
import { useUserStore } from '@/stores/user.store.ts';
import QuantityDialog from '@/components/QuantityDialog.vue';
import { Food, SearchResultFood } from '@/types';

const searchStore = useSearchStore();
const userStore = useUserStore();

function goToDetails(id: number) {
    router.push(`/details/${id}`)
}

function saveProduct(product: SearchResultFood, quantity: number) {
    const newProduct: Food = {
        ...product,
        quantity
    }
    userStore.addFood(newProduct);
}
</script>

<template>
    <div class="rounded-md border" v-if="searchStore.searchResults.length > 0 && !searchStore.loading">
        <Table >
            <TableHeader>
                <TableRow>
                    <TableHead>NDB Number</TableHead>
                    <TableHead>Description</TableHead>
                    <TableHead>Publication</TableHead>
                    <TableHead>Food Category</TableHead>
                    <TableHead></TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                <TableRow @click="goToDetails(result.fdcId)" v-for="result in searchStore.searchResults">
                    <TableCell class="font-medium">{{ result.ndbNumber }}</TableCell>
                    <TableCell>{{ result.description }}</TableCell>
                    <TableCell>{{ getFormattedDate(result.publishedDate) || 'not defined' }}</TableCell>
                    <TableCell>{{ result.foodCategory }}</TableCell>
                    <TableCell>
                        <QuantityDialog @save="saveProduct(result, $event)" label="Add" variant="outline" />
                    </TableCell>
                </TableRow>
            </TableBody>
        </Table>
    </div>
    <div v-else class="w-full text-center h-24 justify-center flex items-center">
        <Spinner v-if="searchStore.loading" />
        <p v-else>Nothing to display</p>
    </div>
</template>