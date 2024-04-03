<script setup lang="ts">
import Sidebar from '@/components/Sidebar.vue';
import { useSearchStore } from '@/stores/search.store';
import SearchResults from '@/components/SearchResults.vue';

const searchStore = useSearchStore();

async function handleSearch(query: string) {
    await searchStore.search(query);
}

</script>

<template>
    <div class="flex gap-2">
        <Sidebar @search="handleSearch" />
        <div class="flex flex-col gap-2 w-full">
            <SearchResults :results="searchStore.searchResults" />
        </div>
    </div>
</template>