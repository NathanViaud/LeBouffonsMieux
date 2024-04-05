<script setup lang="ts">
import { Pagination, PaginationList, PaginationFirst, PaginationPrev, PaginationListItem, PaginationEllipsis, PaginationNext, PaginationLast } from '@/components/ui/pagination';
import { Button } from '@/components/ui/button';
import { useSearchStore } from '@/stores/search.store.ts';

const searchStore = useSearchStore();

function changePage(page: number) {
    if(page === searchStore.currentPage) return;

    searchStore.changePage(page);
}

</script>

<template>
    <Pagination @update:page="changePage" v-slot="{ page }" :total="searchStore.totalPage * 10" :sibling-count="1" show-edges :default-page="1">
        <PaginationList v-slot="{ items }" class="flex items-center gap-1">
            <PaginationFirst />
            <PaginationPrev />

            <template v-for="(item, index) in items">
                <PaginationListItem v-if="item.type === 'page'" :key="index" :value="item.value" as-child>
                    <Button class="w-10 h-10 p-0" :variant="item.value === page ? 'default' : 'outline'">
                        {{ item.value }}
                    </Button>
                </PaginationListItem>
                <PaginationEllipsis v-else :key="item.type" :index="index" />
            </template>

            <PaginationNext />
            <PaginationLast />
        </PaginationList>
    </Pagination>
</template>