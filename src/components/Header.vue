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
    if(route.path !== '/search') router.push('/search');

    emit('search', search.value);
}
</script>

<template>
    <header class="border-b-2 border-b-gray-200 pt-2 pb-3 px-3 align-center bg w-full fixed z-10 top-0 backdrop-blur-lg bg-white/50">
        <div class="flex flex-row gap-5">
            <router-link to="/" class="flex flex-row gap-2">
                <img class="h-16 rounded-xl" src="@/assets/DALLE_2024-04-02_12.06.59_-_Create_a_logo_for_an_application_named_LeBouffonsMieux._The_logo_should_combine_the_imagery_of_a_jester_bouffon_and_food_creating_a_playful_yet_r.webp" alt="">
                <div class="text-2xl font-bold flex flex-col justify-center">
                    <p>Bouffons</p>
                    <p>Mieux</p>
                </div>
            </router-link>
            <div class="flex flex-1 justify-end flex-row items-center gap-6 ">
                <div class="relative w-full max-w-sm items-center">
                    <Input id="searchbar" v-model="search" placeholder="Search..." @keydown.enter="handleSearch" class="pl-10" />
                    <span class="absolute start-0 inset-y-0 flex items-center justify-center px-2">
                        <Search class="size-6 text-muted-foreground" />
                    </span>
                </div>
                <router-link to="/daily">
                    <Button variant="ghost" size="icon" class="w-16 h-16 rounded-full">
                        <img src="@/assets/avatar.png" alt="">
                    </Button>
                </router-link>
            </div>
        </div>
    </header>
</template>