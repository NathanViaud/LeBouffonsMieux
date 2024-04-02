<script setup lang="ts">
import { Button } from '@/components/ui/button';
import Sidebar from '@/components/Sidebar.vue';
import { useSearchStore } from '@/stores/search.store';

const searchStore = useSearchStore();

async function handleSearch(query: string) {
    searchStore.search(query);
}

</script>

<template>
    <div class="flex gap-2">
        <Sidebar @search="handleSearch" />
        <div class="flex flex-col gap-2">
            <pre v-if="!searchStore.loading">{{ searchStore.searchResults }}</pre>
            <p v-else>Loading...</p>
            <Button>Click me!</Button>
        </div>
    </div>
</template>