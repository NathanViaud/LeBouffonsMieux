<script setup lang="ts">
import { Table, TableRow, TableHeader, TableHead, TableBody, TableCell } from '@/components/ui/table';
import { useSearchStore } from '@/stores/search.store.ts';
import { createFood, getFormattedDate } from '@/utils';
import { router } from '@/router.ts';
import Spinner from '@/components/Spinner.vue';
import { useUserStore } from '@/stores/user.store.ts';
import QuantityDialog from '@/components/QuantityDialog.vue';
import ResultsPagination from '@/components/ResultsPagination.vue';
import { fetchItemById } from '@/services';

const searchStore = useSearchStore();
const userStore = useUserStore();

function goToDetails(id: number) {
    router.push(`/search/details/${id}`)
}

async function saveProduct(id: number, quantity: number) {
    //? Fetching the true SearchResultsFoods not the one returned by the search
    const product = await fetchItemById(id);

    const newProduct = createFood(product, quantity);
    userStore.addFood(newProduct);
}
</script>

<template>
    <div class="flex flex-col gap-3 w-full">
        <div class="rounded-md border">
            <Table v-if="searchStore.searchResultsFoods.length > 0 && !searchStore.loading" >
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
                    <TableRow
                        v-for="result in searchStore.searchResultsFoods"
                        @click="goToDetails(result.fdcId)"
                        class="cursor-pointer"
                    >
                        <TableCell class="font-medium">{{ result.ndbNumber }}</TableCell>
                        <TableCell>{{ result.description }}</TableCell>
                        <TableCell>{{ getFormattedDate(result.publishedDate) || 'not defined' }}</TableCell>
                        <TableCell>{{ result.foodCategory }}</TableCell>
                        <TableCell>
                            <QuantityDialog @save="saveProduct(result.fdcId, $event)" label="Add" variant="outline" />
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
            <div v-else class="w-full text-center h-24 justify-center flex items-center">
                <Spinner v-if="searchStore.loading" />
                <p v-else class="flex gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
                    </svg>
                    Nothing to display
                </p>
            </div>
        </div>
        <ResultsPagination class="m-auto" v-if="searchStore.totalPage > 0" />
    </div>
</template>