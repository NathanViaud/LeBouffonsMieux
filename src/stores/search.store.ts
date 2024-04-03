import { SearchResultFood } from '@/types';
import { defineStore } from 'pinia';
import { fetchItemById, search } from '@/services';

interface SearchStore {
    searchResults: SearchResultFood[];
    loading: boolean;
}

export const useSearchStore = defineStore('search', {
    state: (): SearchStore => ({
        searchResults: [],
        loading: false
    }),
    
    getters: {
        getItemById: (state) => (id: number) => {
            return state.searchResults.find((item) => item.fdcId === id);
        }
    },
    
    actions: {
        async search(query: string) {
            this.loading = true;
            this.searchResults = await search(query);
            this.loading = false;
        },
        
        async fetchItemById(id: number) {
            return await fetchItemById(id);
        }
    }
})