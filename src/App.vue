<script setup lang="ts">
import { Toaster } from '@/components/ui/toast';
import Header from '@/components/Header.vue';
import { useSearchStore } from '@/stores/search.store';
import { onMounted } from 'vue';

const searchStore = useSearchStore();

async function handleSearch(query: string) {
    await searchStore.search(query);
}

onMounted(() => {
   window.addEventListener('keydown', (e) => {
       if(e.key === 'k' && (e.metaKey || e.ctrlKey) || e.key === '/') {
           e.preventDefault();
           document.getElementById('searchbar')?.focus();
       }

   })
})

</script>

<template>
    <Header @search="handleSearch" />
    <router-view class="p-4 mt-32" />
    <Toaster />
</template>

<style scoped>
</style>
