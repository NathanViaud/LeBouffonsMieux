<script setup lang="ts">
import { useSearchStore } from '@/stores/search.store';
import SearchResults from '@/components/SearchResults.vue';

const searchStore = useSearchStore();

</script>

<template>
    <div class="flex gap-2">
        <div class="flex flex-col gap-2 w-full">
            <SearchResults :results="searchStore.searchResultsFoods" />
        </div>
    </div>
</template>