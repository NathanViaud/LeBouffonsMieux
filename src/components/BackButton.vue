<script setup lang="ts">
import { Button } from '@/components/ui/button';
import { router } from '@/router';

function goBack() {
    router.back();
}
</script>

<template>
    <Button @click="goBack" variant="ghost" size="icon">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
        </svg>
    </Button>
</template>