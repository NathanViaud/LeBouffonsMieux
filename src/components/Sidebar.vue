<script setup lang="ts">
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button';
import { ref } from 'vue';

const emit = defineEmits<{
    (e: 'search', query: string) : void;
}>()

const search = ref('');

function handleSearch() {
    emit('search', search.value);
}
</script>

<template>
    <div class="flex flex-col gap-3 h-full border-r-2 border-r-gray-200 pr-3">
        <Input v-model="search" placeholder="bread" @keydown.enter="handleSearch" />
        <Button @click="handleSearch">Search</Button>
    </div>
</template>