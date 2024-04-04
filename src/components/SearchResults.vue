<script setup lang="ts">
import { Table, TableRow, TableHeader, TableHead, TableBody, TableCell } from '@/components/ui/table';
import { useSearchStore } from '@/stores/search.store.ts';
import { getFormattedDate } from '@/utils';
import { router } from '@/router.ts';
import Spinner from '@/components/Spinner.vue';
import { useUserStore } from '@/stores/user.store.ts';
import QuantityDialog from '@/components/QuantityDialog.vue';
import { Food } from '@/types';
import ResultsPagination from '@/components/ResultsPagination.vue';
import { fetchItemById } from '@/services';

const searchStore = useSearchStore();
const userStore = useUserStore();

function goToDetails(id: number) {
    router.push(`/details/${id}`)
}

async function saveProduct(id: number, quantity: number) {
    //? Fetching the true SearchResultsFoods not the one returned by the search
    const product = await fetchItemById(id);

    const newProduct: Food = {
        ...product,
        quantity
    }
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
                    <TableRow @click="goToDetails(result.fdcId)" v-for="result in searchStore.searchResultsFoods">
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
                <p v-else>Nothing to display</p>
            </div>
        </div>
        <ResultsPagination class="m-auto" v-if="searchStore.totalPage > 0" />
    </div>
</template>