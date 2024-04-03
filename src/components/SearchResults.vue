<script setup lang="ts">
import { Table, TableRow, TableHeader, TableHead, TableBody, TableCell } from '@/components/ui/table';
import { useSearchStore } from '@/stores/search.store.ts';
import { getFormattedDate } from '@/utils';
import { Button } from '@/components/ui/button';

const searchStore = useSearchStore();

function addItem() {
    // TODO: Implement add item functionality
    console.log('Add item');
}

function details() {
    // TODO: Implement details functionality
    console.log('Details');
}

</script>

<template>
    <Table v-if="searchStore.searchResults.length > 0 && !searchStore.loading">
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
            <TableRow @click="details" v-for="result in searchStore.searchResults">
                <TableCell>{{ result.ndbNumber }}</TableCell>
                <TableCell>{{ result.description }}</TableCell>
                <TableCell>{{ getFormattedDate(result.publishedDate) }}</TableCell>
                <TableCell>{{ result.foodCategory }}</TableCell>
                <TableCell>
                    <Button variant="outline" @click.stop="addItem">Add</Button>
                </TableCell>
            </TableRow>
        </TableBody>
    </Table>
    <div v-else class="w-full text-center h-24 justify-center flex items-center">
        <div
            v-if="searchStore.loading"
            class="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white"
            role="status">
            <span
                class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
            >Loading...</span>
        </div>

        <p v-else>Nothing to display</p>
    </div>
</template>