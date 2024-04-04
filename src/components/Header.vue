<script setup lang="ts">
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-vue-next'
import { router } from '@/router.ts';
import { ref } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

const emit = defineEmits<{
    (e: 'search', query: string) : void;
}>()

const search = ref('');

function handleSearch() {
    router.push('/search');
    emit('search', search.value);
}
</script>

<template>
    <div class="border-b-2 border-b-gray-200 pt-2 pb-3 px-3 align-center bg w-full fixed z-10 top-0 backdrop-blur-lg">
        <div class="flex flex-row">
            <router-link to="/" class="flex flex-row gap-2">
                <img class="h-24 rounded-xl" src="@/assets/DALLE_2024-04-02_12.06.59_-_Create_a_logo_for_an_application_named_LeBouffonsMieux._The_logo_should_combine_the_imagery_of_a_jester_bouffon_and_food_creating_a_playful_yet_r.webp" alt="">
                <div class="text-3xl font-bold flex flex-col justify-center">
                    <p>Bouffons</p>
                    <p>Mieux</p>
                </div>
            </router-link>
            <div class="flex flex-1 justify-end flex-row items-center gap-6 ">
                <div v-if="route.path === '/search'" class="relative w-full max-w-sm items-center">
                    <Input v-model="search" placeholder="bread" @keydown.enter="handleSearch" class="pl-10" />
                    <span class="absolute start-0 inset-y-0 flex items-center justify-center px-2">
                        <Search class="size-6 text-muted-foreground" />
                    </span>
                </div>
                <Button @click="router.push('/daily')" class="gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
                    </svg>
                    Daily Result
                </Button>
            </div>
        </div>
    </div>
</template>