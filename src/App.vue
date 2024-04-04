<script setup lang="ts">
import Header from '@/components/Header.vue';
import { useSearchStore } from '@/stores/search.store';

const searchStore = useSearchStore();

async function handleSearch(query: string) {
    await searchStore.search(query);
}

</script>

<template>
    <Header @search="handleSearch" />
    <router-view class="p-4" />
</template>

<style scoped>
</style>
